import styles from '../assets/styles/Header.module.css';
import trollFace from '../assets/img/Troll Face.png'

export default function Header () {
  return(
    <header className={styles.header}>
      <div className={styles.left}>
        <img className={styles.img} src={trollFace} alt="Troll Face Image" />
        <h1 className={styles.title}>Meme Generator</h1>
      </div>
      <div className={styles.right}>
        <p className={styles.text}>React Course - Project 3</p>
      </div>
    </header>
  );
}