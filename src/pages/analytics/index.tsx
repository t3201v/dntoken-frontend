import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { socket } from "../..";
import { getBlockchainAnalytics } from "../../api/token";
import Loading from "../../components/commons/loading";
import { newBkEv } from "../../components/helpers/ev";
import LatestBlocks from "../../components/latestBlocks";
import SideBar from "../../components/sidebar";
import TransactionHistory from "../../components/txHistory";
import { IBlock, Transaction } from "../../components/types";
import { useAppSelector } from "../../store/hooks";
import ChainDifficulty from "./difficulty";
import ChainMiningReward from "./miningRwd";

export default function DNTokenAnalytics() {
  const user = useAppSelector((s) => s.user);
  const [data, setData] = useState({
    difficulty: 0,
    miningRwd: 0,
    blocks: [] as IBlock[],
    txns: [] as Transaction[],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getBlockchainAnalytics()
      .then((res) => {
        if (isMounted) setData(res.data.col);
        if (isMounted) setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    socket.on(newBkEv, ({ b }: { b: IBlock }) => {
      setData((pre) => {
        let newBks = pre.blocks.slice(0, pre.blocks.length);
        newBks.unshift(b);

        let newTxns = pre.txns.slice(0, pre.txns.length);
        b.transactions.forEach((tx) => {
          tx.timestamp = b.timestamp;
          newTxns.unshift(tx);
        });
        return { ...pre, blocks: newBks, txns: newTxns };
      });
    });
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen p-6">
        <Loading className="w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-mt-purple-50" />
      </div>
    );

  return (
    <div className="flex flex-row min-h-screen">
      {user.isLoggedIn && (
        <div className="sticky top-0 h-screen">
          <SideBar />
        </div>
      )}

      <div className="flex flex-row w-full dark:bg-mt-black-700">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-4 p-4">
            <div className="col-span-6">
              <ChainDifficulty difficulty={data.difficulty} />
            </div>
            <div className="col-span-6">
              <ChainMiningReward miningRwd={data.miningRwd} />
            </div>

            <div className="col-span-6">
              <LatestBlocks blocks={data.blocks} />
            </div>
            <div className="col-span-6">
              <TransactionHistory tx={data.txns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
