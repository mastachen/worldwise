import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="WorldWise logo"
        className={styles.logo}
        style={{ width: "fit-content" }}
      />
    </Link>
  );
}

export default Logo;
