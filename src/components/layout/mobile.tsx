import { ReactNode } from 'react';

const Mobile = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="md:hidden">
      {children}
      </div>
    </div>
    );
};

export default Mobile;
