import Image from "next/image";
import profilePic from "../../public/me.png";

import styles from "./styles.module.css";

export const Avatar = () => {
  return (
    <Image
      className={styles.profileImage}
      src={profilePic}
      alt="Picture of the author"
      priority
    />
  );
};
