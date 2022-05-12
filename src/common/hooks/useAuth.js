/*
 * @Author: Jackie
 * @Date: 2022-05-12 15:41:33
 * @LastEditTime: 2022-05-12 18:25:01
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/common/hooks/useAuth.js
 * @version: 
 */
import { ethers, utils } from "ethers";

class useAuth {
    #_web3;
    #_signer;
    #_chainId;
    #_address;
    #_signMessage;
    #_allowedChain;
    #_chainBase;

    static getInstance(config) {
        if (!this._instance) {
            this._instance = new useAuth(config);
        } else {
            console.log("lazy loading singleton has created");
        }
        return this._instance;
    }

    constructor(config) {
        const provider = window.ethereum;
        if (typeof provider == "undefined") {
            console.log("Please install MetaMask");
            return;
        }
        this.#_web3 = new ethers.providers.Web3Provider(provider);
        this.#_allowedChain = config.allowedChain;
        this.#_chainBase = config.chainBase;
    }

    // 获取web3对象
    getWeb3() {
        return this.#_web3;
    }

    // 获取当前账户地址
    async getAddress() {
        if (!this.#_address) {
            await this.authorize();
        }
        return this.#_address;
    }

    // 获取当前账户信息
    async getSigner() {
        if (!this.#_signer) {
            await this.authorize();
        }
        return this.#_signer;
    }

    // 获取账户余额
    async getBalance() {
        let owner = await this.getAddress();
        let balance = await this.#_web3.getBalance(owner);
        // 格式转换
        // utils.formatEther(balance.toString()) //Ether
        // ethers.utils.parseEther("1.0") //wei
        return utils.formatEther(balance.toString());
    }

    // 获取链ID
    async getChain() {
        if (!this.#_chainId) {
            await this.loadChain();
        }
        return this.#_chainId;
    }

    // 获取用户签名
    async getSign() {
        if (!this.#_signMessage) {
            await this.signMessage();
        }
        return this.#_signMessage;
    }

    // 获取用户签名
    async signMessage() {
        let address = await this.getAddress();
        let word = Math.random().toString(36).slice(-6);
        let wordHex = utils.toUtf8Bytes(word);
        wordHex = utils.hexlify(wordHex);
        const signature = await window.ethereum.request({
            method: "personal_sign",
            params: [address, wordHex],
        });
        this.#_signMessage = { address, word, signature };
        return false;
    }

    // 账户授权
    async authorize() {
        if (!window.ethereum) {
            return false;
        }
        try {
            // const accounts = await window.ethereum.request({method: 'eth_requestAccounts',});
            const accounts = await this.#_web3.send("eth_requestAccounts", []);
            this.#_signer = this.#_web3.getSigner();
            if (accounts && accounts.length > 0) {
                this.#_address = accounts[0];
                return true;
            }
        } catch (e) {
            console.error("Failed to request accounts from ethereum.", e);
        }
        return false;
    }

    // 获取链ID
    async loadChain() {
        this.#_chainId = parseInt(
            await window.ethereum.request({ method: "eth_chainId" })
        );
    }

}

export default useAuth;