import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import My from "@/Demo/pages/my/my"
import Tab from "@/components/tab"
import "./index.scss"


class Demo extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Router>
                            <Route path="/">
                                <My></My>
                            </Route>
                    </Router>
                </div>
                <div>
                    <Tab>
                        <Tab.Item title="Title 1" remark="Remark 1" active={true} to='/chat'></Tab.Item>
                        <Tab.Item title="Title 3" remark="Remark 3"></Tab.Item>
                    </Tab>
                </div>

            </div>
        );
    }

}

export default Demo;