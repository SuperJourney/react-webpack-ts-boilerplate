import React from "react";

import "@/components/switch/index.scss";

interface SwitchProps {
    onToggle: (checked: boolean) => void
}
interface SwitchState {
    isChecked?: boolean
}
class Switch extends React.Component<SwitchProps,SwitchState> {
    // 
    constructor(props: SwitchProps) {
        super(props);
        this.state = {
            isChecked: false
        };
    }
    
    render() {
        const randomId = Math.random().toString(36).substring(7);
        const isChecked = this.state.isChecked ?? false;

        const handleToggle = () => {
            this.props.onToggle(!isChecked);
            this.setState({ isChecked: !isChecked });
        };

        return (
            <div className="switch">
                <input
                    type="checkbox"
                    id={`switch-toggle-${randomId}`}
                    className="switch-toggle"
                    checked={isChecked}
                    onChange={handleToggle}
                />
                <label htmlFor={`switch-toggle-${randomId}`} className="switch-label"></label>
            </div>
        );
    }

}
export default Switch;


