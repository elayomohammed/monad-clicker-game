import Image from "next/image";
import Home from "@/components/clickerGame";
import styles from "./page.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
