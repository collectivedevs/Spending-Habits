import React from 'react'

function MenuIcon() {
    return (
        <svg
            version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid meet" viewBox="185.66666666666669 298.99695035460996 44 28"
            width="30" height="24"
        >
            <defs>
                <path d="M226.67 300L186.67 300" id="menu-top-line"></path>
                <path d="M226.67 312L186.67 312" id="menu-middle-line"></path>
                <path d="M226.67 324L186.67 324" id="menu-bottom-line"></path>
            </defs>
            <g>
                <g><g><use xlinkHref="#menu-top-line" stroke="#fff" strokeWidth="3" /></g></g>
                <g><g><use xlinkHref="#menu-middle-line" stroke="#fff" strokeWidth="3" /></g></g>
                <g><g><use xlinkHref="#menu-bottom-line" stroke="#fff" strokeWidth="3" /></g></g>
            </g>
        </svg>
    )
}

export default MenuIcon
