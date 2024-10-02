/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "Polygon_zkEVM_Cardona",
    networks: {
      hardhat: {},
      Polygon_zkEVM_Cardona: {
        url: "https://rpc.cardona.zkevm-rpc.com",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
