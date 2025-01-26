import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ol>
        <li>
          <Link href="create-and-mount-button/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/css-modules">CSS Modules</Link>
        </li>
      </ol>
    </div>
  );
}
