import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Link from 'next/link';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const testResults = {
  'initial-load': {
    cssModules: 1.33,
    styledComponents: 2.25,
  },
  hydration: {
    cssModules: 0.43,
    styledComponents: 0.62,
  },
  'change-css-prop': {
    cssModules: 0.006,
    styledComponents: 0.042,
  },
  'change-a-variant': {
    cssModules: 0.003,
    styledComponents: 0.032,
  },
  // Placeholders for other tests
  'create-and-mount-button': {
    cssModules: 0,
    styledComponents: 0,
  },
  'mount-deep-tree': {
    cssModules: 0,
    styledComponents: 0,
  },
  'mount-wide-tree': {
    cssModules: 0,
    styledComponents: 0,
  },
};

const createChartData = (label: string, cssModulesValue: number, styledComponentsValue: number) => ({
  labels: [label],
  datasets: [
    {
      label: 'CSS Modules',
      data: [cssModulesValue],
      backgroundColor: '#befc65',
      borderColor: '#a8e047',
      borderWidth: 1,
    },
    {
      label: 'Styled Components',
      data: [styledComponentsValue],
      backgroundColor: '#14F195',
      borderColor: '#10c277',
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
        <br /> <br />
        Each test runs identical scenarios using both styling approaches to help you make informed decisions about
        styling solutions.
        <br /> <br />
        Note that results can vary between runs due to system load, browser state, and other environmental factors.
        These results represent general performance trends rather than absolute measurements.
      </p>

      <section className="test-section">
        <h2>Initial Load Performance</h2>
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
        <h2>Hydration Performance</h2>
        <Link href="/hydration" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Hydration Time', 0.43, 0.62)} options={options} />
          <div className="placeholder-message">Results pending</div>
        </div>
        <p>
          Tests how fast the application becomes interactive after server-side rendering. Compares hydration performance
          between CSS Modules and Styled Components.
        </p>
      </section>

      <section className="test-section">
        <h2>Change CSS Prop Tests</h2>
        <Link href="/change-css-prop" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Change CSS Prop Time', 0.006, 0.042)} options={options} />
          <div className="placeholder-message">Results pending</div>
        </div>
        <p>
          Measures performance when frequently updating individual CSS properties. Compares both approaches for
          animations and interactive UI elements.
        </p>
      </section>

      <section className="test-section">
        <h2>Change Variant Tests</h2>
        <Link href="/change-a-variant" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Change Variant Time', 0.003, 0.032)} options={options} />
          <div className="placeholder-message">Results pending</div>
        </div>
        <p>
          Tests how quickly styles can be switched between different variants. Compares both approaches for theme
          switching and state-based styling.
        </p>
      </section>

      <section className="test-section">
        <h2>Create and Mount Tests</h2>
        <Link href="/create-and-mount-button" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Create and Mount Time', 0, 0)} options={options} />
          <div className="placeholder-message">Results pending</div>
        </div>
        <p>
          Measures the overhead of creating and mounting new styled elements. Compares both approaches for dynamically
          generated UIs.
        </p>
      </section>

      <section className="test-section">
        <h2>Mount Deep Tree Tests</h2>
        <Link href="/mount-deep-tree" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Mount Deep Tree Time', 0, 0)} options={options} />
          <div className="placeholder-message">Results pending</div>
        </div>
        <p>
          Tests performance with deeply nested components. Compares both approaches for complex layouts and component
          hierarchies.
        </p>
      </section>

      <section className="test-section">
        <h2>Mount Wide Tree Tests</h2>
        <Link href="/mount-wide-tree" className="test-link">
          Run this test →
        </Link>
        <div className="chart-container">
          <Bar data={createChartData('Mount Wide Tree Time', 0, 0)} options={options} />
          <div className="placeholder-message">Results pending</div>
        </div>
        <p>
          Measures performance with many sibling components. Compares both approaches for rendering large lists, grids,
          and data-heavy UIs.
        </p>
      </section>

      <div className="navigation">
        <Link href="/results" className="view-results">
          View Benchmark Results →
        </Link>
      </div>

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
      `}</style>
    </div>
  );
}
