import styles from "./styles.module.css";
export const Iam = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.greeting}>Hola, soy</h2>
      <h1 className={styles.name}>Eladio Feijóo</h1>
      <h3 className={styles.work}>Desarrollador Web</h3>
    </article>
  );
};
