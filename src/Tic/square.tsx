import React from 'react'

interface SquareProps {
    value: string
    onSquareClick: () => void
}
export default function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.value}
        </button>
    )
}