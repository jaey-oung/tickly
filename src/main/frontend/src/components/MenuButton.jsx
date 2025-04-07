import React from 'react';

function MenuButton({ label, positionClass, colorClass }) {
    return (
        <button
            className={`
                absolute
                ${positionClass}
                transform -translate-x-1/2 -translate-y-1/2
                flex items-center justify-center
                w-60 h-60
                text-2xl text-white
                rounded-full
                shadow-md
                ${colorClass}
                hover:scale-105
                transition-all duration-200
            `}
        >
            {label}
        </button>
    );
}

export default MenuButton;