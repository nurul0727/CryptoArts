const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

// with matic
const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [privateKey],
    },
    polygon: {
      url: 'https://rpc.ankr.com/polygon/67aae01450ddfae267cecaf7a021a2aebbf6be570816d9aabf19d3c735132ebe',
      accounts: [privateKey],
    }
  },
  solidity: '0.8.4',
};
