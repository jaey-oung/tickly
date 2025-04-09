import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <Router>
            <Routes>
                {/* 메인 메뉴 화면 */}
                <Route path="/" element={<MainMenu />} />

                {/* 로그인 화면 */}
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default App;