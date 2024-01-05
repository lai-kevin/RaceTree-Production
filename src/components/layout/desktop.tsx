import { ReactNode } from "react";

const Desktop = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center bg-neutral">
      <div className="invisible hidden flex-col md:flex md:visible max-w-6xl">
        {children}
      </div>
    </div>
  );
};

export default Desktop;
