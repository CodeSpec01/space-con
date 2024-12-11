import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    useEffect(() => {
      const button = document.getElementById(
        "timeline-particles-btn"
      ) as HTMLButtonElement;

      const simulateMouseDown = () => {
        if (button) {
          const rect = button.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;

          const mouseDownEvent = new MouseEvent("mousedown", {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
          });

          button.dispatchEvent(mouseDownEvent);
        }
      };

      const simulateMouseUp = () => {
        if (button) {
          const mouseUpEvent = new MouseEvent("mouseup", {
            bubbles: true,
            cancelable: true,
          });
          button.dispatchEvent(mouseUpEvent);
        }
      };

      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIndex(-1);
          simulateMouseUp();
          return () => clearTimeout(timeout);
        }, 4000);
        simulateMouseDown();
      }
    }, [index, delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <>
      <motion.div {...animations} layout className="mx-auto w-full">
        {children}
      </motion.div>
    </>
  );
}
