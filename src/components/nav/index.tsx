import React from "react";

import './index.scss';

class NavItem extends React.Component {
    render() {
        return <div className="item">
            <div className="title">选项卡</div>
            <div className="label">描述文案</div>
        </div>
    }
}

interface NavProps {
    children: React.ReactNode
}
interface NavState {
    
}
// 导航栏
class Nav extends React.Component <NavProps,NavState> {
    constructor(props: NavProps) {
        super(props);
        this.state = {
            
        };
    }
    public static Item = NavItem
    
    render() {
        return <div className="nav">
            {this.props.children}
        </div>
    }
}

export default Nav;