import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="full-render-manual-test/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/css-modules">CSS Modules</Link>
        </li>
      </ul>
    </div>
  );
}
