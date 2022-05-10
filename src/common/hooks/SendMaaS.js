
import { ethers, utils } from "ethers";
import { message } from "ant-design-vue";
import defaultConfig from "@/config/config";

const provider = window.ethereum;
if (typeof provider == "undefined") {
  console.log("Please install MetaMask");
  message.warning("请安装MetaMask!!!");
}

// const MaaS = defaultConfig.MaaS_PROD;
// const MaaS = defaultConfig.MaaS_PPE;
const MaaS = defaultConfig.MaaS_TEST;

const CEO_ADDRESS = MaaS.CEO_ADDRESS;
// console.log(MaaS);
// console.log(process.env.NODE_ENV);
export default {
  // 获取用户地址 连接
  async getAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let accounts = await provider.send("eth_requestAccounts", []);
    return accounts[0];
  },
  // 合约操作
  async contract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let wallet = provider.getSigner();

    // 查询对应权限的合约地址
    let address = await this.getAddress();
    // 从对象中找出符合address地址的值
    let privilege = MaaS.Privilege.find(item => item.name.toLowerCase() == address.toLowerCase());
    if (privilege == undefined) {
      message.error("无权限操作!");
      return false;
    }
    MaaS.contract.TransferHelper.address = privilege.address;
    let writeContract = this.createContract(MaaS.contract, wallet);
    return writeContract;
  },
  // 合约操作
  createContract(contractConfig, wallet) {
    let contracts = {};
    Object.entries(contractConfig).forEach(([name, contractInfo]) => {
      contracts[name] = new ethers.Contract(
        contractInfo.address,
        contractInfo.abi,
        wallet
      );
    });
    return contracts;
  },
  // 获取当前用户所有卡包
  async getboxNFTIds() {
    await this.getAddress();

    let writeContract = await this.contract();
    let owner = await this.getAddress();//CEO_ADDRESS;
    let pageIndex = 0;
    let sizePerPage = 50;
    let [totalPage, array] = await writeContract['JiJi001'].boxNFTIds(owner, pageIndex, sizePerPage);

    // 卡包列表
    let nftids = [];
    for (let i = 0; i < totalPage.toNumber(); i++) {
      let k = await writeContract['JiJi001'].boxNFTIds(owner, i, sizePerPage);
      let r = k[1].map(item => {
        return item.toNumber();
      });
      nftids.push(r);
    }

    let BoxMetadatas = [];
    for (let i = 0; i < nftids.length; i++) {
      let box = await writeContract['JiJi001'].getBoxMetadatas(nftids[i]);
      BoxMetadatas.push(box);
    }

    // 卡包
    let Metadatas = [];
    BoxMetadatas.forEach((item, index) => {
      for (let mdata of BoxMetadatas[index]) {
        let arrData = mdata.split('-');
        Metadatas.push({ type: arrData[4], id: arrData[5] });
      }
    });

    return Metadatas;
  },
  // 批量发送卡包
  async sendTransfer(address, num, card) {
    let dstAddresses = [];
    let ids = JSON.parse(JSON.stringify(card));
    for (let i = 0; i < address.length; i++) {
      for (let j = 0; j < Number(num); j++) {
        dstAddresses.push(address[i]);
        // ids.push(card);
      }
    }
    await this.getAddress();

    let writeContract = await this.contract();
    console.log(dstAddresses, ids);
    let res = await writeContract['TransferHelper'].BatchTransferMultiAddress(dstAddresses, ids);
    return res;
  },
  // 查询合约是否授权
  async getAuthorization() {
    console.log('----验证合约是否已经授权----');
    let owner = await this.getAddress();
    let writeContract = await this.contract();
    let privilege = MaaS.Privilege.find(item => item.name.toLowerCase() == owner.toLowerCase());
    console.log(privilege);
    if (privilege == undefined) {
      message.error("无权限操作!");
      return false;
    }
    // 检查是否授权
    let isAuth = await writeContract['ShuihuMysteryBox'].isApprovedForAll(owner, privilege.address);
    console.log(`isAuth: ${isAuth}`);
    if (!isAuth) {
      // 授权
      let setAuth = await writeContract['ShuihuMysteryBox'].setApprovalForAll(privilege.address, true);
      message.info("合约授权成功!");
      console.log(`setAuth: ${setAuth}`);
    }
    return true;
  }
};
