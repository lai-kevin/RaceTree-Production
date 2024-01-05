import { ReactNode } from 'react';

const Mobile = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:hidden bg-neutral">
      {children}
    </div>
    );
};

export default Mobile;
