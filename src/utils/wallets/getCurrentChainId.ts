function getCurrentChainId(): string | null {
  return window?.ethereum?.chainId || null;
}

export default getCurrentChainId;
