import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ol>
        <li>
          <Link href="change-css-prop/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="change-css-prop/css-modules">CSS Modules</Link>
        </li>
      </ol>
    </div>
  );
}
