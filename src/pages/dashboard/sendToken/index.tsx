import { ChangeEvent, HTMLProps, SyntheticEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { sendTransaction } from "../../../api/trans";
import MCard from "../../../components/commons/card";
import { Transaction } from "../../../components/types";
import { useAppSelector } from "../../../store/hooks";

export default function SendToken(props: HTMLProps<HTMLDivElement>) {
  const user = useAppSelector((s) => s.user);

  const [data, setData] = useState({
    trans: {} as Transaction,
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setData((pre) => ({ ...pre, trans: { from: user.pubKey } as Transaction }));

    return () => {
      setData({ trans: {} as Transaction });
    };
  }, [user]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!data.trans.to || !data.trans.amount) {
      toast.error("Không được bỏ trống");
      return;
    }

    sendTransaction(data.trans, user.priKey)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleChangeToAddr = (e: ChangeEvent<HTMLInputElement>) => {
    setData((pre) => ({
      ...pre,
      trans: {
        amount: pre.trans.amount,
        from: pre.trans.from,
        to: e.target.value,
      },
    }));
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setData((pre) => ({
      ...pre,
      trans: {
        amount: +e.target.value,
        to: pre.trans.to,
        from: pre.trans.from,
      },
    }));
  };

  return (
    <MCard props={props}>
      <form onSubmit={handleSubmit}>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">Send</h5>
        </div>

        <div className="pt-6">
          <div className="flex items-stretch justify-center w-full mb-3 border rounded-lg outline-none dark:text-slate-50 dark:border-mt-black-200 focus:dark:border-mt-black-50 hover:dark:border-mt-black-50">
            <input
              type="text"
              placeholder="To Address"
              name="addr"
              onChange={handleChangeToAddr}
              onClick={(e) => e.currentTarget.select()}
              className="w-full px-4 py-3 text-sm border-none rounded-lg bg-inherit"
            />
          </div>

          <div className="flex items-stretch justify-center w-full mb-3 border rounded-lg outline-none dark:text-slate-50 dark:border-mt-black-200 focus:dark:border-mt-black-50 hover:dark:border-mt-black-50">
            <input
              type="number"
              min="0"
              name="amount"
              onChange={handleChangeAmount}
              placeholder="Amount"
              onClick={(e) => e.currentTarget.select()}
              className="w-full px-4 py-3 text-sm border-none rounded-lg bg-inherit"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:border-mt-purple-500 dark:bg-mt-purple-500 dark:hover:bg-mt-purple-200 focus:dark:ring-mt-purple-500">
              Send
            </button>
          </div>
        </div>
      </form>
    </MCard>
  );
}
