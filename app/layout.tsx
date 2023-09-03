import Navbar from 'components/layout/navbar';
import { ensureStartsWith } from 'lib/utils';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import {GoogleAnalytics} from "./google-analytics";
import './globals.css';
import LogoIcon from "../components/icons/logo";

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `Düğün & Kına & Nikah ve Organizasyon Malzemeleri | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`
  },
  description: 'En trend Düğün,Düğün Paketi, Çeyiz Paketi, Kına Malzemeleri, Nikah Malzemeleri, nişan organizasyon malzemeleri, Organizasyon hizmetleri ile unutulmaz bir düğün planlayın. Düğün organizasyonu malzemeleri ve Organizasyon malzemeleri toptan ile unutulmaz bir gün için  hayalinizdeki düğünü gerçekleştirin.',
  alternates: {
    canonical: `${baseUrl}`,
  }, keywords: [
    "Düğün Organizasyonu",
    "Organizasyon Malzemeleri",
    "organizasyon malzemeleri toptan",
    "sünnet organizasyonu",
    "nişan organizasyon malzemeleri",
    "Kına Malzemeleri",
    "Kına Gecesi Malzemeleri & Setleri",
    "çeyiz setleri",
    "düğün paketi",
    "Nikah şekeri",
    "Düğün & Kına & Nikah Malzemeleri"
  ],
  robots: {
    follow: true,
    index: true
  },
  verification: {
    yandex: "621686490233e2e4",
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
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: baseUrl,
    description: 'En trend Düğün,Düğün Paketi, Çeyiz Paketi, Kına Malzemeleri, Nikah Malzemeleri, nişan organizasyon malzemeleri, Organizasyon hizmetleri ile unutulmaz bir düğün planlayın. Düğün organizasyonu malzemeleri ve Organizasyon malzemeleri toptan ile unutulmaz bir gün için  hayalinizdeki düğünü gerçekleştirin.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      queryInput: 'required name=search_term_string'
    },
    sameAs: [
      "https://www.facebook.com/Yukselensepets/",
      "https://twitter.com/yukselensepets",
      'https://www.youtube.com/@Yukselensepets',
      "https://www.pinterest.co.uk/Yukselensepets/",
      "https://www.instagram.com/yukselensepet/"
    ],
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: baseUrl,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Düğün organizasyonları hakkında Desteğe ihtiyacınız mı var?',
      telephone: '+9035 647 17 99',
      email: 'ys@yukselensepets.com',
      url: 'https://example.com/contact'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: baseUrl,
    description: 'En trend Düğün,Düğün Paketi, Çeyiz Paketi, Kına Malzemeleri, Nikah Malzemeleri, nişan organizasyon malzemeleri, Organizasyon hizmetleri ile unutulmaz bir düğün planlayın. Düğün organizasyonu malzemeleri ve Organizasyon malzemeleri toptan ile unutulmaz bir gün için  hayalinizdeki düğünü gerçekleştirin.',
    logo: LogoIcon,
    sameAs: [
      "https://www.facebook.com/Yukselensepets/",
      "https://twitter.com/yukselensepets",
      'https://www.youtube.com/@Yukselensepets',
      "https://www.pinterest.co.uk/Yukselensepets/",
      "https://www.instagram.com/yukselensepet/"
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Düğün,Düğün Paketi, Çeyiz Paketi, Kına Malzemeleri, Nikah Malzemeleri, nişan organizasyon malzemeleri, Organizasyon hizmetleri hakkında Desteğe ihtiyacınız mı var?',
        telephone: '+9035 647 17 99',
        email: 'ys@yukselensepets.com',
        url: 'https://www.yukselensepets.com/iletisim'
      }
    ],
    foundingDate: '2000-01-01',
    founders: [
      {
        '@type': 'Person',
        name: SITE_NAME,
        sameAs: baseUrl,
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Taya Hatun, Sultan Hamamı Cd. A No:9 Kapı No: 370 ',
      addressLocality: 'Istanbul/Fatih',
      postalCode: '34050',
      addressCountry: 'Turkey'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Nişan organizasyonu için hangi detaylar önemlidir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nişan organizasyonu için önemli detaylar nişan yüzüğü, mekan dekorasyonu, davetiyeler, yemek menüsü, çiçek düzenlemeleri ve müzik seçimidir. Ayrıca, misafirler için oturma düzenlemeleri ve hoş geldiniz hediyeleri de göz önünde bulundurulmalıdır.'
        }
      },
      {
        '@type': 'Question',
        name: 'Sünnet organizasyonu için neler gereklidir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sünnet organizasyonu için öncelikle bir mekan, süslemeler, sünnet pastası, çocuklar için hediyeler ve organizasyonun düzgün bir şekilde yönetilmesi gereklidir. Ayrıca, davetiyeler, masa düzenlemeleri ve eğlence için oyunlar gibi ek öğeler de düzenlemeyi tamamlayabilir.'
        }
      },
      {
        '@type': 'Question',
        name: 'Düğün & Kına & Nikah Malzemeleri nasıl seçilir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: ' Düğün, kına ve nikah malzemeleri seçerken stilinizi ve tema renklerinizi göz önünde bulundurmalısınız. Bu malzemeler arasında gelinlik, damatlık, gelin buketi, takılar, nikah şekerleri, masa düzenlemeleri ve konuklara hediye olarak verilebilecek özel ürünler bulunur. Seçimlerinizi kişisel zevkinize ve organizasyonun temasına uygun olarak yapmalısınız.'
        }
      },
      {
        '@type': 'Question',
        name: 'Düğün Organizasyonu için önemli adımlar nelerdir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Düğün organizasyonu için önemli adımlar mekan seçimi, davetiye tasarımı, yemek menüsü planlaması, çiçek düzenlemeleri ve müzik seçimidir. Ayrıca, gelinlik ve damatlık seçimi, konuk listesi oluşturulması ve organizasyon gününün zaman çizelgesinin yapılması da gereklidir.'
        }
      },
      {
        '@type': 'Question',
        name: 'Düğün malzemelerini toptan nereden temin edebilirim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Düğün malzemelerini toptan temin etmek için öncelikle yerel düğün malzemeleri toptancılarını veya internet üzerindeki toptan satış platformlarını araştırabilirsiniz. Ayrıca, düğün planlama şirketleri veya organizasyon firmaları da toptan malzeme tedarik edebilmenize yardımcı olabilir.'
        }
      },
      {
        '@type': 'Question',
        name: 'Çeyiz setleri neler içermelidir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Çeyiz setleri genellikle yeni evlenen çiftlerin evlerini donatmalarına yardımcı olan temel eşyaları içerir. Bu setler, yatak takımları, havlular, mutfak gereçleri, çatal-bıçak takımları, çamaşır makineleri ve benzeri eşyaları içerebilir. İçeriği çiftlerin ihtiyaçlarına ve tercihlerine bağlı olarak değişebilir.'
        }
      },
      {
        '@type': 'Question',
        name: 'Nikah şekeri nedir ve nasıl seçilir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nikah şekeri, düğün veya nişan törenlerinde konuklara hediye edilen küçük tatlı hediyelerdir. Nikah şekerleri genellikle özel olarak tasarlanır ve çiftlerin isimleri veya düğün tarihi ile kişiselleştirilir. Seçerken renk, tasarım ve içerik gibi faktörleri göz önünde bulundurabilirsiniz.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hangi tür hediyelik eşyalar popülerdir ve nasıl seçilirler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hediyelik eşyalar, özel etkinliklerde veya özel günlerde misafirlere verilen küçük hediye öğeleridir. Popüler hediyelik eşyalar arasında özel tasarım anahtarlıklar, magnetler, özel baskılı bardak altlıkları ve kişiselleştirilmiş not kartları bulunur. Hediyelik eşya seçerken etkinliğin temasını ve misafirlerin zevklerini göz önünde bulundurmalısınız.'
        }
      },
      {
        '@type': 'Question',
        name: 'Baby Shower nedir ve nasıl düzenlenir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Baby Shower, bir anne adayının hamileliğini kutlamak ve ona bebek hediyeleri vermek amacıyla düzenlenen özel bir etkinliktir. Baby Shower genellikle hamilelik döneminin sonlarına doğru düzenlenir. Etkinlik, bebek temalı süslemeler, oyunlar ve özel hediye sunumları içerebilir. Ayrıca, anne adayına moral vermek ve desteklemek için bir araya gelinir.'
        }
      },
      {
        '@type': 'Question',
        name: 'Bebek süsleri neleri içerir ve nasıl seçilirler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bebek süsleri, bir bebek duşu veya doğum sonrası partisi için kullanılan dekoratif öğelerdir. Bunlar, bebek beşiği süslemeleri, bebek giysileri temalı süslemeler, bebek biberonları ve bebek ayakkabıları gibi bebek temasına uygun dekorasyonlar içerebilir. Bebek süsleri seçerken etkinliğin temasını ve anne adayının zevklerini göz önünde bulundurmalısınız.'
        }
      }
      // Daha fazla soru ve cevap ekleyebilirsiniz.
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'En trend Düğün,Düğün Paketi, Çeyiz Paketi, Kına Malzemeleri, Nikah Malzemeleri, nişan organizasyon malzemeleri, Organizasyon hizmetleri ile unutulmaz bir düğün planlayın. Düğün organizasyonu malzemeleri ve Organizasyon malzemeleri toptan ile unutulmaz bir gün için  hayalinizdeki düğünü gerçekleştirin.',
    url: baseUrl,
    telephone: '+9035 647 17 99',
    email: 'ys@yukselensepets.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Taya Hatun, Sultan Hamamı Cd. A No:9 Kapı No: 370 ',
      addressLocality: 'Istanbul/Fatih',
      postalCode: '34050',
      addressCountry: 'Turkey'
    },
    openingHours: 'Pz-Cm 08:00-17:00',
    image: LogoIcon,
    sameAs: [
      "https://www.facebook.com/Yukselensepets/",
      "https://twitter.com/yukselensepets",
      'https://www.youtube.com/@Yukselensepets',
      "https://www.pinterest.co.uk/Yukselensepets/",
      "https://www.instagram.com/yukselensepet/"
    ],
    priceRange: 'Tl',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.012185697933624',
      longitude: '28.970281750551646'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.yukselensepets.com/dugun-paketleri'
    },
    headline: 'Düğün paketleri nedir ve neden önemlidir?',
    description: 'Düğün paketleri, bir düğün organizasyonunun temel öğelerini içeren önceden hazırlanmış paketlerdir. Bu paketler genellikle düğün mekanı, yemek, içecek, dekorasyon ve bazen eğlence seçeneklerini içerir. Düğün paketleri, düğün hazırlıklarını kolaylaştırır ve çiftlere organizasyonlarını daha düzenli bir şekilde planlama fırsatı sunar. Ayrıca, düğün bütçesini daha iyi kontrol etmeye yardımcı olabilirler.',
    image: 'https://cdn.shopify.com/s/files/1/0809/8571/9078/files/Dugun_Paketi_054ccb83-d02f-41d1-807b-2ed08e5ca982_480x480.webp?v=1693319402',
    datePublished: '2023-08-16',
    dateModified: '2023-08-18',
    author: {
      '@type': 'Person',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LogoIcon,
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
