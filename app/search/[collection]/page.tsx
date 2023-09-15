import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import {CollectionDescription} from "../../../components/collection-description";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL_API
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL_API}`
    : 'http://localhost:3000';
export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`,
    alternates: {
      canonical: `${baseUrl}/search/${collection.handle}`
    },
    authors: {
        name: "Yukselensepets",
    },
    keywords: collection.seo?.title || collection.title,
  };

}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  const [collection] = await Promise.all([getCollection(params.collection)]);
  if (!collection) return notFound();
  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
      <div className="flex justify-center">
        <CollectionDescription collection={collection} />
      </div>
    </section>
  );
}
