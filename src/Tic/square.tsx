import React from 'react'

interface SquareProps {
    value: string
    onClick: () => void
}
export default function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}