/*
 * @Author: Jackie
 * @Date: 2022-05-12 15:41:20
 * @LastEditTime: 2022-05-12 18:27:19
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue-admin-Background-template/src/common/hooks/useEagerConnect.js
 * @version: 
 */
import useAuth from "@/common/hooks/useAuth";
import contract from "@/common/hooks/contract";
import defaultConfig from "@/config/config";

const useEagerConnect = () => {
    const MaaS = defaultConfig.MaaS;

    const provider = window.ethereum;
    if (typeof provider == "undefined") {
        console.log("No web3? You should consider trying MetaMask!");
        return;
    }

    //cofing
    const config = loadConfig();
    //useAuth
    // let auth = new useAuth;
    let auth = useAuth.getInstance(config);

    // auth.listenAccountChanged();
    // auth.listenNetworkChanged();

    let contracts = {};
    contracts.MaaS_TEST = new contract(config.MaaS_TEST, auth);
    contracts.MaaS_PPE = new contract(config.MaaS_PPE, auth);
    contracts.MaaS_PROD = new contract(config.MaaS_PROD, auth);


    return { config, auth, contracts };
};

const loadConfig = () => {
    const mergeConfig = require('@/utils/mergeConfig');
    const defaultConfig = require('@/config/config');
    const config1 = require(`@/config/config.${process.env.VUE_APP_NODE_ENV}`);
    return mergeConfig(defaultConfig, config1);
};

export default useEagerConnect;