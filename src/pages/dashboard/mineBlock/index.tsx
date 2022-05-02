import { SyntheticEvent } from "react";
import { toast } from "react-toastify";
import { mineNewBlock } from "../../../api/token";
import MCard from "../../../components/commons/card";
import { useAppSelector } from "../../../store/hooks";

export default function MineBlock() {
  const user = useAppSelector((s) => s.user);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    mineNewBlock(user.addr)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <MCard props={{ className: "p-6" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">Mine Block</h5>
          <p className="font-semibold text-gray-700 dark:text-slate-200">Add new block to the chain</p>
        </div>

        <div className="pt-6">
          <div className="flex justify-center">
            <button
              type="submit"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:border-mt-purple-500 dark:bg-mt-purple-500 dark:hover:bg-mt-purple-200 focus:dark:ring-mt-purple-500">
              Mine
            </button>
          </div>
        </div>
      </form>
    </MCard>
  );
}
