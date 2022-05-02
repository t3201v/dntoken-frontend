import MCard from "../../../components/commons/card";

export default function ChainMiningReward({ miningRwd }: { miningRwd?: number } = {}) {
  return (
    <MCard>
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">Mining Reward</h5>
        <p className="font-semibold text-gray-700 dark:text-slate-200">{miningRwd}</p>
      </div>
    </MCard>
  );
}
