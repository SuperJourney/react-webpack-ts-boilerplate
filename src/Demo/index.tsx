import React from "react"

import List from "@/components/list"

import "./index.scss"
let items = [
    {
        title: "Title 1",
        remark: "Remark 1",
        onToggle:(isChecked:boolean)=>{
            console.log("hello,world")
            console.log(isChecked)
        }
    },
    {
        title: "Title 2",
        remark: "Remark 2",
        onToggle:(isChecked:boolean)=>{
            console.log("hello,world")
            console.log(isChecked)
        }
    }

]
class Demo extends React.Component {
    
    render() {
        return (
            <div>
                <List>
                    {
                        items.map((item, index) => (
                            <List.Item key={index} title={item.title} remark={item.remark}  onToggle={item.onToggle}>
                                <div></div>
                            </List.Item>
                        ))
                    }
                </List>

            </div>
        );
    }

}

export default Demo;