import styles from "./styles.module.css";

export const MyMessage = () => {
  return (
    <article>
      <p className={styles.textCenter}>
        Gracias por visitar mi porfolio. Actualmente, me encuentro
        desarrollándolo, pero pronto estará listo.
      </p>

      <p className={styles.textCenter}>Me encantaría que volvieras pronto.</p>
    </article>
  );
};
