import { ec } from "elliptic";
import { toChecksumAddress } from "ethereum-checksum-address";
import keccak256 from "keccak256";
import { UserState } from "../../store/reducers/user";

const EC = new ec("secp256k1");

function trimFirst12Bytes(hexString: string) {
  return "0x".concat(hexString.substring(hexString.length - 40));
}

export const pubKeyToAddress = (
  compressedPubkey: string | ec.KeyPair | Buffer | number[] | Uint8Array | { x: string; y: string }
) => {
  let keyPair = EC.keyFromPublic(compressedPubkey, "hex");
  // remove '04' then add prefix '0x'
  let pubkey = "0x" + keyPair.getPublic(false, "hex").substring(2);
  let address = trimFirst12Bytes(keccak256(pubkey).toString("hex"));
  return toChecksumAddress(address);
};

export const parsePriKey = (priKey: string): UserState => {
  const keys = EC.keyFromPrivate(priKey);
  const pubKey = keys.getPublic(true, "hex");
  const addr = pubKeyToAddress(pubKey);
  return {
    addr,
    pubKey,
    isLoggedIn: true,
    priKey,
  };
};
