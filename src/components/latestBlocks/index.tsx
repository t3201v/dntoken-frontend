import MCard from "../commons/card";
import { IBlock } from "../types";
import BkItem from "./bkItem";

export default function LatestBlocks({ blocks }: { blocks: IBlock[] }) {
  return (
    <MCard>
      <div>
        <div className="p-6 border-b border-b-gray-200 dark:border-b-mt-black-300">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">Latest Blocks</h5>
        </div>

        <div className="overflow-y-scroll dark max-h-96">
          {blocks?.map((b, i) => (
            <div
              key={i}
              className="px-6 py-1 border-b bg-gray-50 border-b-gray-200 dark:border-b-mt-black-300 hover:bg-gray-200 dark:bg-inherit hover:dark:bg-mt-black-300">
              <BkItem b={b} />
            </div>
          ))}
        </div>
      </div>
    </MCard>
  );
}
