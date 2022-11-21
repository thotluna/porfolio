import { Avatar } from "../avatar/Avatar";
import { Iam } from "../iam/Iam";
import styles from "./styles.module.css";

export const MyIntroduce = () => {
  return (
    <section className={styles["section-head"]}>
      <Avatar />
      <Iam />
    </section>
  );
};
