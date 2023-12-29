
import React, { Component } from 'react'
import Square from './square'
import "./index.scss"
import "./square.scss"

import store from "./store/store"
import { addHistory, resetHistory } from './store/slice/hisotrySlice'



interface TicProps {

}
interface TicState {
    trigger: boolean
    ind: number[]
    a: string[]
    message: string
}
class Tic extends Component<TicProps, TicState> {
    constructor(props: TicProps) {
        super(props)
        this.state = {
            trigger: false,
            ind: Array.from({ length: 9 }, (_, index) => index),
            a: Array(9).fill(""),
            message: "",
            // history:[], 
        }
    }
    render() {
        return (
            <div className='tic'>
                <h1>Tic {this.state.message}</h1>
                <div className='board'>
                    {
                        this.state.ind.map((item, index) => {
                            if (index % 3 === 0) {
                                return (
                                    <div className='row' key={index}>
                                        {this.state.a.slice(index, index + 3).map((item, subIndex) => (
                                            <Square value={this.state.a[index + subIndex]} onSquareClick={() => this.click(index + subIndex)} key={index + subIndex} />
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })
                    }
                </div>
                <ol>
                    {this.move()}
                </ol>
            </div>
        )
    }

    move = () => {
        let historys = store.getState().historyReducer.history || [];
        return historys.map((item, index) => {
            return (
                <li>
                go to move <button onClick={() => this.moveto(index)}> {index+1} </button> {item}
                </li>
            )
        })
    }

    moveto = (i: number)=>{
        // let del_his = this.state.history.slice(i,9)
        let del_his = store.getState().historyReducer.history.slice(i,9)
        let a = this.state.a
        del_his.forEach((item, index)=>{
            a[item] = ""
        })
        this.setState({a:a,trigger: i%2===1})
        store.dispatch(resetHistory(store.getState().historyReducer.history.slice(0,i)))

    }

    click = (pos: number) => {
        let cur_statues = this.state.a
        if (cur_statues[pos] !== "") return
        if (this.state.trigger) {
            cur_statues[pos] = "X"
        } else {
            cur_statues[pos] = "O"
        }
        this.setState({ a: cur_statues, trigger: !this.state.trigger })
        store.dispatch(addHistory(pos))
        const winner = calculateWinner(cur_statues)
        if (winner !== null) {
            this.setState({ a: Array(9).fill(""), trigger: false, message: "Winner:" + winner }) //"Winner"
            store.dispatch(resetHistory([]))
            return
        }
    }

}


function calculateWinner(squares: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Tic