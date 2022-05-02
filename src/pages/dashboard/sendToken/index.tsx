import MCard from "../../../components/commons/card";

export default function SendToken() {
  return (
    <MCard props={{ className: "p-6" }}>
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">Send</h5>
      </div>

      <div className="pt-6">
        <div className="flex items-stretch justify-center w-full mb-3 border rounded-lg outline-none dark:text-slate-50 dark:border-mt-black-200 focus:dark:border-mt-black-50 hover:dark:border-mt-black-50">
          <input
            type="text"
            placeholder="To Address"
            onClick={(e) => e.currentTarget.select()}
            className="w-full px-4 py-3 text-sm border-none rounded-lg bg-inherit"
          />
        </div>

        <div className="flex items-stretch justify-center w-full mb-3 border rounded-lg outline-none dark:text-slate-50 dark:border-mt-black-200 focus:dark:border-mt-black-50 hover:dark:border-mt-black-50">
          <input
            type="number"
            min="0"
            placeholder="Amount"
            onClick={(e) => e.currentTarget.select()}
            className="w-full px-4 py-3 text-sm border-none rounded-lg bg-inherit"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:border-mt-purple-500 dark:bg-mt-purple-500 dark:hover:bg-mt-purple-200 focus:dark:ring-mt-purple-500">
            Send
          </button>
        </div>
      </div>
    </MCard>
  );
}
