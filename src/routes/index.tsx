import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "../styles/pages/index/index.module.scss";
import ExpandingGallery from "~/components/ExpandingGallery/ExpandingGallery";

export default component$(() => {
  return (
    <>
      <h1 class={styles.headline}>Expanding Gallery</h1>

      <ExpandingGallery />
    </>
  );
});

export const head: DocumentHead = {
  title: "Expanding Gallery",
  meta: [
    {
      name: "description",
      content: "This is an expanding gallery using Qwik and Motion One.",
    },
  ],
};
