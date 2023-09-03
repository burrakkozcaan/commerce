import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
    description: 'En trend Düğün,Düğün Paketi, Çeyiz Paketi, Kına Malzemeleri, Nikah Malzemeleri, nişan organizasyon malzemeleri, Organizasyon hizmetleri ile unutulmaz bir düğün planlayın. Düğün organizasyonu malzemeleri ve Organizasyon malzemeleri toptan ile unutulmaz bir gün için  hayalinizdeki düğünü gerçekleştirin.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
