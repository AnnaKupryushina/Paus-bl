/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan:{
    apiKey: "P2IDPUUYAEN6UVZS7Q11ZRGKYWBFAAENB5"
   }
}
