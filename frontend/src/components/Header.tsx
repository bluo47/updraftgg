import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    const [hovered, setHovered] = React.useState<string | null>(null);

    return (
        <header className="w-full bg-white bg-opacity-95 shadow-md fixed top-0 left-0 z-50">
            <nav className="flex justify-center items-center h-16">
                <div className="flex items-center mr-8 h-10">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-10 w-10 rounded-lg"
                    />
                    <span className="font-black text-2xl tracking-wider text-gray-900 ml-3 select-none font-sans">
                        UPDRAFT.GG
                    </span>
                </div>
                <ul className="flex list-none m-0 p-0 gap-8">
                    <li>
                        <Link
                            to="/"
                            className={`no-underline font-medium text-blue-600 text-lg px-4 py-2 rounded-md transition-colors cursor-pointer
                                ${hovered === 'home' ? 'bg-blue-100 text-blue-900' : ''}
                                ${location.pathname === '/' ? 'bg-blue-100 text-blue-900' : ''}`}
                            onMouseEnter={() => setHovered('home')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`no-underline font-medium text-blue-600 text-lg px-4 py-2 rounded-md transition-colors cursor-pointer
                                ${hovered === 'about' ? 'bg-blue-100 text-blue-900' : ''}
                                ${location.pathname === '/about' ? 'bg-blue-100 text-blue-900' : ''}`}
                            onMouseEnter={() => setHovered('about')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/search"
                            className={`no-underline font-medium text-blue-600 text-lg px-4 py-2 rounded-md transition-colors cursor-pointer
                                ${hovered === 'search' ? 'bg-blue-100 text-blue-900' : ''}
                                ${location.pathname === '/search' ? 'bg-blue-100 text-blue-900' : ''}`}
                            onMouseEnter={() => setHovered('search')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/matches"
                            className={`no-underline font-medium text-blue-600 text-lg px-4 py-2 rounded-md transition-colors cursor-pointer
                                ${hovered === 'matches' ? 'bg-blue-100 text-blue-900' : ''}
                                ${location.pathname === '/matches' ? 'bg-blue-100 text-blue-900' : ''}`}
                            onMouseEnter={() => setHovered('matches')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Matches
                        </Link>
                    </li>
                </ul>
                <Link
                    to="/settings"
                    className="text-blue-600 text-2xl ml-8 cursor-pointer transition-colors hover:text-blue-900"
                    title="Settings"
                >
                    &#9881;
                </Link>
            </nav>
        </header>
    );
};

export default Header;