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
      `.animation-target-${index}`,
      {
        width: isActive.value ? "100%" : `${100 / numberOfSlides}%`,
      },
      {
        duration: 0.6,
        easing: "ease-in-out",
      }
    );
  });

  return (
    <div
      class={combineClasses(styles.wrapper, `animation-target-${index}`)}
      onMouseEnter$={() => (isActive.value = !isActive.value)}
      onMouseLeave$={() => (isActive.value = !isActive.value)}
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
