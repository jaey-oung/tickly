import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import MenuButton from './MenuButton';
import { useNavigate } from 'react-router-dom';

function MainMenu() {
    // 메뉴 열림 여부
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    // +버튼 클릭 시 메뉴 토글
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

            {/* 6개 메뉴 버튼 */}
            {menuOpen && (
                <>
                    {/* 12시 방향 */}
                    <MenuButton
                        label="타이머 설정"
                        positionClass="top-[20%] left-1/2"
                        colorClass="bg-red-400"
                    />

                    {/* 2시 방향 */}
                    <MenuButton
                        label="타이머 리스트 보기"
                        positionClass="top-[33%] left-[66%]"
                        colorClass="bg-orange-400"
                    />

                    {/* 4시 방향 */}
                    <MenuButton
                        label="로그인 / 회원가입"
                        positionClass="top-[66%] left-[66%]"
                        colorClass="bg-yellow-400"
                        // 로그인 페이지로 이동
                        onClick={() => navigate("/login")}
                    />

                    {/* 6시 방향 */}
                    <MenuButton
                        label="알림 기록 보기"
                        positionClass="top-[80%] left-1/2"
                        colorClass="bg-green-400"
                    />

                    {/* 8시 방향 */}
                    <MenuButton
                        label="도움말 / 소개"
                        positionClass="top-[66%] left-[33%]"
                        colorClass="bg-sky-400"
                    />

                    {/* 10시 방향 */}
                    <MenuButton
                        label="환경설정"
                        positionClass="top-[33%] left-[33%]"
                        colorClass="bg-purple-400"
                    />
                </>
            )}
        </div>
    );
}

export default MainMenu;