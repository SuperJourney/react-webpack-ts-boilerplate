import React, { Component } from 'react'
import store from '../store/store';
import { addHistory, resetHistory } from '../store/slice/hisotrySlice';
interface Props {
    index: number
    item: number
    reset: (i: number) => void
}



class HistoryItem extends Component<Props> {
    render() {
        return (
            <li key={"history-item-"+ this.props.index}>
                go to move <button onClick={() => this.moveto(this.props.index)}>
                    {this.props.index + 1}
                </button>
                <span>
                    {this.props.item}
                </span>
            </li>
        );
    }

    moveto = (i: number) => {
        this.props.reset(i)
        store.dispatch(resetHistory(store.getState().historyReducer.history.slice(0, i)))
    }
}
interface HistoryProps {
    reset: (i: number) => void
}


class History extends Component<HistoryProps> {
    state = {}
    render() {
        return (
            <ol>
                {
                    store.getState().historyReducer.history.map((item, index) => {
                        return (
                            <HistoryItem index={index} reset={this.props.reset} item={item} key={"history-" + index}/>
                        )
                    })
                }
            </ol>
        );
    }
}
export { HistoryItem, History }
export default history;