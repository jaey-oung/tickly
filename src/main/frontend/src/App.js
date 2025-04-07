import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import MenuButton from './components/MenuButton';

function App() {
    // 메뉴 열림 상태를 관리 (true: 열림, false: 닫힘)
    const [menuOpen, setMenuOpen] = useState(false);

    // + 버튼 클릭 시 메뉴 열림/닫힘 토글
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        // 전체 화면 정중앙 정렬
        <div
            className="
                relative
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
                    w-40 h-40
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
                <>
                    {/* 12시 방향 */}
                    <MenuButton
                        label="타이머 설정"
                        positionClass="top-[20%] left-1/2"
                        colorClass="bg-blue-400"
                    />

                    {/* 2시 방향 */}
                    <MenuButton
                        label="타이머 리스트 보기"
                        positionClass="top-[33%] left-[66%]"
                        colorClass="bg-green-400"
                    />

                    {/* 4시 방향 */}
                    <MenuButton
                        label="로그인 / 회원가입"
                        positionClass="top-[66%] left-[66%]"
                        colorClass="bg-red-400"
                    />

                    {/* 6시 방향 */}
                    <MenuButton
                        label="알림 기록 보기"
                        positionClass="top-[80%] left-1/2"
                        colorClass="bg-yellow-500"
                    />

                    {/* 8시 방향 */}
                    <MenuButton
                        label="도움말 / 소개"
                        positionClass="top-[66%] left-[33%]"
                        colorClass="bg-purple-500"
                    />

                    {/* 10시 방향 */}
                    <MenuButton
                        label="환경설정"
                        positionClass="top-[33%] left-[33%]"
                        colorClass="bg-teal-500"
                    />
                </>
            )}
        </div>
    );
}

export default App;