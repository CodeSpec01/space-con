// import { AnimatePresence, motion, Variants } from "framer-motion";

// interface GradualSpacingProps {
//   text: string;
//   duration?: number;
//   delayMultiple?: number;
//   framerProps?: Variants;
//   className?: string;
// }

// export function GradualSpacing({
//   text,
//   duration = 0.5,
//   delayMultiple = 0.04,
//   framerProps = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0 },
//   },
//   className,
// }: GradualSpacingProps) {
//   return (
//     <div className="flex justify-center space-x-1">
//       <AnimatePresence>
//         {text.split("").map((char, i) => (
//           <motion.h1
//             key={i}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={framerProps}
//             transition={{ duration, delay: i * delayMultiple }}
//             className={`drop-shadow-sm ${className}`}
//           >
//             {char === " " ? <span>&nbsp;</span> : char}
//           </motion.h1>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const [key, setKey] = useState(0);

  return (
    <div
      className="flex justify-center space-x-1 pointer-events-none"
      id="spacecon-subtitle"
      onClick={() => setKey((prevKey) => prevKey + 1)} // Increment key to restart animation
      key={key} // Unique key to re-render the component
    >
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={`drop-shadow-sm ${className}`}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
