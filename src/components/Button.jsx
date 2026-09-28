export default function Button({ href, variant = "primary", children, ...props }) {
  const className = `button button-${variant}`;
  if (href) return <a className={className} href={href} {...props}>{children}</a>;
  return <button className={className} type="button" {...props}>{children}</button>;
}
