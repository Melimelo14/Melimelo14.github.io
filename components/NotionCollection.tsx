import React from "react";
import * as types from "notion-types";
import { getTextContent } from "notion-utils";

import { Collection as NotionCollection, PageIcon } from "react-notion-x";

export const Collection: React.FC<{
  block: types.CollectionViewBlock | types.CollectionViewPageBlock;
  className?: string;
  recordMap: types.ExtendedRecordMap;
}> = ({ block, className, recordMap }) => {
  const { collection_id: collectionId, view_ids: viewIds } = block;

  const collectionViewId = viewIds[0];

  const collection = recordMap.collection[collectionId]?.value;
  const collectionView = recordMap.collection_view[collectionViewId]?.value;
  const collectionData =
    recordMap.collection_query[collectionId]?.[collectionViewId];

  if (!(collection && collectionView && collectionData)) {
    console.log("skipping missing collection view for block", block.id);
    return null;
  }

  if (collectionView.type !== "gallery") {
    return <NotionCollection block={block} className={className} />;
  }

  const title = getTextContent(collection.name).trim();
  if (collection.icon) {
    block.format = {
      ...block.format,
      page_icon: collection.icon,
    };
  }

  return (
    <div className="notion-collection">
      <div className="notion-collection-header">
        {title && (
          <div className="notion-collection-header-title">
            <>
              <PageIcon
                block={block}
                className="notion-page-title-icon"
                hideDefaultIcon
              />
              {title}
            </>
          </div>
        )}
      </div>

      <CollectionViewGallery
        collection={collection}
        collectionView={collectionView}
        collectionData={collectionData}
      />
    </div>
  );
};

const CollectionViewGallery: React.FC<CollectionViewProps> = ({
  collection,
  collectionView,
  collectionData,
  recordMap,
}) => {
  const {
    gallery_cover = { type: "none" },
    gallery_cover_size = "medium",
    gallery_cover_aspect = "cover",
  } = collectionView.format || {};

  // console.log('gallery', { collection, collectionView, collectionData })

  return (
    <div className="notion-gallery">
      <div className="notion-gallery-view">
        <div
          className={cs(
            "notion-gallery-grid",
            `notion-gallery-grid-size-${gallery_cover_size}`
          )}
        >
          {collectionData.blockIds.map((blockId) => {
            const block = recordMap.block[blockId]?.value as PageBlock;
            if (!block) return null;

            return (
              <CollectionCard
                collection={collection}
                block={block}
                cover={gallery_cover}
                coverSize={gallery_cover_size}
                coverAspect={gallery_cover_aspect}
                properties={collectionView.format?.gallery_properties}
                key={blockId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
