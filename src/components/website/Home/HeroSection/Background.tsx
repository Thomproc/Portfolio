import React, { useEffect, useRef } from "react";
import styles from "./Background.module.css";

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const angleOffsetRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const drawFrame = (angleOffset: number) => {
      const children = container.children;
      const numRows = 21;
      const numCols = 21;
      const radius = 21;
      const step = container.offsetWidth / numCols;

      for (let yStep = 0; yStep < numRows; yStep++) {
        let angle = yStep * (360 / 16) + angleOffset;
        const y = yStep * step + 0.5;
        for (let xStep = 0; xStep < numCols; xStep++) {
          const x = xStep * step + 0.5;
          const pos = calcPos(angle, radius);
          const index = yStep * numCols + xStep;
          const dot = children[index] as HTMLDivElement;
          dot.style.transform = `translate(${x + pos.x}px, ${y + pos.y}px)`;
          angle += 360 / 16;
        }
      }
    };

    const calcPos = (angle: number, radius: number) => {
      const angleRad = (angle * Math.PI) / 180;
      const x = Math.sin(angleRad) * radius;
      const y = Math.cos(angleRad) * radius;
      return { x, y };
    };

    const runAnim = () => {
      drawFrame(angleOffsetRef.current);
      angleOffsetRef.current = (angleOffsetRef.current + 7) % 360;
      setTimeout(runAnim, 30);
    };

    runAnim();
  }, []);

  // Generate dots for the grid
  const dots = [];
  for (let i = 0; i < 21 * 21; i++) {
    dots.push(<div key={i} className={styles.dot} />);
  }

  return (
    <div ref={containerRef} className={styles.container}>
      {dots}
    </div>
  );
};

export default Background;
