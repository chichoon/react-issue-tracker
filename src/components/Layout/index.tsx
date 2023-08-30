import { Link, Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export const Layout = () => (
  <>
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        <span>facebook</span>
        <span>/</span>
        <span>react</span>
      </Link>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
