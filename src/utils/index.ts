export const formatWallet = (address: any) => {
    if (!address) return "";
    return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
  };