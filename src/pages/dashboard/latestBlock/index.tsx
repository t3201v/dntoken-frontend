import MCard from "../../../components/commons/card";

export default function LatestBlock({ latestBlock }: { latestBlock?: number } = {}) {
  return (
    <MCard props={{ className: "p-6" }}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">DN Coin</h5>
      <p className="font-semibold text-gray-700 dark:text-slate-200">Latest Block: {latestBlock}</p>
    </MCard>
  );
}
