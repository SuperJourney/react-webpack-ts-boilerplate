import React from "react"

import List from "@/components/list"

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
            <List>
                {items.map((item, index) => (
                    <List.Item
                        key={index}
                        title={item.title}
                        remark={item.remark}
                        onToggle={item.onToggle}
                    >
                    </List.Item>
                ))}
            </List>
        );
    }

}

export default Demo;