/// <reference types="react-scripts" />

interface Window {
  ethereum?: {
    isMetaMask?: boolean
    networkVersion: string
    chainId: string
    selectedAddress: string | null;
    isConnected: () => boolean
    request: (request: { method: string, params?: Array<any> }) => Promise<any>
    on: (...args: any[]) => void
    removeListener: (...args: any[]) => void
  }
}