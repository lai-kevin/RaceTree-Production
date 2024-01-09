import React from "react";
import NavBar from "@/src/components/global/navbar";
import Footer from "../global/footer";

type FrameProps = {
  children: React.ReactNode;
  className?: string;
  navMode?: "light" | "dark";
};

const Frame: React.FC<FrameProps> = ({
  children,
  navMode = "light",
  className,
}) => {
  return (
    <div data-theme="retro">
      <NavBar mode={navMode} />
      <main
        className={className}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Frame;
