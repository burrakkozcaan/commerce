import { AppProps } from 'next/app';
import { NextWebVitalsMetric } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    // Send Web Vitals metrics to Google Analytics or perform any other actions
    if (process.env.GA_TRACKING_ID) {
        window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
        });
    }
}

export default MyApp;
