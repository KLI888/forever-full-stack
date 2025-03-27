import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    return (
        <nav className='flex items-center justify-between py-4 px-6 bg-white shadow-md sticky top-0 z-50'>
            <Link to='/' className='text-xl font-bold text-gray-800'>EliteCommerce</Link>
            
            {/* Desktop Navigation */}
            <ul className='hidden md:flex gap-6 text-sm text-gray-700'>
                {['COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
                    <NavLink
                        key={index}
                        to={`/${item.toLowerCase()}`}
                        className={({ isActive }) => `relative hover:text-black ${isActive ? 'font-bold' : ''}`}
                    >
                        {item}
                        <span className='absolute left-1/2 bottom-[-5px] w-0 h-1 bg-black transition-all duration-300 group-hover:w-full transform -translate-x-1/2'></span>
                    </NavLink>
                ))}
            </ul>

            {/* Right Side Icons */}
            <div className='flex items-center gap-5'>
                <img
                    onClick={() => { setShowSearch(true); navigate('/collection'); }}
                    src={assets.search_icon}
                    className='w-6 cursor-pointer hover:opacity-75 transition duration-200'
                    alt='Search'
                />

                {/* Profile Dropdown */}
                <div className='relative group'>
                    <img
                        onClick={() => !token && navigate('/login')}
                        className='w-6 cursor-pointer hover:opacity-75 transition duration-200'
                        src={assets.profile_icon}
                        alt='Profile'
                    />
                    {token && (
                        <div className='absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40 py-2'>
                            <p className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Orders</p>
                            <p onClick={logout} className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500'>Logout</p>
                        </div>
                    )}
                </div>

                {/* Cart Icon */}
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-6' alt='Cart' />
                    <span className='absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                        {getCartCount()}
                    </span>
                </Link>

                {/* Mobile Menu Icon */}
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className='w-6 cursor-pointer md:hidden'
                    alt='Menu'
                />
            </div>

            {/* Sidebar Menu for Mobile */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${visible ? 'w-64' : 'w-0'} overflow-hidden`}> 
                <div className='flex flex-col text-gray-700 p-4'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='Close' />
                        <p>Close</p>
                    </div>
                    {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
                        <NavLink
                            key={index}
                            onClick={() => setVisible(false)}
                            className='py-3 pl-4 border-b block hover:bg-gray-100'
                            to={`/${item.toLowerCase()}`}
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
