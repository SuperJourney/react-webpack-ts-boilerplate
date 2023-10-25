import React from "react";
import { Link } from 'react-router-dom';


import './index.scss';

interface TabItemProps {
    title: string
    remark: string
    active?: boolean
    to: string
}

interface TabState {
}
// tab栏状态切换；
// 页面切换；
class TabItem extends React.Component<TabItemProps> {

    render() {
        const { title, remark } = this.props;
        const activeClass = this.props.active ? "active" : "";

        return (
            <li>
                <Link to={this.props.to}>
                    <div className={`item ${activeClass}`}>
                        <div className="title">{title || "Default Title"}</div>
                        <div className="label">{remark || "Default Remark"}</div>
                    </div>
                </Link>
            </li>
        );
    }
}

interface TabProps {
    children: React.ReactNode
}
interface TabState {

}
// 导航栏
class Tab extends React.Component<TabProps, TabState> {
    constructor(props: TabProps) {
        super(props);
        this.state = {

        };
    }
    public static Item = TabItem

    render() {
        return <ul className="tab">
            {this.props.children}
        </ul>
    }
}

export default Tab;