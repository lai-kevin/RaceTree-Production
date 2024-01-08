import React from "react";
import NavBar from "@/src/components/global/navbar";

type FrameProps = {
  children: React.ReactNode;
  className?: string;
};

const Frame: React.FC<FrameProps> = ({
  children,
  className,
}) => {
  return (
    <div data-theme="retro">
      <NavBar />
      <main
        className={className}
      >
        {children}
      </main>
    </div>
  );
};

export default Frame;
