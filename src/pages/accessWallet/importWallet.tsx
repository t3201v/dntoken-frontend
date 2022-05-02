import { ChangeEvent, useRef, useState } from "react";
import { parsePriKey } from "../../components/helpers/utils";
import { IcBaselineContentCopy } from "../../components/icons/copy";
import { IcBaselineLogin } from "../../components/icons/login";
import { MdiWallet } from "../../components/icons/wallet";
import { useAppDispatch } from "../../store/hooks";
import { update } from "../../store/reducers/user";

export default function ImportWallet() {
  const [keypair, setKeypair] = useState({
    pubKey: "",
    priKey: "",
  });
  const dispatch = useAppDispatch();

  const inputFile = useRef<HTMLInputElement>(null);

  const handleSetKeypair = ({ pubKey, priKey }: { pubKey?: string; priKey?: string }) => {
    if (pubKey && priKey) {
      return setKeypair({ pubKey, priKey });
    }
    if (pubKey) setKeypair((pre) => ({ ...pre, pubKey }));
    else if (priKey) setKeypair((pre) => ({ ...pre, priKey }));
  };

  const handleCopyToClipboard = (data: string) => {
    navigator.clipboard.writeText(data);
  };

  const handleImportFile = () => {
    inputFile.current?.click();
  };

  const handleParseKeypair = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    if (e.target.files) reader.readAsText(e.target.files[0]);
  };

  function onReaderLoad(e: ProgressEvent<FileReader>) {
    const obj = JSON.parse(e.target?.result?.toString() || "");
    // console.log(obj);

    handleSetKeypair(obj);
    // dispatch(update(parsePriKey(obj.priKey)));
  }

  const handleAccessWallet = () => {
    dispatch(update(parsePriKey(keypair.priKey)));
  };

  return (
    <>
      <div>
        <h1 className="mb-4 text-3xl font-bold text-center dark:text-slate-300">Access My Wallet</h1>
        <p className="mx-auto mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 dark:text-slate-400 w-80">
          Please select your key file that unlocks your wallet.
        </p>
      </div>
      <div className="space-y-4">
        <div className="relative flex items-stretch justify-center w-full mb-3 border rounded-lg outline-none dark:text-slate-50 dark:border-mt-black-200 hover:dark:bg-mt-black-400 focus:dark:border-mt-black-50 hover:dark:border-mt-black-50 dark:bg-mt-black-500">
          <input
            type="text"
            placeholder="Public Key"
            value={keypair.pubKey}
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
            onClick={handleImportFile}
            className="flex items-center justify-center w-64 py-3 text-xl font-semibold bg-purple-400 rounded hover:bg-purple-300 hover:dark:text-slate-50 dark:text-slate-200 dark:bg-mt-purple-500 dark:border-mt-purple-300 hover:dark:border-mt-purple-100 hover:dark:bg-mt-purple-200">
            <span className="mr-1">
              <MdiWallet />
            </span>
            Import Wallet
          </button>

          <input
            onChange={handleParseKeypair}
            accept="application/JSON"
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
          />
        </div>

        <div className="mt-6 ml-2 text-center">
          <button
            onClick={handleAccessWallet}
            className="flex items-center justify-center w-64 py-3 text-xl font-semibold border border-purple-400 rounded hover:border-purple-300 hover:dark:text-slate-50 dark:text-slate-200 hover:dark:bg-mt-black-400 dark:border-mt-purple-300 hover:dark:border-mt-purple-100">
            <span className="mr-1">
              <IcBaselineLogin />
            </span>
            Access Wallet
          </button>
        </div>
      </div>
    </>
  );
}
