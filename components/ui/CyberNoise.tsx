'use client';

export function CyberNoise() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden opacity-[0.05]">
      <div className="absolute inset-[-100%] noise-surface" />
      <style>{`
        .noise-surface {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          animation: noise-move 0.2s steps(2) infinite;
        }
        @keyframes noise-move {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(1%, 2%); }
          30% { transform: translate(-2%, 1%); }
          40% { transform: translate(1%, -2%); }
          50% { transform: translate(-1%, 2%); }
          60% { transform: translate(2%, 1%); }
          70% { transform: translate(-1%, -1%); }
          80% { transform: translate(1%, 1%); }
          90% { transform: translate(-2%, 0); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
}
