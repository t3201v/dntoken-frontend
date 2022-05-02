import { HTMLProps, ReactNode } from "react";

export default function MCard({ children, props }: { children?: ReactNode; props?: HTMLProps<HTMLDivElement> } = {}) {
  return (
    <div className="block w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-mt-black-400 dark:border-mt-black-400">
      <div children={children} {...props} />
    </div>
  );
}
