import Prose from 'components/prose';
import { Collection } from 'lib/shopify/types';
import { Metadata } from 'next';
import { getCollection } from '../lib/shopify';
import { notFound } from 'next/navigation';

export async function generateMetadata({
    params
   }: {
    params: { collection: string };
}): Promise<Metadata> {
    const collection = await getCollection(params.collection);

    if (!collection) return notFound();

    return {
        title: collection.seo?.title || collection.title,
        openGraph: {
            title: collection.seo?.title || collection.title,
            description: collection.seo?.description || collection.description || `${collection.title} products`,

        },

        description:
            collection.seo?.description || collection.description || `${collection.title} products`
    };
}

export function CollectionDescription({ collection }: { collection: Collection }) {
    return (
        <>
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                {/*<h1 className="mb-2 text-5xl font-medium">{collection.title}</h1>*/}
            </div>
            {collection.descriptionHtml ? (
                <div>
                    <Prose
                        className="mb-6 text-sm leading-tight dark:text-white/[60%]"
                        {...collection.seo}
                        html={collection.descriptionHtml}
                    />

                </div>
            ) : null},
        </>
    );
}
