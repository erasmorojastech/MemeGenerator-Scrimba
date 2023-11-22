import styles from '../assets/styles/Form.module.css'

export default function Form() {
  return (
    <section className={styles.form_section}>
      <form action="#">
        <div className={styles.inputs}>
          <input className={styles.text_meme} type="text" name="top-text" id="top-text" placeholder='Insert Upper Text' />
          <input className={styles.text_meme} type="text" name="bottom-text" id="bottom-text" placeholder='Insert Bottom Text' />
        </div>
        <button className={styles.cta}>Get a new meme image</button>
      </form>
    </section>
  );
}