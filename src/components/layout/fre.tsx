import { ReactNode } from "react";

type FrameProps = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
};

const Fre: React.FC<FrameProps> = ({
  children,
  backgroundColor = "bg-base-100",
  className,
}) => {
  return (
  <div data-theme="retro" className={`flex justify-center items-center h-screen ${backgroundColor}`}>
    {children}
  </div>);
};

export default Fre;
