//https://eth-ropsten.alchemyapi.io/v2/KpU_cwJzSauJvNQZSOgHhewTDMJn_qdV

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/KpU_cwJzSauJvNQZSOgHhewTDMJn_qdV',
            accounts: ['dcb8f0b917294b94b9ac475067aac907ce9ce7bf4b0c3acc7385f8812103e590']

        }
    }
}