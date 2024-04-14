import React from 'react'

type HeadingProps ={
    children: string
}
export default function Heading ({children}: HeadingProps) {
  return (
    <div>{children}</div>
  )
}
