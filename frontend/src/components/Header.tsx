import React, { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';

const headerStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.95)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px',
};

const ulStyle: React.CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#357ae8',
    fontWeight: 500,
    fontSize: '1.1rem',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'background 0.2s, color 0.2s',
    cursor: 'pointer',
};

const linkHoverStyle: CSSProperties = {
    background: '#e3f0ff',
    color: '#174ea6',
};

const activeLinkStyle: React.CSSProperties = {
    background: '#e3f0ff',
    color: '#174ea6',
};

const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '2rem',
    height: '40px',
};

const logoStyle: React.CSSProperties = {
    height: '40px',
    width: '40px',
    background: 'transparent',
    borderRadius: '8px',
    filter: 'brightness(0) saturate(100%) invert(0)'
};

const brandTextStyle: React.CSSProperties = {
    fontFamily: '"Segoe UI", "Arial Black", "Arial", sans-serif',
    fontWeight: 900,
    fontSize: '1.6rem',
    letterSpacing: '2px',
    color: '#222',
    marginLeft: '0.75rem',
    userSelect: 'none',
};

const settingsIconStyle: React.CSSProperties = {
    fontSize: '1.7rem',
    marginLeft: '2rem',
    color: '#357ae8',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.2s',
    alignSelf: 'center'
};

const Header: React.FC = () => {
    const location = useLocation();
    const [hovered, setHovered] = React.useState<string | null>(null);

    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                <div style={logoContainerStyle}>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        style={logoStyle}
                    />
                    <span style={brandTextStyle}>UPDRAFT.GG</span>
                </div>
                <ul style={ulStyle}>
                    <li>
                        <Link
                            to="/"
                            style={{
                                ...linkStyle,
                                ...(hovered === 'home' ? linkHoverStyle : {}),
                                ...(location.pathname === '/' ? activeLinkStyle : {}),
                            }}
                            onMouseEnter={() => setHovered('home')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            style={{
                                ...linkStyle,
                                ...(hovered === 'about' ? linkHoverStyle : {}),
                                ...(location.pathname === '/about' ? activeLinkStyle : {}),
                            }}
                            onMouseEnter={() => setHovered('about')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/search"
                            style={{
                                ...linkStyle,
                                ...(hovered === 'search' ? linkHoverStyle : {}),
                                ...(location.pathname === '/search' ? activeLinkStyle : {}),
                            }}
                            onMouseEnter={() => setHovered('search')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/matches"
                            style={{
                                ...linkStyle,
                                ...(hovered === 'matches' ? linkHoverStyle : {}),
                                ...(location.pathname === '/matches' ? activeLinkStyle : {}),
                            }}
                            onMouseEnter={() => setHovered('matches')}
                            onMouseLeave={() => setHovered(null)}
                        >
                            Matches
                        </Link>
                    </li>
                </ul>
                <Link
                    to="/settings"
                    style={settingsIconStyle}
                    title="Settings"
                >
                    &#9881;
                </Link>
            </nav>
        </header>
    );
};

export default Header;