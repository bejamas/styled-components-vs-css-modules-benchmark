export interface PerformanceMetrics {
  ttfb: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  hydrationTime: number;
  jsSize: number;
  cssSize: number;
}

export interface TestResult extends PerformanceMetrics {
  timestamp: number;
  userAgent: string;
  connection: string;
} 