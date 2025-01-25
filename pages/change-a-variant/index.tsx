import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-a-variant/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="change-a-variant/css-modules">CSS Modules</Link>
        </li>
      </ul>
    </div>
  );
}
