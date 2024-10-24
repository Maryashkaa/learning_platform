import { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import SignInForm from '../signInForm/SignInForm';
import RegisterForm from '../registerForm/RegisterForm';

import './Header.css';

const Header: FC = () => {
    const duration = 400;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles: { [key: string]: React.CSSProperties } = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
    
    const navigate = useNavigate();

    const openSignInModal = () => {
        setIsSignInModalOpen(true);
    };

    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };

    const closeModal = () => {
        setIsSignInModalOpen(false);
        setIsRegisterModalOpen(false);
    };

    return (
        <header className="header-fixed-box">
            <div className="header-content">
                <div className='header-logo-box'>
                    <h2 className="headline">SkillSprint</h2>
                    <div className='header-logo fa-brands fa-squarespace'></div>
                </div>

                <div className='nav-block'>
                    <NavLink
                        to="/home"
                        className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/a"
                        className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                    >
                        Courses
                    </NavLink>
                    <NavLink
                        to="/a"
                        className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/a"
                        className={({ isActive }) => (isActive ? 'h-link-on' : 'h-link')}
                    >
                        Contact
                    </NavLink>
                </div>

                <div className='header-btns'>
                    <button className="sign-in-btn" onClick={openSignInModal}>
                        Sign in
                    </button>

                    <Transition in={isSignInModalOpen} timeout={duration} unmountOnExit>
                        {(state) => (
                            <div
                                className="modal-overlay"
                                onClick={closeModal}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                            >
                                <div
                                    className="modal-content"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button className="close-btn" onClick={closeModal}>X</button>
                                    <SignInForm />
                                </div>
                            </div>
                        )}
                    </Transition>

                    <button className="reg-btn" onClick={openRegisterModal}>
                        Sign up
                    </button>

                    <Transition in={isRegisterModalOpen} timeout={duration} unmountOnExit>
                        {(state) => (
                            <div
                                className="modal-overlay"
                                onClick={closeModal}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                            >
                                <div
                                    className="modal-content-for-reg"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button className="close-btn" onClick={closeModal}>X</button>
                                    <RegisterForm />
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
        </header>
    );
};

export default Header;
