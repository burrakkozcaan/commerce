"use client";

import Script from "next/script";
import * as process from "process";
import Router from 'next/router'
import { NextWebVitalsMetric } from 'next/app';
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

declare global {
    interface Window {
        gtag: any;
    }
}
type Event = { action: string; category: string; label: string; value: string }

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
    if (process.env.NODE_ENV === 'production')
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: Event) => {
    if (process.env.NODE_ENV === 'production')
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
}

export const trackPageChanges = () => {
    if (process.env.NODE_ENV === 'production') {
        const handleRouteChange = (url: string) => {
            pageView(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }
    return
}

export const webVitals = (metric: NextWebVitalsMetric) => {
    if (process.env.GA_TRACKING_ID) {
        window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
        });
    }
}
export const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
    return (
        <>
            {process.env.NODE_ENV === 'production' && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${GA_TRACKING_ID}");
            `}
                    </Script>
                </>
            )}

        </>
    );
};
