import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type CardProps from "./CardProps";
import { animate } from "motion";
import combineClasses from "~/helpers/combineClasses";
import styles from "./Card.module.scss";

const Card = component$((props: CardProps) => {
  const { numberOfSlides, image, movieName, index } = props;
  const isActive = useSignal(false);

  useTask$(({ track }) => {
    track(() => isActive.value);
    if (isServer) return; // Server guard

    animate(
      `.slide-${index}`,
      {
        width: isActive.value ? "100%" : `${100 / numberOfSlides}%`,
      },
      {
        duration: 0.6,
        easing: [0.43, 0.13, 0.23, 0.96],
      }
    );
  });

  return (
    <div
      class={combineClasses(styles.wrapper, `slide-${index}`)}
      onMouseEnter$={() => (isActive.value = true)}
      onMouseLeave$={() => (isActive.value = false)}
      style={{ width: `${100 / numberOfSlides}%` }}
    >
      {/* <p>{movieName}</p> */}
      <img
        src={image}
        alt={movieName}
        class={styles.image}
        height="100%"
        width="auto"
      />
    </div>
  );
});

export default Card;
