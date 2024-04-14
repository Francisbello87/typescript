import React from 'react'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    children: string
}
export default function Button({handleClick, children}: ButtonProps) {
  return (
    <button onClick={(event) => handleClick(event, 1)}>{children}</button>
  )
}
