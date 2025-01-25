import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="mount-deep-tree/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/css-modules">CSS Modules</Link>
        </li>
      </ul>
    </div>
  );
}
