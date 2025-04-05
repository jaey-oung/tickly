import React, { useState } from 'react';
import { Plus } from 'lucide-react';

function App() {
    // 메뉴 열림 상태를 관리 (true: 열림, false: 닫힘)
    const [menuOpen, setMenuOpen] = useState(false);

    // + 버튼 클릭 시 메뉴 열림/닫힘 토글
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        // 전체 화면 정중앙 정렬
        <div
            className="
                flex justify-center items-center
                h-screen
                bg-gray-200
            "
        >

            {/* 중앙 + 버튼 */}
            <button
                onClick={toggleMenu}
                className="
                    flex items-center justify-center
                    w-16 h-16
                    bg-blue-500 text-white
                    rounded-full shadow-lg
                    hover:scale-110
                    transition-all duration-300
                "
            >
                <Plus size={28} strokeWidth={2.5} />
            </button>

            {/* 메뉴 버튼 6개 */}
            {menuOpen && (
                <div>
                    <button>타이머 설정</button>
                    <button>타이머 리스트 보기</button>
                    <button>로그인 / 회원가입</button>
                    <button>환경설정</button>
                    <button>알림 기록 보기</button>
                    <button>도움말 / 소개</button>
                </div>
            )}
        </div>
    );
}

export default App;