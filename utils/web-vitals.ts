import { Metric, onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

export type WebVitalsMetric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
};

let metrics: WebVitalsMetric[] = [];

const vitalsCallback = (metric: Metric): void => {
  metrics.push(metric as WebVitalsMetric);
  // You can also send to an analytics endpoint here
  console.log(metric);
};

export function reportWebVitals(): void {
  onCLS(vitalsCallback);
  onFCP(vitalsCallback);
  onFID(vitalsCallback);
  onLCP(vitalsCallback);
  onTTFB(vitalsCallback);
}

export function getWebVitals(): WebVitalsMetric[] {
  return metrics;
}

// Thresholds based on Google's Core Web Vitals
export const webVitalsThresholds = {
  CLS: {
    good: 0.1,
    poor: 0.25,
  },
  FID: {
    good: 100,
    poor: 300,
  },
  LCP: {
    good: 2500,
    poor: 4000,
  },
  FCP: {
    good: 1800,
    poor: 3000,
  },
  TTFB: {
    good: 800,
    poor: 1800,
  },
}; 