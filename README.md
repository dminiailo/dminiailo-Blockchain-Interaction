const BlockchainInteraction = require('blockchain-interaction');

// Replace with your Ethereum node provider URL
const providerUrl = 'YOUR_ETHEREUM_PROVIDER_URL';
const blockchainInteraction = new BlockchainInteraction(providerUrl);

// Replace with the sender's Ethereum address
const fromAddress = 'YOUR_FROM_ADDRESS';

// Replace with the recipient's Ethereum address
const toAddress = 'YOUR_TO_ADDRESS';

// Amount to send in Ether
const valueToSend = 0.1;

(async () => {
  try {
    // Get balance before sending
    const initialBalance = await blockchainInteraction.getBalance(fromAddress);
    console.log(`Initial balance of ${fromAddress}: ${initialBalance} ETH`);

    // Send transaction
    const transactionHash = await blockchainInteraction.sendTransaction(fromAddress, toAddress, valueToSend);
    console.log(`Transaction sent. Transaction Hash: ${transactionHash}`);

    // Get updated balance after sending
    const updatedBalance = await blockchainInteraction.getBalance(fromAddress);
    console.log(`Updated balance of ${fromAddress}: ${updatedBalance} ETH`);
  } catch (error) {
    console.error(error.message);
  }
})();
