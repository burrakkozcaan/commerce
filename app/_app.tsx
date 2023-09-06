'use client'

import { AppProps } from 'next/app';
import { NextWebVitalsMetric } from 'next/app';
import { useEffect } from 'react'
import {webVitals,trackPageChanges} from "./google-analytics";


function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        trackPageChanges() // this will report route changes
    }, [])
    return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    // Send Web Vitals metrics to Google Analytics or perform any other actions
    webVitals(metric)
}


export default MyApp;
