import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [theRoute, setTheRoute] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setTheRoute(value);
  }

  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange} />
      <Link href={`/prueba/${theRoute}`}>
        <div>Ir a /prueba/{theRoute}</div>
      </Link>
    </div>
  );
}
