import { component$, Slot } from "@builder.io/qwik";
import styles from "../styles/pages/layout.module.scss";

export default component$(() => {
  return (
    <div class={styles.container}>
      <Slot />
    </div>
  );
});
