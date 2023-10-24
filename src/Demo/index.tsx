import React from "react"

import List from "@/components/list"
import Nav from "@/components/nav"
import "./index.scss"
const items = Array.from(Array(20), (_, i) => ({
    title: `Title ${i + 1}`,
    remark: `Remark ${i + 1}`,
    onToggle: (isChecked: boolean) => {
        console.log(isChecked)
    }
}))

class Demo extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <List>
                        {items.map((item, index) => (
                            <List.Item
                                key={index}
                                title={item.title}
                                remark={item.remark}
                                onToggle={item.onToggle}
                            >
                                <div></div>
                            </List.Item>
                        ))}
                    </List>
                </div>
                <div>
                    <Nav>
                        <Nav.Item></Nav.Item>
                        <Nav.Item></Nav.Item>
                        <Nav.Item></Nav.Item>
                    </Nav>
                </div>

            </div>
        );
    }

}

export default Demo;