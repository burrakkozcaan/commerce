import Navbar from 'components/layout/navbar';
import { ensureStartsWith } from 'lib/utils';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import {GoogleAnalytics} from "./google-analytics";
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE,SITE_NAME } = process.env;
const baseUrl= process.env.NEXT_PUBLIC_VERCEL_URL_API
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL_API}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

// @ts-ignore
export const metadata = {
  metadataBase: new URL("https://www.yukselensepets.com/"),
  title: {
    default: `Düğün & Kına & Nikah ve Organizasyon Malzemeleri`,
    template: `%s | ${SITE_NAME}`
  },
  alternates: {
    canonical: `${baseUrl}`,
  },
  authors: [
    {
        name: "Yukselensepets",
        url: "https://www.yukselensepets.com/",
    },
    ],
  keywords: [
    "Düğün Organizasyonu",
    "Organizasyon Malzemeleri",
    "Organizasyon Malzemeleri Toptan",
    "Sünnet Organizasyonu",
    "Nişan Organizasyon Malzemeleri",
    "Kına Malzemeleri",
    "Kına Gecesi Malzemeleri & Setleri",
    "Çeyiz Setleri",
    "Düğün Paketi",
    "Nikah Şekeri",
    "Düğün & Kına & Nikah Malzemeleri",
    "Organizasyon Malzemeleri",
    "Düğün Organizasyon Malzemeleri",
    "Toptan Organizasyon Malzemeleri",
    "Organizasyon Ekipmanları",
    "Uygun Organizasyon Malzemeleri",
  ],
  robots: {
    follow: true,
    index: true
  },
  verification: {
    other: {
      "facebook-domain-verification": ['80j7zo1lpe907sexabj9rfqmdxo3k3']
    },
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        creatorId: '1680646610361937922',
        site: twitterSite
      }
    })
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});


const jsonLdArray = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name":  "https://www.yukselensepets.com/",
    "url":"https://www.yukselensepets.com/",
    "description": "Düğün, Kına, Nikah ve Organizasyon malzemeleri çeşitlerini incele, Yukselensepet'de en özel indirimli fiyaları kaçımra!.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.yukselensepets.com/search{search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/Yukselensepets/",
      "https://twitter.com/yukselensepets",
      "https://www.youtube.com/@Yukselensepets",
      "https://www.pinterest.co.uk/Yukselensepets/",
      "https://www.instagram.com/yukselensepet/"
    ],
    "author": {
      "@type": "Person",
      "name":  "https://www.yukselensepets.com/",
      "url": "https://www.yukselensepets.com/"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Düğün organizasyonları hakkında Desteğe ihtiyacınız mı var?",
      "telephone": "+9035 647 17 99",
      "email": "ys@yukselensepets.com",
      "url": "https://www.yukselensepets.com/iletisim"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name":  "https://www.yukselensepets.com/",
    "legalName":  "https://www.yukselensepets.com/",
    "url":"https://www.yukselensepets.com/",
    "description": "Düğün, Kına, Nikah ve Organizasyon malzemeleri çeşitlerini incele, Yukselensepet'de en özel indirimli fiyaları kaçımra!.",
    "logo": "https://res.cloudinary.com/daig2wsru/image/upload/v1693994708/Group_7_zebuga.png",
    "sameAs": [
      "https://www.facebook.com/Yukselensepets/",
      "https://twitter.com/yukselensepets",
      "https://www.youtube.com/@Yukselensepets",
      "https://www.pinterest.co.uk/Yukselensepets/",
      "https://www.instagram.com/yukselensepet/"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "description": "Düğün, Kına, Nikah ve Organizasyon malzemeleri çeşitlerini incele, Yukselensepet'de en özel indirimli fiyaları kaçımra!.",
        "telephone": "+9035 647 17 99",
        "email": "ys@yukselensepets.com",
        "url": "https://www.yukselensepets.com/iletisim"
      }
    ],
    "foundingDate": "2000-01-01",
    "founders": [
      {
        "@type": "Person",
        "name":  "https://www.yukselensepets.com/",
        "sameAs":"https://www.yukselensepets.com/"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Taya Hatun, Sultan Hamamı Cd. A No:9 Kapı No: 370",
      "addressLocality": "Istanbul/Fatih",
      "postalCode": "34050",
      "addressCountry": "Turkey"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Nişan organizasyonu için hangi detaylar önemlidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nişan organizasyonu için önemli detaylar nişan yüzüğü, mekan dekorasyonu, davetiyeler, yemek menüsü, çiçek düzenlemeleri ve müzik seçimidir. Ayrıca, misafirler için oturma düzenlemeleri ve hoş geldiniz hediyeleri de göz önünde bulundurulmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Sünnet organizasyonu için neler gereklidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sünnet organizasyonu için öncelikle bir mekan, süslemeler, sünnet pastası, çocuklar için hediyeler ve organizasyonun düzgün bir şekilde yönetilmesi gereklidir. Ayrıca, davetiyeler, masa düzenlemeleri ve eğlence için oyunlar gibi ek öğeler de düzenlemeyi tamamlayabilir."
        }
      },
      // Diğer sorular ve cevapları buraya ekleyin...
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name":  "https://www.yukselensepets.com/",
    "description": "Düğün, Kına, Nikah ve Organizasyon malzemeleri çeşitlerini incele, Yukselensepet'de en özel indirimli fiyaları kaçımra!.",
    "url":"https://www.yukselensepets.com/",
    "telephone": "+9035 647 17 99",
    "email": "ys@yukselensepets.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Taya Hatun, Sultan Hamamı Cd. A No:9 Kapı No: 370",
      "addressLocality": "Istanbul/Fatih",
      "postalCode": "34050",
      "addressCountry": "Turkey"
    },
    "openingHours": "Pz-Cm 08:00-17:00",
    "image": "https://res.cloudinary.com/daig2wsru/image/upload/v1693994708/Group_7_zebuga.png",
    "sameAs": [
      "https://www.facebook.com/Yukselensepets/",
      "https://twitter.com/yukselensepets",
      "https://www.youtube.com/@Yukselensepets",
      "https://www.pinterest.co.uk/Yukselensepets/",
      "https://www.instagram.com/yukselensepet/"
    ],
    "priceRange": "Tl",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.012185697933624",
      "longitude": "28.970281750551646"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.yukselensepets.com/dugun-paketleri"
    },
    "headline": "Düğün paketleri nedir ve neden önemlidir?",
    "description": "Düğün paketleri, bir düğün organizasyonunun temel öğelerini içeren önceden hazırlanmış paketlerdir. Bu paketler genellikle düğün mekanı, yemek, içecek, dekorasyon ve bazen eğlence seçeneklerini içerir. Düğün paketleri, düğün hazırlıklarını kolaylaştırır ve çiftlere organizasyonlarını daha düzenli bir şekilde planlama fırsatı sunar. Ayrıca, düğün bütçesini daha iyi kontrol etmeye yardımcı olabilirler.",
    "image": "https://cdn.shopify.com/s/files/1/0809/8571/9078/files/Dugun_Paketi_054ccb83-d02f-41d1-807b-2ed08e5ca982_480x480.webp?v=1693319402",
    "datePublished": "2023-08-16",
    "dateModified": "2023-08-18",
    "author": {
      "@type": "Person",
      "name":  "yukselensepet"
    },
    "publisher": {
      "@type": "Organization",
      "name": "yukselensepet",
      "logo": {
        "@type": "ImageObject",
        "url": 'https://res.cloudinary.com/daig2wsru/image/upload/v1693994708/Group_7_zebuga.png'
      }
    }
  }
];


export default async function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
      {process.env.GA_TRACKING_ID && (
          <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      )}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdArray)
          }}
      />
      <noscript>
        <img
            src="https://www.facebook.com/tr?id=1265593390808182&ev=PageView&noscript=1"
            alt="facebook-pixel"
            width={1}
            height={1}
        />
      </noscript>
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
