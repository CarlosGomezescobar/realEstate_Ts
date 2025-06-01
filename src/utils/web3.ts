import { ethers } from 'ethers';

const contractABI = [
  "function makePayment(uint256 amount) public payable",
  "function getBalance() public view returns (uint256)",
  "event PaymentReceived(address indexed from, uint256 amount, uint256 timestamp)"
];

export const makePaymentWithCrypto = async (amount: number) => {
  try {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Convert amount to Wei (assuming amount is in ETH)
    const amountInWei = ethers.utils.parseEther(amount.toString());

    const tx = await contract.makePayment(amountInWei, { value: amountInWei });
    await tx.wait();

    return {
      success: true,
      transactionHash: tx.hash
    };
  } catch (error) {
    console.error('Error making crypto payment:', error);
    throw error;
  }
};