import Link from 'next/link';

export default function InitialLoadTests() {
  return (
    <div className="container">
      <h1>Initial Load Tests</h1>
      <ol>
        <li>
          <Link href="/initial-load/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="/initial-load/css-modules">CSS Modules</Link>
        </li>
      </ol>
      <div>
        <Link href="/" className="back-link">
          ← Back to tests
        </Link>
      </div>
    </div>
  );
}
