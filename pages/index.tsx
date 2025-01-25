import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}
