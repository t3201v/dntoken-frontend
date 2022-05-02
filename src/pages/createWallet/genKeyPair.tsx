import { ec } from "elliptic";
import { useState } from "react";
import { IcBaselineContentCopy } from "../../components/icons/copy";
import { PhDownloadSimpleBold } from "../../components/icons/download";
import { MdiWalletPlus } from "../../components/icons/walletPlus";

const EC = new ec("secp256k1");

const saveTemplateAsFile = (filename: string, dataObjToWrite: any) => {
  const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "text/json" });
  const link = document.createElement("a");

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

  const evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove();
};

export default function GenKeyPair({ callback }: { callback?: Function } = {}) {
  const [keypair, setKeypair] = useState({
    pubKey: "",
    priKey: "",
  });

  const [done, setDone] = useState({
    genKeypair: false,
    downloadKeypair: false,
  });

  const handleSetKeypair = ({ pubKey, priKey }: { pubKey?: string; priKey?: string }) => {
    if (pubKey && priKey) {
      return setKeypair({ pubKey, priKey });
    }
    if (pubKey) setKeypair((pre) => ({ ...pre, pubKey }));
    else if (priKey) setKeypair((pre) => ({ ...pre, priKey }));
  };

  const handleGenKeyPair = () => {
    const keys = EC.genKeyPair();
    handleSetKeypair({ pubKey: keys.getPublic("hex"), priKey: keys.getPrivate("hex") });
    if (!done.genKeypair) {
      callback && callback();
      setDone((pre) => ({ ...pre, genKeypair: true }));
    }
  };

  const handleCopyToClipboard = (data: string) => {
    navigator.clipboard.writeText(data);
  };

  const handleSaveFile = () => {
    if (!keypair.priKey && !keypair.pubKey) return;

    const date = new Date(Date.now());
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const mili = date.getMilliseconds();

    const fname = `wl-${year}-${month}-${day}_${hours}_${minutes}_${seconds}_${mili}.json`;

    saveTemplateAsFile(fname, keypair);
    if (!done.downloadKeypair) {
      callback && callback();
      setDone((pre) => ({ ...pre, downloadKeypair: true }));
    }
  };

  return (
    <>
      <div>
        <h1 className="mb-4 text-3xl font-bold text-center dark:text-slate-300">Create A Wallet</h1>
        <p className="mx-auto mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 dark:text-slate-400 w-80">
          Create a wallet to enjoy all the services without any ads for free!
        </p>
      </div>
      <div className="space-y-4">
        <div className="relative flex items-stretch justify-center w-full mb-3 border rounded-lg outline-none dark:text-slate-50 dark:border-mt-black-200 hover:dark:bg-mt-black-400 focus:dark:border-mt-black-50 hover:dark:border-mt-black-50 dark:bg-mt-black-500">
          <input
            type="text"
            placeholder="Public Key"
            value={keypair.pubKey}
            readOnly
            onClick={(e) => e.currentTarget.select()}
            onChange={(e) => handleSetKeypair({ pubKey: e.target.value })}
            className="w-full px-4 py-3 text-sm border-none rounded-lg bg-inherit"
          />
          <div className="w-8 h-full py-3 pr-3 text-base font-normal leading-snug bg-transparent rounded text-slate-300">
            <button type="button" onClick={() => handleCopyToClipboard(keypair.pubKey)} className="rounded-lg">
              <IcBaselineContentCopy width="1.4rem" height="1.4rem" />
            </button>
          </div>
        </div>

        <div className="relative flex items-stretch justify-center w-full mb-3 border rounded-lg outline-none dark:text-slate-50 dark:border-mt-black-200 hover:dark:bg-mt-black-400 focus:dark:border-mt-black-50 hover:dark:border-mt-black-50 dark:bg-mt-black-500">
          <input
            type="text"
            placeholder="Private Key"
            value={keypair.priKey}
            readOnly
            onClick={(e) => e.currentTarget.select()}
            onChange={(e) => handleSetKeypair({ priKey: e.target.value })}
            className="w-full px-4 py-3 text-sm border-none rounded-lg bg-inherit"
          />
          <div className="w-8 h-full py-3 pr-3 text-base font-normal leading-snug bg-transparent rounded text-slate-300">
            <button type="button" onClick={() => handleCopyToClipboard(keypair.priKey)} className="rounded-lg">
              <IcBaselineContentCopy width="1.4rem" height="1.4rem" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-6 text-center">
          <button
            onClick={handleGenKeyPair}
            className="flex items-center justify-center w-64 py-3 text-xl font-semibold bg-purple-400 rounded hover:bg-purple-300 hover:dark:text-slate-50 dark:text-slate-200 dark:bg-mt-purple-500 dark:border-mt-purple-300 hover:dark:border-mt-purple-100 hover:dark:bg-mt-purple-200">
            <span className="mr-1">
              <MdiWalletPlus />
            </span>
            Generate Wallet
          </button>
        </div>

        <div className="mt-6 ml-2 text-center">
          <button
            onClick={handleSaveFile}
            className="flex items-center justify-center w-64 py-3 text-xl font-semibold border border-purple-400 rounded hover:border-purple-300 hover:dark:text-slate-50 dark:text-slate-200 hover:dark:bg-mt-black-400 dark:border-mt-purple-300 hover:dark:border-mt-purple-100">
            <span className="mr-1">
              <PhDownloadSimpleBold />
            </span>
            Download Wallet
          </button>
        </div>
      </div>
    </>
  );
}
