import styles from './AdvertiseElement.module.scss';

export const AdvertiseElement = () => (
  <li className={styles.adWrapper}>
    <a href='https://wanted.co.kr'>
      <img src='/wanted.webp' alt='wanted advertisement' />
    </a>
  </li>
);
