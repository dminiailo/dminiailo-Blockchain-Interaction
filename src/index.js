// blockchain-interaction.js
const Web3 = require('web3');

class BlockchainInteraction {
  constructor(providerUrl) {
    this.web3 = new Web3(providerUrl);
  }

  async getBalance(address) {
    try {
      const balance = await this.web3.eth.getBalance(address);
      return this.web3.utils.fromWei(balance, 'ether');
    } catch (error) {
      throw new Error(`Error getting balance for address ${address}: ${error.message}`);
    }
  }

  async sendTransaction(from, to, value) {
    try {
      const gasPrice = await this.web3.eth.getGasPrice();
      const gasLimit = 21000; // Default gas limit for a simple transaction

      const transactionObject = {
        from,
        to,
        value: this.web3.utils.toWei(value.toString(), 'ether'),
        gasPrice,
        gas: gasLimit,
      };

      const transactionHash = await this.web3.eth.sendTransaction(transactionObject);
      return transactionHash;
    } catch (error) {
      throw new Error(`Error sending transaction: ${error.message}`);
    }
  }
}

module.exports = BlockchainInteraction;
