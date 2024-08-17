
import React from "react";
import { Accordion, Container, Nav, } from "react-bootstrap";
import { Outlet } from "react-router";
class Index extends React.Component {
    render(): React.ReactNode {
        return <div className="d-flex flex-row">
            <Nav className="d-flex flex-column flex-grow-1 flex-basic-30">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>关于</Accordion.Header>
                        <Accordion.Body>
                            <Nav.Link href="/docs/getting-started/introduction">介绍</Nav.Link>
                            <Nav.Link href="/docs/getting-started/why-react-bootstrap">为什么选择React-Bootstrap</Nav.Link>
                            <Nav.Link href="/docs/getting-started/theming">主题</Nav.Link>
                            <Nav.Link href="/docs/getting-started/color-modes">颜色模式</Nav.Link>
                            <Nav.Link href="/docs/getting-started/support">获取帮助</Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Nav>
            <Container fluid={"sm"} className="d-flex flex-column">
                123123
                <Outlet></Outlet>
            </Container>
        </div>
    }
}

export default Index;