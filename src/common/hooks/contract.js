/*
 * @Author: Jackie
 * @Date: 2022-05-12 15:41:45
 * @LastEditTime: 2022-05-13 11:28:55
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/common/hooks/contract.js
 * @version: 
 */
import { ethers, utils } from "ethers";
// import Web3 from "web3";
class contract {
    #_wallet;
    #_contracts = {};
    #_chainInfo;
    #_chainId;

    constructor(config, auth) {
        this.#_chainInfo = auth;
        // this.#_chainId = config.chainId;
        this.#_wallet = this.#_chainInfo.getWeb3().getSigner();
        // this.#_wallet = ethers.getDefaultProvider('ropsten');
        this.#_contracts = this.createContract(config.contract);
        // console.log(this.#_contracts);
    }

    createContract(contractConfig) {
        let contracts = {};
        // const provider = window.ethereum;
        // const web3 = new Web3(provider);
        Object.entries(contractConfig).forEach(([name, contractInfo]) => {
            contracts[name] = new ethers.Contract(
                contractInfo.address,
                contractInfo.abi,
                this.#_wallet
            );
        });
        return contracts;
    }

    // 获取当前用户所有卡包
    async getboxNFTIds() {
        let owner = await this.#_chainInfo.getAddress();
        let pageIndex = 0;
        let sizePerPage = 50;
        let [totalPage, array] = await this.#_contracts['JiJi001'].boxNFTIds(owner, pageIndex, sizePerPage);

        // 卡包列表
        let nftids = [];
        for (let i = 0; i < totalPage.toNumber(); i++) {
            let k = await this.#_contracts['JiJi001'].boxNFTIds(owner, i, sizePerPage);
            let r = k[1].map(item => {
                return item.toNumber();
            });
            nftids.push(r);
        }

        let BoxMetadatas = [];
        for (let i = 0; i < nftids.length; i++) {
            let box = await this.#_contracts['JiJi001'].getBoxMetadatas(nftids[i]);
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
    }

    async sendMaaS() {
        try {
            await this.#_contracts['TransferHelper'].SOURCE_ROLE();
            console.log(this.#_contracts['TransferHelper']);
            // console.log(await this.#_contracts['TransferHelper'].SOURCE_ROLE());
            // const tx = await this.#_contracts['TransferHelper'].methods['removeTrigger']().send(
            //     {
            //         from: await this.#_chainInfo.getAddress(),
            //         to: '0x19454736d51741DE5c5839f4Bd4ed2D88D7B4b85',
            //     }
            // )
        } catch (error) {
            console.log(error);
        }
    }

    async send(contract, method, value, args) {
        if (!(await this.check(contract))) {
            return false;
        }
        try {
            const tx = await this.#_contracts[contract].methods[method](...args).send(
                {
                    from: await this.#_chainInfo.getAddress(),
                    value: utils.parseUnits(value, 18),
                    // gas,
                    // gasPrice: ,
                }
            );
            console.log("build Transaction", tx);
            return true;
        } catch (error) {
            console.log(error);
            // if (this.isRefuse(error.message)) {
            //     this.#_chainInfo.handleRefuse();
            // } else {
            //     this.#_chainInfo.handleTrError();
            // }
            return false;
        }
    }
    isRefuse(msg) {
        var reg = new RegExp("denied transaction signature", "g");
        let exist = msg.match(reg);
        return exist ? true : false;
    }

}

export default contract;