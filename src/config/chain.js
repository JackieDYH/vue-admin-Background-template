/*
 * @Author: Jackie
 * @Date: 2022-05-12 17:24:35
 * @LastEditTime: 2022-05-12 17:53:01
 * @LastEditors: Jackie
 * @Description: 链配置信息
 * @FilePath: /vue-admin-Background-template/src/config/chain.js
 * @version: 
 */
module.exports = {
    42: {
        chainId: "0x2a",
        chainName: "Kovan testNet",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
        blockExplorerUrls: ["https://kovan.etherscan.io"],
    },
    1: {
        chainId: "0x1",
        chainName: "Ethereum Mainnet",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
        blockExplorerUrls: ["https://etherscan.io"],
    },
    3: {
        chainId: "0x3",
        chainName: "Ropsten testNet",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
        blockExplorerUrls: ["https://ropsten.etherscan.io"],
    },
    5: {
        chainId: "0x5",
        chainName: "Goerli testNet",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
        blockExplorerUrls: ["https://goerli.etherscan.io"],
    },
    97: {
        chainId: "0x61",
        chainName: "BSC testNet",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
        blockExplorerUrls: ["https://testnet.bscscan.com/"],
    },
    56: {
        chainId: "0x38",
        chainName: "Binance Smart Chain Mainnet",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
        blockExplorerUrls: ["https://bscscan.com/"],
    },
    80001: {
        chainId: "0x13881",
        chainName: "Mumbai",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
        blockExplorerUrls: ["https://polygonscan.com/"],
    },
    1088: {
        chainId: "0x440",
        chainName: "MaaS testNet",
        nativeCurrency: {
            name: "MaaS",
            symbol: "MaaS",
            decimals: 18,
        },
        rpcUrls: ["http://124.223.210.171:8545"],
        blockExplorerUrls: ["http://124.223.210.171:6702"],
    },
    2088: {
        chainId: "0x828",
        chainName: "MaaS Mainnet",
        nativeCurrency: {
            name: "MaaS",
            symbol: "MaaS",
            decimals: 18,
        },
        rpcUrls: ["https://maas-node.onchain.com/"],
        blockExplorerUrls: ["https://maas-explorer.onchain.com/"],
    },
};