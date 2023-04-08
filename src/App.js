import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import ScrollToTop from './components/ScrollToTop';
import MainHomePage from './routes/HomePage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/Home' element={<MainHomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;



