import { ReactNode } from 'react';

const Mobile = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:hidden">
      {children}
    </div>
    );
};

export default Mobile;
