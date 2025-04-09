import React from 'react';

// 공통 메뉴 버튼 컴포넌트
function MenuButton({ onClick, positionClass, colorClass, label }) {
    return (
        <button
            onClick={onClick}
            className={`
                absolute
                ${positionClass}    // 위치 지정
                transform -translate-x-1/2 -translate-y-1/2
                flex items-center justify-center
                w-60 h-60
                text-2xl text-white
                rounded-full
                shadow-md
                ${colorClass}       // 색상 지정
                hover:scale-105
                transition-all duration-200
            `}
        >
            {label}
        </button>
    );
}

export default MenuButton;