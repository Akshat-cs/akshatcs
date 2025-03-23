// Wallet connection utilities

// Type declarations for window object extensions
declare global {
  interface Window {
    ethereum?: any;
    solana?: any;
  }
}

// MetaMask connection
export const connectMetaMask = async (): Promise<string | null> => {
  if (typeof window === "undefined" || !window.ethereum) {
    alert("Please install MetaMask to connect your wallet");
    return null;
  }

  try {
    // Request account access
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    return null;
  }
};

// Phantom wallet connection
export const connectPhantom = async (): Promise<string | null> => {
  if (typeof window === "undefined") return null;

  // Check if Phantom is installed
  const provider = window.solana;

  if (!provider?.isPhantom) {
    alert("Please install Phantom wallet to donate SOL");
    return null;
  }

  try {
    const { publicKey } = await provider.connect();
    return publicKey.toString();
  } catch (error) {
    console.error("Error connecting to Phantom wallet:", error);
    return null;
  }
};

// Send SOL donation
export const sendSolDonation = async (amount: number): Promise<boolean> => {
  if (
    typeof window === "undefined" ||
    !window.solana ||
    !window.solana.isPhantom
  ) {
    alert("Please install Phantom wallet to donate SOL");
    return false;
  }

  try {
    // Connect to wallet if not already connected
    if (!window.solana.isConnected) {
      await window.solana.connect();
    }

    // Create a transaction to send SOL
    const transaction = new window.solana.Transaction().add(
      window.solana.SystemProgram.transfer({
        fromPubkey: window.solana.publicKey,
        toPubkey: "AkshatMeenaSOL123456789abcdefghijklmnopqrstuv", // Your Solana address
        lamports: amount * 1000000000, // Convert SOL to lamports (1 SOL = 10^9 lamports)
      })
    );

    // Send the transaction
    const signature = await window.solana.signAndSendTransaction(transaction);
    return true;
  } catch (error) {
    console.error("Error sending SOL donation:", error);
    return false;
  }
};
