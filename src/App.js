import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/pageNotFound" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/create-account' element={<CreateAccountPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


