import React from "react";

interface GridItemProps {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

const GridItem: React.FC<GridItemProps> = ({
  children,
  colSpan = 1,
  rowSpan = 1,
}) => {
  return (
    <div style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}>
      {children}
    </div>
  );
};

export default GridItem;
