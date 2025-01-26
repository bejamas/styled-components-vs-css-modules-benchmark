import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Performance Tests</h1>
      <p className="intro">
        This suite compares the performance characteristics of CSS Modules and Styled Components in React applications.
        Each test runs identical scenarios using both styling approaches to help you make informed decisions about
        styling solutions.
      </p>

      <ol>
        <li>
          <Link href="/initial-load">Initial Load Tests</Link>
          <p>
            Measures how quickly a page loads and renders its initial content. Compares first-paint performance and
            setup overhead between CSS Modules and Styled Components.
          </p>
        </li>
        <li>
          <Link href="/hydration">Hydration Tests</Link>
          <p>
            Tests how fast the application becomes interactive after server-side rendering. Compares hydration
            performance between CSS Modules and Styled Components.
          </p>
        </li>
        <li>
          <Link href="/change-css-prop">Change CSS Prop Tests</Link>
          <p>
            Measures performance when frequently updating individual CSS properties. Compares both approaches for
            animations and interactive UI elements.
          </p>
        </li>
        <li>
          <Link href="/change-a-variant">Change Variant Tests</Link>
          <p>
            Tests how quickly styles can be switched between different variants. Compares both approaches for theme
            switching and state-based styling.
          </p>
        </li>
        <li>
          <Link href="/create-and-mount-button">Create and Mount Tests</Link>
          <p>
            Measures the overhead of creating and mounting new styled elements. Compares both approaches for dynamically
            generated UIs.
          </p>
        </li>
        <li>
          <Link href="/mount-deep-tree">Mount Deep Tree Tests</Link>
          <p>
            Tests performance with deeply nested components. Compares both approaches for complex layouts and component
            hierarchies.
          </p>
        </li>
        <li>
          <Link href="/mount-wide-tree">Mount Wide Tree Tests</Link>
          <p>
            Measures performance with many sibling components. Compares both approaches for rendering large lists,
            grids, and data-heavy UIs.
          </p>
        </li>
      </ol>
    </div>
  );
}
