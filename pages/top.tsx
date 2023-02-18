import Static from '@/components/static';
import styles from '@/styles/Home.module.css'

export default function Top() {
  return (
    <>
      <Static name='top' title='top title' desc='top page'>
        <h1 className={styles.h1}>Top</h1>
      </Static>
    </>
  );
}
