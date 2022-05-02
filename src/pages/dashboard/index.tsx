import TransactionHistory, { Transaction } from "../../components/commons/txHistory";
import LatestBlock from "./latestBlock";
import MyTokenBalance from "./myTokenBalance";
import SendToken from "./sendToken";
import SideBar from "./sidebar";

const tx: Transaction[] = [
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
  {
    from: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    to: "0xe6715B2A36d3DEaE86Caa49CD7B3573Fa6E1eA9E",
    amount: 0,
    timestamp: Date.now(),
  },
];

export default function DashBoard() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="sticky top-0 h-screen">
        <SideBar />
      </div>

      <div className="flex flex-row w-full dark:bg-mt-black-700">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="col-span-2">
              <MyTokenBalance />
            </div>

            <div>
              <LatestBlock />
            </div>

            <div className="col-span-2">
              <TransactionHistory tx={tx} />
            </div>

            <div>
              <SendToken />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
