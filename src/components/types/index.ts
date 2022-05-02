export interface Transaction {
  amount: number;
  from: string;
  to: string;
  signature?: string;
  timestamp?: number | string | Date;
}

export interface IBlock {
  hash: string;
  index: number;
  nonce: number;
  precedingHash: string;
  timestamp: number | string | Date;
  transactions: Transaction[];
  miner?: string;
  txns?: number;
  total?: number;
}
