export default function GlassCard({ children, className = "", hover = false, padding = "default", ...props }) {
  return <div className={`glass-card ${hover ? "glass-card-hover" : ""} glass-card-${padding} ${className}`.trim()} {...props}>{children}</div>;
}
