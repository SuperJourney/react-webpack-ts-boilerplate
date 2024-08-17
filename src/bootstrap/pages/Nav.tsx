import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";


interface Props {
    className?: string
}
const UnloginBar: React.FC<Props> = (props) => {
    return (
        <Nav className={props.className}>
            <Nav.Link href="/login" >未登录</Nav.Link>
            <Nav.Link href="/login" >未登录</Nav.Link>
        </Nav>
    )
}

const MainLink: React.FC = () => {
    return (
        <>
            <Nav.Link className="my-1" href="/">首页</Nav.Link>
            <Nav.Link className = "my-1" href="/about">关于1</Nav.Link>
            <Nav.Link className = "my-1" href="/about">关于1</Nav.Link>
            <Nav.Link className = "my-1" href="/about">关于1</Nav.Link>
            <Nav.Link className = "my-1" href="/about">关于1</Nav.Link>
        </>
    )
}




const NavbarComp: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const useIsLargeScreen = () => {
        const [isLargeScreen, setIsLargeScreen] = useState(
            window.matchMedia('(min-width: 768px)').matches
        );

        useEffect(() => {
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
                    <Navbar className="justify-content-between" expand="md" bg="light">
                        <Nav>
                            <Navbar.Brand href="/">Bootstrap</Navbar.Brand>
                            <MainLink />
                        </Nav>
                        <UnloginBar />
                    </Navbar>
                </>
            ) : (
                <Navbar expand="md" bg="light" >
                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Brand href="/">Bootstrap</Navbar.Brand>
                    </div>
                    <UnloginBar className="flex-row" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <MainLink />
                    </Navbar.Collapse>

                </Navbar>

            )}

        </div>
    )
}

export default NavbarComp;

