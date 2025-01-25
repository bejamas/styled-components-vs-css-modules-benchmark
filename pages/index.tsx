import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Performance Tests</h1>
      <ol>
        <li>
          <Link href="/initial-load">Initial Load Tests</Link>
        </li>
        <li>
          <Link href="/hydration">Hydration Tests</Link>
        </li>
        <li>
          <Link href="/change-css-prop">Change CSS Prop Tests</Link>
        </li>
        <li>
          <Link href="/change-a-variant">Change Variant Tests</Link>
        </li>
        <li>
          <Link href="/create-and-mount-button">Create and Mount Tests</Link>
        </li>
        <li>
          <Link href="/mount-deep-tree">Mount Deep Tree Tests</Link>
        </li>
        <li>
          <Link href="/mount-wide-tree">Mount Wide Tree Tests</Link>
        </li>
        <li>
          <Link href="/full-render-manual-test">Full Render Manual Tests</Link>
        </li>
      </ol>
    </div>
  );
}
