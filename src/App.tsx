import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { MainPage } from 'pages/MainPage';
import { IssuePage } from 'pages/IssuePage';

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<MainPage />} />
      <Route path='/:issueId' element={<IssuePage />} />
    </Route>
  </Routes>
);

export default App;
