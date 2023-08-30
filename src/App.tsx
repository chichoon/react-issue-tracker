import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

const App = () => (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/:issueId' element={<div>bbb</div>} />
  </Routes>
);

export default App;
