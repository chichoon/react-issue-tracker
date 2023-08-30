import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { MainPage } from './pages/MainPage';

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<MainPage />} />
      <Route path='/:issueId' element={<div>bbb</div>} />
    </Route>
  </Routes>
);

export default App;
