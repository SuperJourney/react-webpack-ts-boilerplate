import React from "react";
import Switch from "@/components/switch"

import "./index.scss"

interface ItemProps {
    title: string
    remark: string

    children: React.ReactNode

    onToggle: (isChecked:boolean) => void
}

class Item extends React.Component<ItemProps> {
    render() {
        const { title, remark } = this.props;
        const defaultTitle = "Default Title";
        const defaultRemark = "Default Remark";

        return (
            <div className="s-list">
                <div className="s-list-item">
                    <div className="s-label">
                        <div className="s-title">
                            {title ? title : defaultTitle}
                        </div>
                        <div className="s-remark">{remark ? remark : defaultRemark}</div>
                    </div>
                    <div className="s-switch">
                        <Switch onToggle={this.props.onToggle}></Switch>
                    </div>
                </div>
            </div>
        );
    }
}

interface ListProps {
    children: React.ReactNode
}

class List extends React.Component<ListProps>{
    public static Item = Item
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}



export default List;


