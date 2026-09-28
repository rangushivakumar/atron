export default function SectionHeading({ label, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow"><span className="eyebrow-dot" />{label}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
