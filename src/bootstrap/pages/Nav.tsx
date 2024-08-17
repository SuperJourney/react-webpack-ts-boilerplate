import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";


const NavbarComp: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const useIsLargeScreen = () => {
        const [isLargeScreen, setIsLargeScreen] = useState(
            window.matchMedia('(min-width: 768px)').matches
        );

        useEffect(() => {
            console.log(useEffect);
            const mediaQueryList = window.matchMedia('(min-width: 768px)');
            const handleChange = () => {
                setIsLargeScreen(mediaQueryList.matches);
            };

            mediaQueryList.addEventListener('change', handleChange);
            return () => mediaQueryList.removeEventListener('change', handleChange);
        }, []);

        return isLargeScreen;
    };


    return (
        <div>
            {useIsLargeScreen() ? (
                <>
                    <Navbar className="justify-content-between" expand="lg" bg="light">
                        <>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Brand href="/">Bootstrap</Navbar.Brand>
                        </>
                        <Nav className="justify-content-end">
                            <Nav.Link href="/login" >未登录</Nav.Link>
                            <Nav.Link href="/login" >未登录</Nav.Link>
                        </Nav>
                    </Navbar>
                </>
            ) : (
                <Navbar expand="lg" bg="light" >
                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Brand href="/">Bootstrap</Navbar.Brand>
                    </div>
                    <Nav className="justify-content-end">
                        <div className="d-flex flex-row">
                            <Nav.Link href="/login" >未登录</Nav.Link>
                            <Nav.Link href="/login" >未登录</Nav.Link>
                        </div>
                    </Nav>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">首页1</Nav.Link>
                            <Nav.Link href="/about">关于1</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

            )}




        </div>
    )
}

export default NavbarComp;