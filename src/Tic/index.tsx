
import React, { Component } from 'react'
import Square from './square'
import "./index.scss"
import "./square.scss"

interface TicProps {

}
interface TicState {
    trigger: boolean
    ind: number[]
    a: string[]
}
class Tic extends Component<TicProps, TicState> {
    constructor(props: TicProps) {
        super(props)
        this.state = {
            trigger: false,
            ind: Array.from({ length: 9 }, (_, index) => index),
            a: Array.from({length:9},()=>"")
        }
    }
    render() {

        return (
            <div className='tic'>
                <h1>Tic</h1>
                <div className='board'>
                    {
                        this.state.ind.map((item, index) => {
                            if (index % 3 === 0) {
                                return (
                                    <div className='row' key={index}>
                                        {this.state.a.slice(index,index+3).map((item, subIndex) => (
                                            <Square value={this.state.a[index+subIndex]} onClick={() => this.click(index + subIndex)} key={index+subIndex} />
                                        ))}
                                    </div>
                                );
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        )
    }

    click = (pos: number) => {
        let cur_statues = this.state.a
        if (this.state.trigger) {
            cur_statues[pos] = "X"
        } else {
            cur_statues[pos] = "O"
        }
        this.setState({ a: cur_statues, trigger: !this.state.trigger })
    }

}

export default Tic