/*
 * @Author: Jackie
 * @Date: 2022-05-12 17:53:30
 * @LastEditTime: 2022-05-12 18:14:48
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/config/config.dev.js
 * @version: 
 */
const config = {};
//链基础信息
config.allowedChain = [2088, 1088];

// 正式环境 配置信息
config.MaaS_PROD = {
    CEO_ADDRESS: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',
    chainId: 2088,
    contract: {
        JiJi001: {
            address: "0x77A46581e3Ecfd6AcEfE35495907E4Ad89A93B17",
        },
        ShuihuMysteryBox: {
            address: "0x4dd441838E58229c57A9cebf52057a59a6Ece302",
        },
        TransferHelper: {
            address: "",
        }
    },
    Privilege: [
        {
            name: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',//ceo宋阳
        },
        {
            name: '0x089aA6410e54254841750eA1A743DD05B96C81b3',//op1宋阳
        },
        {
            name: '0xaF5e4cEC43fd50C7fF24B8292e8fc0d2De5b943d',//op2赵磊
        },
        {
            name: '0x204b75fdfa11f9f1f5115af68959d92f99e6e8ce',//op3老灼
        },
    ]
};

// 正式预发布环境 配置信息
config.MaaS_PPE = {
    CEO_ADDRESS: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',
    chainId: 1088,
    contract: {
        JiJi001: {
            address: "0x39bbfD7FF9756d8B5205294c67Dc14e6B883b7A8",
        },
        ShuihuMysteryBox: {
            address: "0x2e772EFDFE6c07805C0E8c969781629eaEc2FEde",
        },
        TransferHelper: {
            address: "",
        }
    },
    Privilege: [
        {
            name: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',//ceo宋阳
        },
        {
            name: '0xA197b86e6f4aFAF1666A54607Bf1964326712F88',//ceo张睿
        },
        {
            name: '0x089aA6410e54254841750eA1A743DD05B96C81b3',//op1宋阳
        },
        {
            name: '0xaF5e4cEC43fd50C7fF24B8292e8fc0d2De5b943d',//op2赵磊
        },
        {
            name: '0x6CDA52C660D38CeB60755992f458B9Aa6Bbd354D',//Optest张睿
        },
        {
            name: '0x204b75fdfa11f9f1f5115af68959d92f99e6e8ce',//op3老灼
        },
    ]
};

// 测试环境 配置信息
config.MaaS_TEST = {
    CEO_ADDRESS: '0x6bf83fd55448BCACF02584c3E93ad9C398986B89',
    chainId: 1088,
    contract: {
        JiJi001: {
            address: "0x699d27A3Bad6E75A4cb49A611f07031Cc382f3eC",
        },
        ShuihuMysteryBox: {
            address: "0x922112A08d892342fd38DF8355a3A181c3aE678E",
        },
        TransferHelper: {
            address: "",
        }
    },
    Privilege: [
        {
            name: '0x6bf83fd55448BCACF02584c3E93ad9C398986B89',//ceo
        },
        {
            name: '0xb9bD2F4Ea01DA3692d50259ABF8e6E21317dC517',//
        },
    ]
};

// export default config;
module.exports = config;