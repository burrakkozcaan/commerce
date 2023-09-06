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
                    '<h1>Düğün &amp; Kına &amp; Nikah Organizasyon Malzemeleri: Unutulmaz Anıların Anahtarı</h1>\n' +
                    '<p><strong>Düğün &amp; Kına &amp; Nikah Organizasyon Malzemeleri - Yukselesepet</strong> - Düğün Organizasyonu, Organizasyon Malzemeleri, organizasyon malzemeleri toptan, sünnet organizasyonu, nişan organizasyon malzemeleri, Kına Malzemeleri | Kına Gecesi Malzemeleri & Setleri, çeyiz setleri, düğün paketi, Nikah şekeri, düğünlerin, kınaların ve nikah törenlerinin en özel anlarını taçlandıran unutulmaz etkinliklerdir. Bu makalede, Düğün & Kına & Nikah Malzemeleri ve Organizasyon konusunda derinlemesine bilgi ve püf noktalarını bulacaksınız. Sizleri, bu özel anları unutulmaz kılmak adına en iyi şekilde hazırlamaya davet ediyoruz..</p>\n' +
                    ' <h2>Giriş - Hazırsan Başlıyoruz💃</h2>\n' + ' <p>Sevgili okuyucu, özel anılarımızı unutulmaz kılan detayların peşine düşmeye ne dersiniz? Bu makale, düğün, kına ve nikah gibi önemli etkinliklerin nasıl unutulmaz anılara dönüştüğünü ele alacak. Haydi, bu keyifli yolculuğa birlikte çıkalım ve bu özel anıları nasıl daha da özel kılacağınıza birlikte karar verelim.</p>\n\n' +
                    '<h3>Düğün &amp; Kına &amp; Nikah Organizasyon Malzemeleri İncelikleri</h3>\n' +
                    '<p><em>Düğün &amp; Kına &amp; Nikah Organizasyon Malzemeleri</em> ile ilgili her şeyi öğrenin: <a href="https://www.yukselensepets.com/search/dugun-organizasyonu-organizasyon-malzemeleri" target="_new">Organizasyon Malzemeleri</a>, <a href="https://www.yukselensepets.com/search/ceyiz-setleri-ceyiz-paketleri" target="_new">Çeyiz Setleri</a>, <a href="https://www.yukselensepets.com/search/nikah-sekeri" target="_new">Nikah Şekeri</a> gibi önemli detaylar hakkında püf noktalar....</p>\n' +
                    '<h3>Düğün Organizasyonu: Büyük Günün Kusursuz Planı</h3>\n' +
                    '<p>Bir düğünün başarısı, planlamanın mükemmelliğinde yatar. <strong>Düğün Organizasyonu</strong> adım adım nasıl yapılır? Konuk listesi oluşturma, mekan seçimi, catering hizmetleri ve daha fazlası. Büyük gününüzü unutulmaz kılmak için ihtiyacınız olan her şey burada.</p>\n' +
                    '<h3>Organizasyon Malzemeleri Toplan: Etkinlik İçin Gereken Her Şey</h3>\n' +
                    '<p>Etkinlik düzenlemek geniş bir yelpaze gerektirir. <strong>Organizasyon Malzemeleri toptan</strong> alarak hem bütçenizi koruyabilir hem de etkinliğinizi renklendirecek detayları yakalayabilirsiniz. Masa düzenlemelerinden süslemelere kadar her ayrıntıyı düşünmek için size ilham veriyoruz.</p>\n' +
                    '<h3>Sünnet Organizasyonu: Gelenekleri Modern Dokunuşlarla Birleştirin</h3>\n' +
                    '<p>Sünnet düğünleri, geleneklerin önemli bir parçasıdır. Ancak modern zamanlarda, sünnet organizasyonları da yenilikçi dokunuşlarla renklendiriliyor. En iyi <a href="https://www.yukselensepets.com/search/sunnet-susleri" target="_new">Sünnet süsleri ve sünnet organizasyonu</a>,nasıl planlanır? İşte unutulmaz bir sünnet düğünü için ipuçları.</p>\n' +
                    '<h3>Nişan Organizasyon Malzemeleri: Aşkınızı Taçlandırın</h3>\n' +
                    '<p>Nişan, sevgililerin birbirlerine olan bağlılığını taçlandıran bir törendir. <a href="https://www.yukselensepets.com/search/dugun-organizasyonu-organizasyon-malzemeleri" target="_new">Nişan Hediyelikleri ve organizasyon malzemeleri</a>, dekorasyondan hediyeliklere kadar her şeyi içerir. Nişanınızı unutulmaz kılmak için bu detayları nasıl planlamanız gerektiğini öğrenin.</p>\n' +
                    '<h3>Kına Gecesi Malzemeleri &amp; Setleri: Eğlencenin Rengarenk Dünyası</h3>\n' +
                    '<p>Kına gecesi, gelinin arkadaşlarıyla birlikte eğlenceli bir şekilde vakit geçirdiği özel bir gecedir.<a href="https://www.yukselensepets.com/search/kina-malzemeleri-kina-gecesi-malzemeleri-kina-setleri" target="_new">Kına Gecesi Malzemeleri &amp; Setleri</a> ile bu eğlenceyi renklendirmek mümkün. Kına gecesinin unutulmaz anıları için ihtiyacınız olan her şeyi burada bulacaksınız.</p>\n' +
                    '<h3>Çeyiz Setleri: Yeni Hayata Adım Atarken</h3>\n' +
                    '<p>Yeni evlenen çiftler için <a href="https://www.yukselensepets.com/search/ceyiz-setleri-ceyiz-paketleri" target="_new">Çeyiz Setleri</a>, evlerini donatmalarına yardımcı olur. Temel ev eşyalarından dekoratif detaylara kadar çeyiz setleriyle ilgili püf noktalarını ve önerileri bulabileceğiniz rehberimize göz atın.</p>\n' +
                    '<h3>Düğün Paketi: Her Şey Dahil Mutluluk</h3>\n' +
                    '<p><a href="https://www.yukselensepets.com/search/ceyiz-setleri-ceyiz-paketleri" target="_new">Düğün paketi</a> seçenekleri, düğün organizasyonunuzu daha kolay hale getirmek için tasarlanmıştır. Mekan, catering, dekorasyon gibi detayları tek bir pakette bulabilirsiniz. Düğününüzü planlarken bu pratik çözümleri göz önünde bulundurun.</p>\n' +
                    '<h3>Nikah Şekeri: Hatıraları Tatlandırın</h3>\n' +
                    '<p>Nikah törenleri, sevgililerin birbirlerine verdikleri önemli bir sözdür.<a href="https://www.yukselensepets.com/search/nikah-sekeri" target="_new">Nikah şekeri</a>, bu özel anı tatlandırmak için harika bir yol sunar. Nikah şekeri seçimi, anlamı ve alternatifleri hakkında daha fazla bilgi edinin.</p>\n' +
                    '<h3>Hediyelik Eşya Çeşitleri</h3>\n' +
                    '<p>Genellikle özel günlerde, doğum günleri, düğünler veya yıl dönümleri gibi kutlamalarda kullanılırlar bazı örnekler:.<a href="https://www.yukselensepets.com/search/hediyelik-esya" target="_new">Hediyelik eşya</a>,Hediyelik eşyaların birçok çeşidi vardır ve seçim yaparken dikkate alabileceğiniz birkaç kategori bulunmaktadır.</p>\n' +
                    '<h2>Özet: Düğün &amp; Kına &amp; Nikah Malzemeleri ve Organizasyon</h2>\n' +
                    '<p>Düğün, kına ve nikah gibi özel etkinlikler, hayatın en güzel anlarından birkaçını oluşturur. <strong>Düğün &amp; Kına &amp; Nikah Malzemeleri ve Organizasyon</strong> ile ilgili her ayrıntıyı öğrenerek bu anları unutulmaz kılabilirsiniz. Organizasyon malzemelerinden çeyiz setlerine, nikah şekerinden düğün paketlerine kadar ihtiyacınız olan her şeyi bulabileceğiniz bu rehberle, özel anlarınızı planlarken daha fazla güven ve bilgi sahibi olacaksınız.</p>\n' +
                    '<p><strong>İçerikler:</strong> <a href="https://www.yukselensepets.com/search/dugun-organizasyonu-organizasyon-malzemeleri" target="_new">Organizasyon Malzemeleri</a>, <a href="https://www.yukselensepets.com/search/kina-malzemeleri-kina-gecesi-malzemeleri-kina-setleri" target="_new">Kına Gecesi Malzemeleri</a>, <a href="https://www.yukselensepets.com/search/ceyiz-setleri-ceyiz-paketleri" target="_new">Çeyiz Setleri</a>, <a href="https://www.yukselensepets.com/search/nikah-sekeri" target="_new">Nikah Şekeri</a></p>\n'} />
            </div>
        </>
    );
}
