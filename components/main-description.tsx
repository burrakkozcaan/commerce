import Prose from 'components/prose';
import { Metadata } from 'next';
import { getPage } from '../lib/shopify';
import { notFound } from 'next/navigation';

export async function generateMetadata({
                                           params
                                       }: {
    params: { page: string };
}): Promise<Metadata> {
    const page = await getPage(params.page);

    if (!page) return notFound();

    return {
        title: page.seo?.title || page.title,
        description: page.seo?.description || page.bodySummary,
        openGraph: {
            publishedTime: page.createdAt,
            modifiedTime: page.updatedAt,
            type: 'article'
        }
    };
}

export function MainDescription() {
    return (
        <>
            <div className="mb-6">
                <Prose className={'text-sm leading-tight dark:text-white/[60%]'} html={'<meta charset="utf-8">\n' +
                    '<h1>Düğün, Kına, Nikah ve Organizasyon Malzemeleri</h1>\n' +
                    '<p>Düğün, kına, nikah ve organizasyonları için gerekli malzemeleri ve fiyatlarını Yukselensepet\'te bulabilirsiniz. Bu makalede, organizasyon detayları ve hazırlıkları hakkında detaylı bilgileri bulacaksınız.</p>\n' +

                    '<h2>Kına Gecesi Hazırlıkları💃</h2>\n' +
                    '<p>Kına gecesi, gelinin baba evinde geçirdiği son geceyi geleneksel bir şekilde kutladığımız, eğlenceli ve duygusal bir gecedir. Bu özel gece, gelin adayı için büyük bir anlam taşır. Geleneklerimize ve göreneklere dayanan bu ritüel, evliliğe giden yolda atılan önemli adımlardan birini simgeler. Bu nedenle gelinler, kına gecesini özel ve unutulmaz kılmak isterler.</p>\n' +

                    '<h3>Kına Gecesi Malzemeleri</h3>\n' +
                    '<p><strong><em>Kına Gecesi</em></strong>, geleneklerimizin önemli bir parçası olan unutulmaz bir geceyi ifade eder. Bu gece, gelin ve damadın aşklarını daim kıldığı, mutluluklarını sonsuzlaştırdığı bir ritüeldir. Kına gecesi için hazırlıklar oldukça titizlikle yapılır. İşte kına gecesi malzemeleri ve detayları: <strong>Kına:</strong> Kına gecesinin vazgeçilmezi olan kına, hem gelin hem de damadın ellerine yakılır ve misafirlere dağıtılır. Kaliteli bir kına tercih edilmelidir.<strong>Kına Testisi:</strong> Kına testisi, geleneksel olarak kırılarak kullanılan ve bolluk bereket simgesi olan bir malzemedir.Gelin Duvağı ve Damat Omuz Örtüsü: Gelin duvağı, gelinin yüzünü kına yakılırken örtmek için kullanılır. Damat omuz örtüsü ise yeşil renkte ve ay yıldız motiflidir.  <strong>Kına Kasesi ve Sepeti:</strong> Kına kasesi ve sepeti, kınanın sunumu için kullanılır ve farklı tasarımlara sahiptir.Kına Kesesi: Kınayı misafirlere dağıtmak için kullanılan keseler, işlemeli ve şık modellerle tercih edilir.<strong>Kına Mumları:</strong> Kına gecesi eğlencesine katkı sağlayan kına mumları, pilli olarak da bulunabilir.Kına Süslemeleri: Kına gecesi için tüller, çiçekler, mumlar ve yazılı pankartlar gibi süslemeler kullanılabilir.<strong>Tef ve Halay Mendili:</strong> Kına gecesinde ritim tutmak ve eğlenceli zaman geçirmek için kullanılır.<strong>Kına Çerezleri:</strong> Misafirlere ikram edilen kına çerezleri geleneksel bir uygulamadır. Çerezlerin taze ve hijyenik olmasına dikkat edilmelidir.<strong>Nedime Tacı ve Bilekliği:</strong> Nedimeler için özel aksesuarlar, birlik ve bütünlük sağlar.Tahta Kaşıklar: Oyun havaları sırasında kullanılan tahta kaşıklar, eğlenceye renk katar.</p>\n' +

                    '<h3>Nikah ve Düğün Organizasyonu Malzemeleri</h3>\n' +
                    '<p>Nikah ve düğün organizasyonları, sevdiklerinizle paylaşacağınız unutulmaz anlarla dolu özel günlerdir. Bu anları daha da özel kılmak için gereken organizasyon malzemelerini düşünmek önemlidir. İşte nikah ve düğün organizasyonu için gereken malzemeler:\n' +
                    'Davetiyeler: Davetiyeler, organizasyonunuzu duyurmanın başlangıcıdır. Davetiyelerinizi önceden hazırlayarak davetlilere zamanında ulaştırabilirsiniz.\n' +
                    'Nikah Şekerleri: Nikah şekerleri, misafirlere dağıtılan tatlı jestlerdir. Türlü şekil ve modellerde tasarlanan nikah şekerleri, misafirlere teşekkür etmenin güzel bir yoludur.\n' +
                    'Nikah ve Düğün Süslemeleri: Organizasyon mekanınızı süslemek, atmosferi daha özel hale getirir. Tül perdeler, aydınlatmalar ve çiçeklerle mekanı süsleyebilirsiniz.\n' +
                    'Gelinlik ve Damatlık: Nikah ve düğünün en önemli detaylarından biri gelinlik ve damatlıktır. Tarzınıza uygun gelinlik ve damatlık seçmek özel gününüzü tamamlar.\n' +
                    'Nikah Yüzüğü: Nikahın sembolü olan yüzükler, özenle seçilmelidir. İsme özel yüzükler tercih edebilirsiniz.\n' +
                    'Nikah Mekanı: Nikah töreniniz için uygun bir mekan seçmelisiniz. Açık hava veya kapalı mekan seçenekleri düşünülebilir.\n' +
                    'Organizasyon Müziği: Nikah töreninize uygun müzikler seçmek, atmosferi daha da özel kılar.\n' +
                    'Düğün Pastası: Düğün pastası, organizasyonun tatlı anlarını simgeler. Tarzınıza uygun bir pasta seçebilirsiniz.\n' +
                    'Nikah ve Düğün Fotoğrafçısı: Özel gününüzü ölümsüzleştirmek için profesyonel bir fotoğrafçı seçmelisiniz.\n' +
                    'Misafir Hediyeleri: Misafirlerinize teşekkür etmek için hediye seçmek güzel bir jest olabilir. Nikah şekerleri gibi küçük hediyeler düşünebilirsiniz.</p>\n' +

                    '<h3>Düğün Organizasyon Malzemeleri ve Organizasyon</h3>\n' +
                    '<p>Düğün organizasyonları, çiftlerin hayatlarını birleştirdikleri özel günlerdir. Bu etkinlikler, romantik bir şekilde evlenme kararlarını kutladıkları anlardır. Aile ve arkadaşlarla paylaşılan bu özel gün, sevgilerini taçlandırır. Düğün organizasyonlarının başarılı olabilmesi için organizasyon malzemeleri büyük önem taşır. Bu malzemeler, düğünü daha eğlenceli ve unutulmaz kılmak için kullanılır.\n' +
                    'Organizasyon malzemeleri, kaliteli ve özenle seçilmelidir. İyi seçilmiş malzemeler, düğünü unutulmaz bir deneyim haline getirir ve konukları etkiler. Her ayrıntının düşünüldüğü bir düğün organizasyonu, çiftlerin ömür boyu hatırlayacağı bir gün olur.</p>\n' +

                    '<h4>Düğün Ekipmanları</h4>\n' +
                    '<p>Düğün organizasyonlarınız için gerekli olan tüm ekipmanları burada bulabilirsiniz. Masa sandalye kiralama, ses ve ışık sistemleri gibi detayları düşünmeye gerek kalmadan unutulmaz bir düğün deneyimi yaşayabilirsiniz.</p>\n' +

                    '<h4>Organizasyon Malzemeleri Toptan</h4>\n' +
                    '<p>Düğün organizasyonlarınız için toptan organizasyon malzemeleri burada! Tema renklerinize uygun dekorasyonlar, masa düzenlemeleri ve daha fazlasını bulabilirsiniz.</p>\n' +

                    '<h4>Düğün Malzemeleri</h4>\n' +

                    '<h4>Kına Gecesi Malzemeleri Fiyatı</h4>\n' +
                    '<p>Kına gecesi malzemelerinin fiyatları ürün ve kaliteye göre değişir.</p>\n' +

                    '<h4>Düğün Malzemeleri Nelerdir</h4>\n' +
                    '<p>Düğün davetiyeleri, gelinlik, damatlık, yüzükler, masa düzenlemeleri, nikah şekerleri gibi malzemeler düğünün temel malzemelerindendir.</p>\n' +

                    '<h4>Düğün Malzemeleri Listesi</h4>\n' +
                    '<p>Düğün organizasyonu için masa sandalye, ses sistemleri, dekorasyon ürünleri, masa düzenlemeleri, nikah şekerleri gibi malzemeler gerekebilir.</p>\n' +

                    '<h4>Düğüne Yakın Yapılması Gerekenler</h4>\n' +
                    '<p>Düğünden önce davetlilerin onayı, organizasyonun son kontrolleri ve gelinlik ya da damatlığın son prova gibi son hazırlıklar yapılmalıdır.</p>\n' +

                    '<h4>Düğün Malzemeleri Toptan</h4>\n' +
                    '<p>Düğün malzemelerini toptan alarak bütçenizi daha iyi yönetebilirsiniz.</p>\n' +

                    '<h4>Organizasyon Malzemeleri Nelerdir</h4>\n' +

                    '<h4>Düğün Organizasyon Malzemeleri Listesi</h4>' +
                    '<p>Düğün organizasyon malzemeleri, masalar, sandalyeler, masa örtüleri, çeşitli dekorasyon ürünleri ve ses sistemleri gibi detayları içerir.</p>' +

                    '<h4>Organizasyon Malzemeleri Isimleri</h4>' +
                    '<p>Organizasyon malzemeleri arasında masa, sandalye, masa örtüsü, ses sistemi, projeksiyon cihazı, süslemeler gibi birçok farklı ekipman bulunabilir.</p>' +

                    '<h4>Kına Nasıl Yapılır Ve Malzemeleri</h4>' +
                    '<p>Kına gecesi için öncelikle kına malzemeleri temin edilir. Daha sonra gelin adayının ellerine kına yakma işlemi yapılır.</p>' +

                    '<h4>Kına Malzemeleri Nasıl</h4>' +
                    '<p>Kına malzemeleri arasında kınadan önce kullanılan taslar, mumlar, kına tepsisi ve kına şekeri gibi ürünler bulunur.</p>' +

                    '<h4>Organizasyon Malzemeleri</h4>\n' +
                    '<p>Organizasyon malzemeleri, etkinliklerde kullanılan masa, sandalye, ses sistemi, ışıklandırma gibi ekipmanları içerir.</p>\n' +

                    '<h4>Düğün Organizasyon Malzemeleri</h4>\n' +
                    '<p>Düğün organizasyon malzemeleri, düğün mekanının dekorasyonu için gerekli olan masa, sandalye, çiçekler, masa örtüleri ve daha fazlasını içerir.</p>\n' +

                    '<h4>Organizasyon Malzemeleri Toptan</h4>\n' +
                    '<p>Organizasyon malzemelerini toptan satın alarak hem maliyetlerinizi düşürebilir hem de büyük etkinlikler için gereken ekipmanları temin edebilirsiniz.</p>\n' +

                    '<h4>Düğün Ekipmanları</h4>\n' +
                    '<p>Düğün ekipmanları, düğün organizasyonlarında kullanılan masa, sandalye, masa örtüsü, çiçekler ve dekorasyon ürünleri gibi malzemeleri içerir.</p>\n' +

                    '<h4>Düğün Ekipmanları Toptan</h4>\n' +
                    '<p>Düğün ekipmanlarını toptan satın alarak, büyük düğün organizasyonları için gerekli olan malzemeleri uygun fiyatlarla temin edebilirsiniz.</p>\n' +

                    '<p> Organizasyon malzemeleri masa sandalye kiralama, ses ve ışık sistemleri, dekorasyon ürünleri gibi organizasyonlarda kullanılan ekipmanları içerir.</p>\n' +
                    '<p><strong>Daha fazla bilgi:</strong> veya yardım için iletişime geçmek isterseniz, Yukselensepet ekibi olarak sizlere yardımcı olmaktan mutluluk duyarız. Sağlıklı ve huzurlu alışverişler dileriz!</p>'} />
            </div>

        </>
    );
}
