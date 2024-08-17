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
            <Container>
            <Outlet></Outlet>
            </Container>
        </div>
    }

}

export default Index;