import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import data from './database/data.json'
import { useState } from 'react';
import UserContext from './context/UserContext';

function App() {
  const [userId, setUserId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  console.log(data);
  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
