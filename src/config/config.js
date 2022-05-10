const config = {};
//链基础信息

// 正式环境 配置信息
config.MaaS_PROD = {
    url: `https://maas-node.onchain.com/`,
    CEO_ADDRESS: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',
    chainId: 2088,
    contract: {
        JiJi001: {
            address: "0x77A46581e3Ecfd6AcEfE35495907E4Ad89A93B17",
            abi: require("@/config/abis/JiJi001.json").abi
        },
        ShuihuMysteryBox: {
            address: "0x4dd441838E58229c57A9cebf52057a59a6Ece302",
            abi: require("@/config/abis/ShuihuMysteryBox.json").abi
        },
        TransferHelper: {
            address: "",
            abi: require("@/config/abis/TransferHelper.json").abi
        }
    },
    Privilege: [
        {
            name: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',//ceo宋阳
            address: '0xE3ABF7220318190e659a6445193E017FeA12a099'
        },
        {
            name: '0x089aA6410e54254841750eA1A743DD05B96C81b3',//op1宋阳
            address: '0xEe1cC664F9C1dE3f38AdFF5aAAfb153FAF2149F5'
        },
        {
            name: '0xaF5e4cEC43fd50C7fF24B8292e8fc0d2De5b943d',//op2赵磊
            address: '0xB6F9F7d5C6270605301443AE5FeA7Bc0BE024C88'
        },
        {
            name: '0x204b75fdfa11f9f1f5115af68959d92f99e6e8ce',//op3老灼
            address: '0xf84D698aE858Eea43BbD32123791BD83c4476997'
        },
    ]
};

// 正式预发布环境 配置信息
config.MaaS_PPE = {
    url: `https://maas-node.onchain.com/`,
    CEO_ADDRESS: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',
    chainId: 1088,
    contract: {
        JiJi001: {
            address: "0x39bbfD7FF9756d8B5205294c67Dc14e6B883b7A8",
            abi: require("@/config/abis/JiJi001.json").abi
        },
        ShuihuMysteryBox: {
            address: "0x2e772EFDFE6c07805C0E8c969781629eaEc2FEde",
            abi: require("@/config/abis/ShuihuMysteryBox.json").abi
        },
        TransferHelper: {
            address: "",
            abi: require("@/config/abis/TransferHelper.json").abi
        }
    },
    Privilege: [
        {
            name: '0xe9e2A6A6606A2e51d18f47491098354b8D032262',//ceo宋阳
            address: '0x8833f5796C1F98e13b61f0Ae13b672fee9dA981D'
        },
        {
            name: '0xA197b86e6f4aFAF1666A54607Bf1964326712F88',//ceo张睿
            address: '0xF6b57dF655dCeBedc48D9e7888c17bA690e46526'
        },
        {
            name: '0x089aA6410e54254841750eA1A743DD05B96C81b3',//op1宋阳
            address: '0xe33F1b374668BB46c15e316d1b92B245602a3EEf'
        },
        {
            name: '0xaF5e4cEC43fd50C7fF24B8292e8fc0d2De5b943d',//op2赵磊
            address: '0x0e197Fb943594fA57ADf722756d86B70956B8b53'
        },
        {
            name: '0x6CDA52C660D38CeB60755992f458B9Aa6Bbd354D',//Optest张睿
            address: '0x9cf3122E20fD0C89Cb7900C71642557394c2A867'
        },
        {
            name: '0x204b75fdfa11f9f1f5115af68959d92f99e6e8ce',//op3老灼
            address: '0x48090E93720179ea603CB931D8644c577dbd3a4B'
        },
    ]
};

// 测试环境 配置信息
config.MaaS_TEST = {
    url: `http://124.223.210.171:8545/`,
    CEO_ADDRESS: '0x6bf83fd55448BCACF02584c3E93ad9C398986B89',
    chainId: 1088,
    contract: {
        JiJi001: {
            address: "0x699d27A3Bad6E75A4cb49A611f07031Cc382f3eC",
            abi: require("@/config/abis/JiJi001.json").abi
        },
        ShuihuMysteryBox: {
            address: "0x922112A08d892342fd38DF8355a3A181c3aE678E",
            abi: require("@/config/abis/ShuihuMysteryBox.json").abi
        },
        TransferHelper: {
            address: "",
            abi: require("@/config/abis/TransferHelper.json").abi
        }
    },
    Privilege: [
        {
            name: '0x6bf83fd55448BCACF02584c3E93ad9C398986B89',//ceo
            address: '0x3d715059df87Cf84f1ACb8A0cA5708A32743A066'
        },
        {
            name: '0xb9bD2F4Ea01DA3692d50259ABF8e6E21317dC517',//
            address: '0x3d715059df87Cf84f1ACb8A0cA5708A32743A066'
        },
    ]
};

export default config;