import { MyIntroduce } from "../components/my-introduce/MyIntroduce";
import { MyMessage } from "../components/my-message/MyMessage";
import styles from "../styles/Home.module.css";
import { MyHead } from "../components/my-head/MyHead";
import { Menu } from "../components/menu/Menu";
import { Footer } from "../components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <MyHead />
      <Menu />
      <div className={styles.content}>
        <main className={styles.main}>
          <MyIntroduce />
          <MyMessage />
        </main>
      </div>
      <Footer />
    </div>
  );
}
