import { useEffect, useState } from "react";
import { socket } from "../..";
import { getDataInDashboard } from "../../api/token";
import Loading from "../../components/commons/loading";
import { newBkEv } from "../../components/helpers/ev";
import SideBar from "../../components/sidebar";
import TransactionHistory from "../../components/txHistory";
import { IBlock, Transaction } from "../../components/types";
import { useAppSelector } from "../../store/hooks";
import LatestBlock from "./latestBlock";
import MineBlock from "./mineBlock";
import MyTokenBalance from "./myTokenBalance";
import SendToken from "./sendToken";

interface DataState {
  txHistory: Transaction[];
  balance: number;
  latestBlock: number;
}

export default function DashBoard() {
  const [data, setData] = useState({} as DataState);
  const [isRendering, setIsRendering] = useState(true);
  const user = useAppSelector((s) => s.user);

  useEffect(() => {
    let isMounted = true;
    getDataInDashboard(user.priKey).then((res: any) => {
      if (isMounted) setData(res.data.col);
      if (isMounted) setIsRendering(false);
    });

    socket.on(newBkEv, ({ b }: { b: IBlock }) => {
      // console.log(b);

      setData((pre) => {
        let newBalance = pre.balance;
        let newTxns = pre.txHistory.slice(0, pre.txHistory.length);

        // select related transactions in this block and add timestamp to the object
        // get new balance from the transactions
        b.transactions.forEach((t) => {
          if (t.from === user.pubKey) {
            newBalance -= t.amount;
            t.timestamp = b.timestamp;
            newTxns.unshift(t);
          }
          if (t.to === user.addr) {
            newBalance += t.amount;
            t.timestamp = b.timestamp;
            newTxns.unshift(t);
          }
        });
        // console.log(newTxns);
        // console.log(newBalance);

        return { balance: newBalance, latestBlock: b.index + 1, txHistory: newTxns };
      });
    });

    return () => {
      setData({} as DataState);
    };
  }, [user]);

  if (isRendering)
    return (
      <div className="min-h-screen p-6">
        <Loading className="w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-mt-purple-50" />
      </div>
    );

  return (
    <div className="flex flex-row min-h-screen">
      <div className="sticky top-0 h-screen">
        <SideBar />
      </div>

      <div className="flex flex-row w-full dark:bg-mt-black-700">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="col-span-2">
              <MyTokenBalance balance={data.balance} />
            </div>

            <div>
              <LatestBlock latestBlock={data.latestBlock} />
            </div>

            <div className="col-span-2">
              <TransactionHistory tx={data.txHistory} />
            </div>

            <div>
              <div className="mb-4">
                <SendToken className="p-6" />
              </div>
              <MineBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
