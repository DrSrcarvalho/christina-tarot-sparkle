import candle from "@/assets/candle.png";

const candles = [
  { top: "18%", left: "3%", size: 70, delay: "0s", opacity: 0.55 },
  { top: "42%", right: "2%", size: 90, delay: "1.2s", opacity: 0.6 },
  { top: "68%", left: "4%", size: 60, delay: "0.6s", opacity: 0.5 },
  { top: "85%", right: "5%", size: 75, delay: "1.8s", opacity: 0.55 },
];

export function FloatingCandles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 hidden lg:block overflow-hidden">
      {candles.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            opacity: c.opacity,
          }}
        >
          <div className="relative" style={{ width: c.size }}>
            {/* Chama */}
            <div
              className="absolute left-1/2 -translate-x-1/2 candle-flame"
              style={{
                bottom: `calc(100% - ${c.size * 0.04}px)`,
                animationDelay: c.delay,
              }}
            >
              <div className="flame-outer" />
              <div className="flame-inner" />
              <div className="flame-glow" />
            </div>
            {/* Vela */}
            <img
              src={candle}
              alt=""
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,180,120,0.35)]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
