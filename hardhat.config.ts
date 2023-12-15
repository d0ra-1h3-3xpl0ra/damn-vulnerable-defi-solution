import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-chai-matchers" ;
import "@nomiclabs/hardhat-ethers" ;
import '@openzeppelin/hardhat-upgrades' ;
import 'hardhat-dependency-compiler' ;

const config: HardhatUserConfig = { 
    networks: {
      hardhat: {
        allowUnlimitedContractSize: true
      }
    },
    solidity: {
      compilers: [
        { version: "0.8.16" },
        { version: "0.7.6" },
        { version: "0.6.6" }
      ]
    },
    dependencyCompiler: {
      paths: [
        '@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol',
        '@gnosis.pm/safe-contracts/contracts/proxies/GnosisSafeProxyFactory.sol',
        'solmate/src/tokens/WETH.sol',
      ],
    }
}


export default config;
