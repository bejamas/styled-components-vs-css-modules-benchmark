import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ol>
        <li>
          <Link href="sierpinski-triangle/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="sierpinski-triangle/css-modules">CSS Modules</Link>
        </li>
      </ol>
    </div>
  );
}
