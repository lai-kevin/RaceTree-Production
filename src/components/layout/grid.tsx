"use client";

import React, { useEffect, useState } from "react";

interface GridProps {
  columns: number;
  gap: number;
  children: React.ReactNode;
  className?: string; // Add className prop
}

const Grid: React.FC<GridProps> = ({ columns, gap, children, className }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Update windowWidth on component mount
      setWindowWidth(window.innerWidth);
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let adjustedColumns = Math.floor(windowWidth / 360);
  if (adjustedColumns > 4) adjustedColumns = 4;

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${adjustedColumns}, 1fr)`,
    gap: `${gap}rem`,
  };

  if (windowWidth === 0) {
    return null; // Render nothing if windowWidth is 0
  }

  return (
    <div className={className} style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;
