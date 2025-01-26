import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Link from 'next/link';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const createChartData = (label: string, cssModulesValue: number, styledComponentsValue: number) => ({
  labels: [label],
  datasets: [
    {
      label: 'CSS Modules',
      data: [cssModulesValue],
      backgroundColor: '#4dabf7',
      borderColor: '#339af0',
      borderWidth: 1,
    },
    {
      label: 'Styled Components',
      data: [styledComponentsValue],
      backgroundColor: '#ff6b6b',
      borderColor: '#e03e3e',
      borderWidth: 1,
    },
  ],
});

export default function Home() {
  const options = {
    indexAxis: 'y' as const, // This makes the bars horizontal
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Average Performance (Lower is Better)',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Time (ms)',
        },
      },
    },
  };

  return (
    <div className="container">
      <h1>Performance Tests</h1>
      <p className="intro">
        This suite compares the performance characteristics of CSS Modules and Styled Components in React applications.
        Each test runs identical scenarios using both styling approaches to help you make informed decisions about
        styling solutions.
        <br /> <br />
        Note that results can vary between runs due to system load, browser state, and other environmental factors.
        These results represent general performance trends rather than absolute measurements.
      </p>

      <section className="test-section">
        <h2>1. Google PageSpeed Insights</h2>
        <div className="pagespeed-container">
          <div className="pagespeed-result">
            <h3>CSS Modules</h3>
            <img src="/css-mod.png" alt="CSS Modules PageSpeed Results" />
            <a
              href="https://css-modules-dummy-landing.netlify.app/"
              className="test-site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CSS Modules site →
            </a>
          </div>
          <div className="pagespeed-result">
            <h3>Styled Components</h3>
            <img src="/styled.png" alt="Styled Components PageSpeed Results" />
            <a
              href="https://styled-components-dummy-landing.netlify.app/"
              className="test-site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Styled Components site →
            </a>
          </div>
        </div>
        <p>
          Real-world performance measured by{' '}
          <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="test-site-link">
            Google PageSpeed Insights
          </a>
          . Shows the lowest scores out of 5 attempts for each styling approach. Both landing pages are identical in
          structure and content, with one built using CSS Modules and the other using Styled Components.
        </p>
      </section>

      <section className="test-section">
        <h2>2. Initial Load Performance</h2>
        <Link href="/initial-load" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Initial Load Time', 1.33, 2.25)} options={options} />
        </div>
        <p>
          Measures how quickly a page loads and renders its initial content. Compares first-paint performance and setup
          overhead between CSS Modules and Styled Components.
        </p>
      </section>

      <section className="test-section">
        <h2>3. Hydration Performance</h2>
        <Link href="/hydration" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Hydration Time', 0.43, 0.62)} options={options} />
        </div>
        <p>
          Tests how fast the application becomes interactive after server-side rendering. Compares hydration performance
          between CSS Modules and Styled Components.
        </p>
      </section>

      <section className="test-section">
        <h2>4. Change CSS Prop Tests</h2>
        <Link href="/change-css-prop" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Change CSS Prop Time', 0.006, 0.042)} options={options} />
        </div>
        <p>
          Measures performance when frequently updating individual CSS properties. Compares both approaches for
          animations and interactive UI elements.
        </p>
      </section>

      <section className="test-section">
        <h2>5. Change Variant Tests</h2>
        <Link href="/change-a-variant" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Change Variant Time', 0.003, 0.032)} options={options} />
        </div>
        <p>
          Tests how quickly styles can be switched between different variants. Compares both approaches for theme
          switching and state-based styling.
        </p>
      </section>

      <section className="test-section">
        <h2>6. Create and Mount Tests</h2>
        <Link href="/create-and-mount-button" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Create and Mount Time', 0.005, 0.15)} options={options} />
        </div>
        <p>
          Measures the overhead of creating and mounting new styled elements. Compares both approaches for dynamically
          generated UIs.
        </p>
      </section>

      <section className="test-section">
        <h2>7. Mount Deep Tree Tests</h2>
        <Link href="/mount-deep-tree" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Mount Deep Tree Time', 2.4, 4.38)} options={options} />
        </div>
        <p>
          Tests performance with deeply nested components. Compares both approaches for complex layouts and component
          hierarchies.
        </p>
      </section>

      <section className="test-section">
        <h2>8. Mount Wide Tree Tests</h2>
        <Link href="/mount-wide-tree" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Mount Wide Tree Time', 3.27, 6.16)} options={options} />
        </div>
        <p>
          Measures performance with many sibling components. Compares both approaches for rendering large lists, grids,
          and data-heavy UIs.
        </p>
      </section>

      <section className="test-section">
        <h2>Summary of Results</h2>
        <div className="summary-container">
          <p>
            Based on the performance tests above, CSS Modules consistently outperformed Styled Components across all
            metrics:
          </p>
          <ul className="summary-list">
            <li>
              Initial Load: CSS Modules approach was <strong>41%</strong> faster (1.33ms vs 2.25ms)
            </li>
            <li>
              Hydration: CSS Modules approach was <strong>31%</strong> faster (0.43ms vs 0.62ms)
            </li>
            <li>
              Change CSS Prop: CSS Modules approach was <strong>86%</strong> faster (0.006ms vs 0.042ms)
            </li>
            <li>
              Change Variant: CSS Modules approach was <strong>91%</strong> faster (0.003ms vs 0.032ms)
            </li>
            <li>
              Create and Mount: CSS Modules approach was <strong>97%</strong> faster (0.005ms vs 0.15ms)
            </li>
            <li>
              Mount Deep Tree: CSS Modules approach was <strong>45%</strong> faster (2.4ms vs 4.38ms)
            </li>
            <li>
              Mount Wide Tree: CSS Modules approach was <strong>47%</strong> faster (3.27ms vs 6.16ms)
            </li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .test-section {
          margin: 48px 0;
          position: relative;
        }

        .test-section h2 {
          font-size: 24px;
          margin-bottom: 24px;
          color: #24292e;
        }

        .chart-container {
          background: white;
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          height: 200px;
          position: relative;
        }

        .placeholder-message {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #586069;
          font-style: italic;
        }

        .test-link {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 14px;
          color: #0366d6;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 6px;
          background: #f6f8fa;
          transition: all 0.2s ease;
        }

        .test-link:hover {
          background: #eef1f3;
        }

        .pagespeed-container {
          display: flex;
          gap: 24px;
          margin: 24px 0;
          flex-direction: column; /* Default to column for mobile */
        }

        .pagespeed-result {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        .pagespeed-result h3 {
          text-align: center;
          margin-bottom: 16px;
          color: #24292e;
        }

        .pagespeed-result img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .test-site-link {
          margin-top: 16px;
          text-align: center;
          color: #0366d6;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 6px;
          background: #f6f8fa;
          transition: all 0.2s ease;
        }

        .test-site-link:hover {
          background: #eef1f3;
        }

        .inline-link {
          color: #0366d6;
          text-decoration: none;
        }

        .inline-link:hover {
          text-decoration: underline;
        }

        /* Switch to side-by-side layout on larger screens */
        @media (min-width: 1024px) {
          .pagespeed-container {
            flex-direction: row;
          }
        }

        .summary-container {
          background: white;
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .summary-list {
          margin: 16px 0;
          padding-left: 24px;
        }

        .summary-list li {
          margin: 8px 0;
          color: #24292e;
        }

        .summary-list strong {
          color: #0366d6;
        }

        .summary-note {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e1e4e8;
          color: #586069;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
