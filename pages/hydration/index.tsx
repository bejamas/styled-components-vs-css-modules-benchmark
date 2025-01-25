import Link from 'next/link';

export default function HydrationTests() {
  return (
    <div className="container">
      <h1>Hydration Tests</h1>
      <ol>
        <li>
          <Link href="/hydration/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="/hydration/css-modules">CSS Modules</Link>
        </li>
      </ol>
      <div>
        <Link href="/" className="back-link">← Back to tests</Link>
      </div>
    </div>
  );
}
