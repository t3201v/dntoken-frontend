import api from ".";
import { Transaction } from "../components/types";

const path = "/trans";

export function sendTransaction(trans: Transaction, pri: string) {
  return api.post(`${path}/add`, { trans, pri });
}
