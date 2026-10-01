import { useRef } from "react";
import "./HeroGalaxy.css";

const stages = [
  { name: "IDEA", subtitle: "Concept", className: "galaxy-idea" },
  { name: "BUILD", subtitle: "Product", className: "galaxy-build" },
  { name: "LAUNCH", subtitle: "Go Live", className: "galaxy-launch" },
  { name: "GROW", subtitle: "Scale", className: "galaxy-grow" },
];

export default function HeroGalaxy() {
  const visualRef = useRef(null);
  const frameRef = useRef(0);

  function handlePointerMove(event) {
    if (event.pointerType === "touch" || !visualRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      visualRef.current?.style.setProperty("--parallax-x", (x * 3).toFixed(2) + "px"); visualRef.current?.style.setProperty("--core-parallax-x", (x * -4).toFixed(2) + "px");
      visualRef.current?.style.setProperty("--parallax-y", (y * 3).toFixed(2) + "px"); visualRef.current?.style.setProperty("--core-parallax-y", (y * -4).toFixed(2) + "px");
    });
  }

  function resetPointer() {
    if (!visualRef.current) return;
    cancelAnimationFrame(frameRef.current);
    visualRef.current.style.setProperty("--parallax-x", "0px");
    visualRef.current.style.setProperty("--parallax-y", "0px");
    visualRef.current.style.setProperty("--core-parallax-x", "0px");
    visualRef.current.style.setProperty("--core-parallax-y", "0px");
  }

  return (
    <div
      className="hero-galaxy"
      ref={visualRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      role="img"
      aria-label="Atron digital product journey: idea, build, launch and grow"
    >
      <div className="galaxy-atmosphere" />
      <svg className="galaxy-orbits" viewBox="0 0 500 500" aria-hidden="true">
        <defs>
          <linearGradient id="orbitTint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity=".32" />
            <stop offset="52%" stopColor="#FFFFFF" stopOpacity=".035" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity=".27" />
          </linearGradient>
          <linearGradient id="orbitPath" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity=".02" />
            <stop offset="50%" stopColor="#5EEAD4" stopOpacity=".28" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity=".04" />
          </linearGradient>
        </defs>
        <circle className="orbit orbit-wide" cx="250" cy="250" r="208" />
        <circle className="orbit orbit-mid" cx="250" cy="250" r="166" />
        <ellipse className="orbit orbit-inner" cx="250" cy="250" rx="123" ry="148" />
        <path className="orbit-link" d="M250 64 C290 122 340 147 375 190 C332 222 328 296 365 333 C327 372 293 394 250 436" />
        <path className="orbit-link orbit-link-alt" d="M99 250 C153 217 190 172 214 129 M104 250 C153 284 187 327 215 370" />
        <circle className="orbit-particle particle-one" cx="250" cy="41" r="2.2" />
        <circle className="orbit-particle particle-two" cx="427" cy="250" r="1.8" />
        <circle className="orbit-particle particle-three" cx="250" cy="459" r="2" />
        <circle className="orbit-particle particle-four" cx="73" cy="250" r="1.7" />
        <circle className="orbit-spark" cx="142" cy="117" r="2.3" />
        <circle className="orbit-spark orbit-spark-blue" cx="387" cy="375" r="2.1" />
      </svg>

      <div className="galaxy-core">
        <span className="galaxy-core-mark" aria-hidden="true">A</span>
        <strong>ATRON</strong>
        <span className="galaxy-core-caption">Digital Product Studio</span>
        <i className="core-light" />
      </div>

      {stages.map((stage) => (
        <div className={"galaxy-node " + stage.className} key={stage.name}>
          <span className="galaxy-node-light" />
          <strong>{stage.name}</strong>
          <span>{stage.subtitle}</span>
        </div>
      ))}

      <span className="galaxy-dust dust-one" />
      <span className="galaxy-dust dust-two" />
      <span className="galaxy-dust dust-three" />
      <span className="galaxy-dust dust-four" />
      <span className="galaxy-dust dust-five" />
    </div>
  );
}



