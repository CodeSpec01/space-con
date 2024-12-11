interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 10,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:15s] [duration:var(--duration)] [--gap:1vw] [gap:var(--gap)] ${
        !vertical ? "flex-row" : "flex-col"
      } ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-aroundb [gap:var(--gap)] ${
              !vertical
                ? "animate-marquee flex-row"
                : "animate-marquee-vertical flex-col"
            } ${
              pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
            } ${reverse ? "[animation-direction:reverse]" : ""}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
