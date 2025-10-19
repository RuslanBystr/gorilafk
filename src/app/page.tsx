'use client'
import { useState } from 'react'

export default function Home() {
    const [flipped, setFlipped] = useState(false)

    return (
        <main className="root">
            <div className="scene">
                <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={flipped}
                    className={`card ${flipped ? 'is-flipped' : ''}`}
                    onClick={() => setFlipped(!flipped)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setFlipped(!flipped)
                        }
                    }}
                >
                    <div className="face front">👆 Доторкнись</div>

                    <div className="face back">
                        <img
                            src="/f-u-middle-finger.gif"
                            alt="Hero"
                            className="hero"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        :root {
          --card-max-w: 360px;
          --card-aspect: 0.727; /* height = width / aspect -> 360 * 0.727 ≈ 262, we'll use aspect-ratio instead */
        }

        .root{
          position:fixed;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(135deg, #071129 0%, #0f172a 40%, #1e293b 100%);
          overflow:hidden;
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
        }

        .scene{
          perspective:1000px;
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:24px;
        }

        .card{
          width:min(88vw, var(--card-max-w));
          aspect-ratio: 9 / 12;
          max-height: min(88vh, 640px);
          position:relative;
          transform-style:preserve-3d;
          transition: transform 0.8s cubic-bezier(.2,.9,.2,1), box-shadow 0.3s ease;
          border-radius:18px;
          cursor:pointer;
          box-shadow: 0 12px 36px rgba(2,6,23,0.6), 0 0 18px rgba(14,165,233,0.18);
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          user-select: none;
        }

        .card:focus{
          outline: 3px solid rgba(14,165,233,0.2);
          outline-offset: 6px;
        }

        .card.is-flipped{
          transform: rotateY(180deg);
        }

        @media (hover: hover) and (pointer: fine) {
          .card:hover{
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 20px 60px rgba(2,6,23,0.7), 0 0 28px rgba(14,165,233,0.28);
          }
        }

        .face{
          position:absolute;
          inset:0;
          border-radius:18px;
          backface-visibility:hidden;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .front{
          background: linear-gradient(145deg, rgba(51,65,85,1) 0%, rgba(30,41,59,1) 100%);
          color:#e6eef8;
          font-weight:700;
          font-size:clamp(16px, 3.6vw, 20px);
          letter-spacing:0.6px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.45);
        }

        .back{
          transform: rotateY(180deg);
          background: linear-gradient(145deg, rgba(14,165,233,0.06), rgba(30,41,59,0.9));
          display:flex;
          padding:8px;
        }

        .hero{
          width:100%;
          height:100%;
          max-width:100%;
          max-height:100%;
          object-fit:contain;
          border-radius:12px;
          display:block;
          pointer-events:none;
          user-select:none;
        }

        @media (max-width:420px){
          .card{
            width: min(92vw, 360px);
            aspect-ratio: 3 / 4;
            border-radius:14px;
          }
          .front{ font-size: 16px; }
        }
      `}</style>
        </main>
    )
}
