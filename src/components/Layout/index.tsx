import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export const Layout = () => (
  <>
    <header className={styles.header}>
      <span>facebook</span>
      <span>/</span>
      <span>react</span>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
