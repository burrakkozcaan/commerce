"use client";

import Script from "next/script";
import * as process from "process";


export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

declare global {
    interface Window {
        gtag: any;
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
