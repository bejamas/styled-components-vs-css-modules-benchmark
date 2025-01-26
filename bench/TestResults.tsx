import { RunResult, TestInfo } from './TestRunner';
import { useRouter } from 'next/router';

type Result = Omit<RunResult, 'N'>;
type ResultKey = keyof Result;

const calculateAverage = (results: Record<number, Result>, key: ResultKey, numberOfRuns: number) => {
  let total = 0;
  [...Array(numberOfRuns)].forEach((_, index) => (total = total + results[index][key]));
  return total / numberOfRuns;
};

const TEST_DESCRIPTIONS = {
  'initial-load': {
    title: 'Initial Load Test',
    description:
      'Measures how quickly a page loads and renders its initial content. Compares CSS Modules vs Styled Components for first-paint performance and setup overhead.',
  },
  hydration: {
    title: 'Hydration Test',
    description:
      'Tests how fast the application becomes interactive after server-side rendering. Compares hydration performance between CSS Modules and Styled Components approaches.',
  },
  'change-css-prop': {
    title: 'Change CSS Prop Test',
    description:
      'Measures performance when frequently updating individual CSS properties. Compares dynamic style updates between CSS Modules and Styled Components, crucial for animations and interactive UIs.',
  },
  'change-a-variant': {
    title: 'Change Variant Test',
    description:
      'Tests how quickly styles can be switched between different variants. Compares CSS Modules and Styled Components approaches for theme switching and state-based styling.',
  },
  'create-and-mount-button': {
    title: 'Create and Mount Test',
    description:
      'Measures the overhead of creating and mounting new styled elements. Compares CSS Modules and Styled Components performance for dynamically generated UIs.',
  },
  'mount-deep-tree': {
    title: 'Mount Deep Tree Test',
    description:
      'Tests performance with deeply nested components. Compares CSS Modules and Styled Components approaches for complex component hierarchies and nested layouts.',
  },
  'mount-wide-tree': {
    title: 'Mount Wide Tree Test',
    description:
      'Measures performance with many sibling components. Compares CSS Modules and Styled Components approaches for rendering large lists, grids, and data-heavy UIs.',
  },
  'sierpinski-triangle': {
    title: 'Sierpinski Triangle Test',
    description:
      'A complex visual test creating a fractal pattern. Compares CSS Modules and Styled Components performance with recursive rendering and many simultaneous style calculations.',
  },
};

export const TestResults = ({ testInfo }: { testInfo: TestInfo }) => {
  const router = useRouter();
  const path = router.pathname.split('/')[1]; // Get the test type from URL
  const variant = router.pathname.includes('css-modules') ? 'CSS Modules' : 'Styled Components';
  const testDescription = TEST_DESCRIPTIONS[path] || {
    title: 'Performance Test',
    description: 'Measuring rendering performance.',
  };

  const averageInfo: Result = {
    firstIteration: calculateAverage(testInfo.results, 'firstIteration', testInfo.numberOfRuns),
    lastIteration: calculateAverage(testInfo.results, 'lastIteration', testInfo.numberOfRuns),
    fastestIteration: calculateAverage(testInfo.results, 'fastestIteration', testInfo.numberOfRuns),
    slowestIteration: calculateAverage(testInfo.results, 'slowestIteration', testInfo.numberOfRuns),
    meanIteration: calculateAverage(testInfo.results, 'meanIteration', testInfo.numberOfRuns),
    medianIteration: calculateAverage(testInfo.results, 'medianIteration', testInfo.numberOfRuns),
    variance: calculateAverage(testInfo.results, 'variance', testInfo.numberOfRuns),
  };

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 20px;
              font-family: 'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .mean-result-box {
              background: #befc65;
              border-radius: 12px;
              padding: 24px;
              margin: 24px 0;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              border: 1px solid #e1e4e8;
              text-align: center;
            }
            
            .mean-value {
              font-size: 48px;
              font-weight: bold;
              color: #000;
              margin: 12px 0;
            }
            
            .mean-label {
              font-size: 18px;
              color: #586069;
              margin-bottom: 8px;
            }
            
            .mean-unit {
              font-size: 16px;
              color: #586069;
            }

            .metric-box {
              background: white;
              border-radius: 8px;
              padding: 16px;
              margin: 16px 0;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
              border: 1px solid #e1e4e8;
            }
            
            table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              margin: 16px 0;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }
            
            th, td {
              padding: 12px 16px;
              text-align: left;
              border-bottom: 1px solid #e1e4e8;
            }
            
            th {
              background: #f6f8fa;
              font-weight: 600;
            }
            
            .metric-explanation {
              margin: 20px 0;
              padding: 16px;
              background: #f6f8fa;
              border-radius: 8px;
              border: 1px solid #e1e4e8;
            }
            
            .metric-explanation dt {
              font-weight: 600;
              margin-bottom: 8px;
            }
            
            .metric-explanation dd {
              margin-bottom: 16px;
              margin-left: 16px;
              color: #444d56;
            }
            
            .warning {
              color: #f97583;
              font-weight: 600;
            }

            .test-description-box {
              background: white;
              border-radius: 12px;
              padding: 24px;
              margin: 24px 0;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              border: 1px solid #e1e4e8;
            }

            .test-description-box h1 {
              margin: 0 0 16px 0;
              font-size: 24px;
              color: #24292e;
            }

            .test-description {
              margin: 0;
              font-size: 16px;
              line-height: 1.6;
              color: #586069;
            }

            .variant-label {
              font-size: 14px;
              font-weight: 500;
              color: #24292e;
              background: rgba(0, 0, 0, 0.1);
              padding: 4px 12px;
              border-radius: 9999px;
              display: inline-block;
              margin-bottom: 8px;
            }
        `,
        }}
      />

      <div className="container">
        <div className="test-description-box">
          <h1>{testDescription.title}</h1>
          <p className="test-description">{testDescription.description}</p>
        </div>

        <div className="mean-result-box">
          <div className="mean-label">Average Render Time</div>
          <div className="variant-label">{variant}</div>
          <div className="mean-value">
            {averageInfo.meanIteration.toFixed(6)}
            <span className="mean-unit"> ms</span>
          </div>
          <div>
            across {testInfo.N} iterations × {testInfo.numberOfRuns} runs
          </div>
        </div>

        <div className="metric-box">
          <h2>Test Configuration</h2>
          <ul>
            <li>Number of iterations per test: {testInfo.N}</li>
            <li>Number of test runs: {testInfo.numberOfRuns}</li>
          </ul>
        </div>

        <div className="metric-box">
          <h2>Detailed Results</h2>
          <table>
            <thead>
              <tr>
                <th>Run #</th>
                <th>First run</th>
                <th>Last run</th>
                <th>Mean</th>
                <th>Median</th>
                <th>Fastest</th>
                <th>Slowest</th>
                <th>SD</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(testInfo.numberOfRuns)].map((_val, runIndex) => {
                return (
                  <tr key={runIndex}>
                    <th>Test {runIndex + 1}</th>
                    <ResultCells result={testInfo.results[runIndex]} />
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Average</th>
                <ResultCells result={averageInfo} />
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="metric-explanation">
          <h3>Understanding the Metrics</h3>
          <dl>
            <dt>Mean (Primary Metric)</dt>
            <dd>
              The average render time across all iterations. This is your main indicator of overall performance - lower
              numbers mean better performance. A high mean might indicate that your styling approach is creating
              significant overhead.
            </dd>

            <dt>First run</dt>
            <dd>
              Time taken for the first render. This helps identify initialization costs like style injection or
              compilation. Higher first run times might indicate heavy setup work.
            </dd>

            <dt>Last run</dt>
            <dd>
              Time taken for the final render. Comparing this with the first run helps identify if performance improves
              after initial setup or degrades over time. Ideally, it should be similar to or faster than the first run.
            </dd>

            <dt>Median</dt>
            <dd>
              The middle value when sorting all render times. This gives you a typical render time without being skewed
              by outliers. If median is significantly different from mean, you might have inconsistent performance.
            </dd>

            <dt>Fastest/Slowest</dt>
            <dd>
              The fastest and slowest render times recorded. A large gap between these values might indicate
              inconsistent performance or external interference. Look for patterns in when slowdowns occur.
            </dd>

            <dt>SD (Standard Deviation)</dt>
            <dd>
              Measures how much render times vary from the mean. Lower values indicate more consistent performance. High
              SD might mean your styling approach is unpredictable, which could lead to UI jank.
            </dd>
          </dl>
        </div>

        <div className="metric-explanation">
          <h3>What These Results Mean</h3>
          <ul>
            <li>
              Consistent results across test runs indicate reliable performance. Large variations might suggest problems
              with style generation or browser optimization.
            </li>
            <li>
              If last runs are consistently slower than first runs, your styling approach might be accumulating overhead
              over time.
            </li>
            <li>
              High standard deviation compared to the mean suggests unpredictable performance, which could cause
              noticeable UI stutters.
            </li>
            <li>
              Consider these results in context - a few milliseconds difference might matter for animations but be
              negligible for static content.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function ResultCells({ result }) {
  const {
    firstIteration,
    lastIteration,
    meanIteration,
    medianIteration,
    variance,
    slowestIteration,
    fastestIteration,
  } = result;

  const alertLastRender = lastIteration > firstIteration * 1.1;

  return (
    <>
      <td>{firstIteration.toFixed(6)}</td>
      <td className={alertLastRender ? 'warning' : undefined}>{lastIteration.toFixed(6)}</td>
      <td>{meanIteration.toFixed(6)}</td>
      <td>{medianIteration.toFixed(6)}</td>
      <td>{fastestIteration.toFixed(6)}</td>
      <td>{slowestIteration.toFixed(6)}</td>
      <td>{Math.sqrt(variance).toFixed(6)}</td>
    </>
  );
}
