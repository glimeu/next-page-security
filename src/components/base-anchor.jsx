import Link from 'next/link';

export function BaseAnchor({ href, children, ...rest }) {
  return (
    <Link href={href} passHref>
      <a {...rest}>{children}</a>
    </Link>
  );
}
