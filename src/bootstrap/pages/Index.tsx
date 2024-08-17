import React from "react";
import { Container, Nav } from "react-bootstrap"
import { Outlet } from "react-router";
import About from "../About";

import NavbarComp from "./Nav";


class Index extends React.Component {
    render(): React.ReactNode {
        return <div>

            {/* 导航栏 */}
            <NavbarComp></NavbarComp>

            <Nav className="flex-column">
                <Nav.Link href="/">主页</Nav.Link>
                <Nav.Link href="/about">关于</Nav.Link>
            </Nav>

            
            <Container>
            <Outlet></Outlet>
            </Container>
        </div>
    }

}

export default Index;