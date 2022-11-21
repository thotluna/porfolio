import styles from "./styles.module.css";

export const MyMessage = () => {
  return (
    <article>
      <p className={styles.textCenter}>
        Gracias por visitar mi porfolio. Actualmente me encuento
        desarrollandolo, pero pronto estara listo.
      </p>

      <p className={styles.textCenter}>Me encantaria que me visites pronto.</p>
    </article>
  );
};
