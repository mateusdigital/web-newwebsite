// -----------------------------------------------------------------------------
interface LinkProps {
  className?: string;
  href: string;
  children?: any;
  target?: string;
}

// -----------------------------------------------------------------------------
export function Link({ className, href, children, target }: LinkProps) {
  const is_abs_url = href.startsWith("http") || href === "/";
  const has_extension = href.endsWith(".html");

  let final_href = href;

  if (!is_abs_url) {
    if (!has_extension && href.length > 1) {
      final_href = `${href}.html`;
    }
  }

  return (
    <a className={className} href={final_href} target={target}>
      {children}
    </a>
  );
}
