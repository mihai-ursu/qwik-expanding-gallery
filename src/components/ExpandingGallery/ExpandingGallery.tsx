import { component$ } from "@builder.io/qwik";
import Card from "./components/Card/Card";
import data from "~/data/data";
import styles from "./ExpandingGallery.module.scss";

const ExpandingGallery = component$(() => {
  return (
    <div class={styles.wrapper}>
      {data.map((item, index) => (
        <Card
          key={item.id}
          image={item.image}
          numberOfSlides={data.length}
          movieName={item.movieName}
          index={index}
        />
      ))}
    </div>
  );
});

export default ExpandingGallery;
