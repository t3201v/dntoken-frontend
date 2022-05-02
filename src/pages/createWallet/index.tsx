import { useState } from "react";
import { useNavigate } from "react-router";
import ProgressStepBar from "../../components/commons/progressSteps";
import GenKeyPair from "./genKeyPair";

export default function CreateWallet() {
  const [step, setStep] = useState(0);
  const [maxStep] = useState(3);
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-purple-400 h-screen-9/10 dark:bg-mt-black-400">
      <div className="absolute z-10 hidden transform rotate-45 bg-purple-300 dark:bg-mt-black-300 w-60 h-60 rounded-xl top-5 -left-16 md:block" />
      <div className="absolute hidden w-48 h-48 transform bg-purple-300 dark:bg-mt-black-300 rounded-xl -bottom-6 -right-10 rotate-12 md:block" />

      <div className="z-10 px-12 py-12 bg-white shadow-xl dark:bg-mt-black-500 rounded-2xl">
        <div className="pb-4">
          <ProgressStepBar step={step} maxStep={maxStep - 1} />
        </div>

        <GenKeyPair callback={() => setStep((pre) => pre + 1)} />

        <div className="pt-6 text-center dark:text-slate-500">
          Already have a wallet?{" "}
          <span
            onClick={() => navigate("/access/wallet")}
            className="underline cursor-pointer">
            Access to wallet
          </span>
        </div>
      </div>
      <div className="absolute z-10 hidden w-40 h-40 bg-purple-300 rounded-full dark:bg-mt-black-300 -top-5 right-12 md:block"></div>
      <div className="absolute hidden w-20 h-40 transform rotate-45 bg-purple-300 rounded-full dark:bg-mt-black-300 -z-0 bottom-20 left-10 md:block"></div>
    </div>
  );
}
