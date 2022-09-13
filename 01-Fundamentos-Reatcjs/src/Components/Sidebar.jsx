import { PencilLine } from "phosphor-react";
import styles from "../Components/Sidebar.module.css";
//import perfil from "../assets/perfil.jpg";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} scr="http://github.com/alscalaca.png" />
        <strong>André Calaça</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={15} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
