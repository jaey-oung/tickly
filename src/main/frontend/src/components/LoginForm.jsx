import React, { useState } from 'react';
import { X } from 'lucide-react';

function LoginForm({ onSwitch }) {
    // 아이디와 비밀번호 상태 관리
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div
            className="
                relative
                w-[400px] p-6 rounded-xl shadow-xl
                bg-white
            "
        >
            {/* 로그인 폼 닫기(X) 버튼 */}
            <button
                onClick={onSwitch}
                className="
                    absolute top-4 right-4
                    text-gray-400 hover:text-gray-600
                    transition
                "
            >
                <X size={24} />
            </button>

            {/* 로그인 제목 */}
            <h2
                className="
                    mb-6
                    text-2xl font-bold text-center
                    text-pink-600
                "
            >
                로그인
            </h2>

            {/* 아이디 입력 필드 */}
            <div
                className="
                    mb-4
                "
            >
                <label
                    className="
                        mb-1
                        block text-gray-600
                    "
                >
                    아이디
                </label>
                <input
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    className="
                        w-full py-2 text-lg outline-none
                        border-b-2 border-gray-300 focus:border-pink-500
                        transition-all
                    "
                    placeholder="아이디를 입력하세요"
                />
            </div>

            {/* 비밀번호 입력 필드 */}
            <div
                className="
                    mb-4
                ">
                <label
                    className="
                        mb-1
                        block text-gray-600
                    "
                >
                    비밀번호
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="
                        w-full py-2 text-lg outline-none
                        border-b-2 border-gray-300 focus:border-pink-500
                        transition-all
                    "
                    placeholder="비밀번호를 입력하세요"
                />
            </div>

            {/* 로그인 버튼 */}
            <button
                className="
                    w-full mt-4 py-3
                    bg-pink-500 text-white font-bold rounded
                    hover:bg-pink-600
                    transition
                "
            >
                로그인
            </button>

            {/* 비밀번호 찾기 */}
            <div
                className="
                    mt-4 text-sm text-center
                    text-gray-500 cursor-pointer
                    hover:underline
                "
            >
                비밀번호를 잊으셨나요?
            </div>

            {/* 회원가입 유도 */}
            <div
                className="
                    mt-6 text-sm text-center
                "
            >
                아직 회원이 아니신가요?{" "}
                <span
                    onClick={onSwitch}
                    className="
                        text-pink-500 cursor-pointer
                    "
                >
                    회원가입
                </span>
            </div>
        </div>
    );
}

export default LoginForm;