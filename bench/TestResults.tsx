import { RunResult, TestInfo } from './TestRunner';

type Result = Omit<RunResult, 'N'>;
type ResultKey = keyof Result;

const calculateAverage = (results: Record<number, Result>, key: ResultKey, numberOfRuns: number) => {
  let total = 0;
  [...Array(numberOfRuns)].forEach((_, index) => (total = total + results[index][key]));
  return total / numberOfRuns;
};

export const TestResults = ({ testInfo }: { testInfo: TestInfo }) => {
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
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
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
        `,
        }}
      />

      <div className="container">
        <div className="mean-result-box">
          <div className="mean-label">Average Render Time</div>
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
              The average render time across all iterations - this is the most important metric for overall performance
            </dd>

            <dt>First run</dt>
            <dd>Time taken for the first render - useful for measuring "cold start" performance</dd>

            <dt>Last run</dt>
            <dd>Time taken for the final render - should be similar to or faster than first run</dd>

            <dt>Median</dt>
            <dd>The middle value when sorting all render times - less affected by outliers than mean</dd>

            <dt>Fastest/Slowest</dt>
            <dd>The fastest and slowest render times recorded - helps identify outliers</dd>

            <dt>SD (Standard Deviation)</dt>
            <dd>Measures consistency of render times - lower values indicate more consistent performance</dd>
          </dl>
        </div>

        <div className="metric-explanation">
          <h3>What to Look For</h3>
          <ul>
            <li>Results should be consistent across test runs - large variations may indicate issues</li>
            <li>
              Last run should be similar to or faster than first run - slower last runs (highlighted in red) may
              indicate performance degradation
            </li>
            <li>
              Standard deviation should be relatively small compared to the mean - large SD suggests inconsistent
              performance
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
