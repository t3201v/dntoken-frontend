export default function ProgressStepBar({ step, maxStep }: { step: number; maxStep: number }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-slate-300 rounded-full h-2.5">
      <div
        className="bg-purple-600 dark:bg-mt-purple-500 h-2.5 rounded-full"
        style={{ width: `${(step / maxStep) * 100}%` }}></div>
    </div>
  );
}
