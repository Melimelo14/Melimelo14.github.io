import * as React from "react";
import * as types from "../lib/types";

import styles from "./Testimonials.module.css";

export const Testimonials: React.FC<{
  block: types.CollectionViewBlock;
  ctx: { recordMap: types.ExtendedRecordMap };
}> = (props) => {
  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

  const { block, ctx } = props;
  const collectionId = block.collection_id;
  const collectionViewId = block.view_ids[0];

  if (!collectionId || !collectionViewId) {
    return null;
  }

  const collection = ctx.recordMap.collection[collectionId];
  const collectionView = ctx.recordMap.collection_view[collectionViewId];

  const properties = collection.value.schema;

  const items: { stars: string; Name: string; Text: string }[] =
    // @ts-ignore
    collectionView.value.page_sort
      .map((id: any) => {
        return ctx.recordMap.block[id];
      })
      .map((block: any) => {
        return Object.entries(block.value.properties).reduce(
          (prev, [key, value]) => {
            // @ts-ignore
            prev[properties[key]?.name ?? key] = value[0];
            return prev;
          },
          {}
        );
      });

  const testimonialList = items.reduce((acc, item, i) => {
    const index = Math.floor(i / 3);
    if (!acc[index]) {
      acc[index] = [];
    }
    acc[index].push(item);
    return acc;
  }, [] as { stars: string; Name: string; Text: string }[][]);

  console.log({ collection, testimonialList, props });
  return (
    <section className={styles.testimonialSection}>
      <div className="container px-4 mx-auto">
        <div className={styles.testimonialGrid}>
          {testimonialList[index].map((testimonial, i) => (
            <div className={styles.testimonialItem} key={i}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  {testimonial.Text ?? "foo bar"}
                </p>
                <p className={styles.testimonialName}>{testimonial.Name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.testimonialNavigation}>
          {testimonialList.map((_, i) => (
            <button
              className={
                index === i
                  ? styles.testimonialNavButtonActive
                  : styles.testimonialNavButton
              }
              key={i}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
