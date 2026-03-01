// import React from 'react'

interface Props {
    cartItemsCount: number
}

const NavBar = ({cartItemsCount}: Props) => (
    <div>NavBar: {cartItemsCount}</div>
)

export default NavBar