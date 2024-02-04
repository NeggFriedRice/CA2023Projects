import React from 'react'

const ItemsList = (props) => {
    const items = props
    // console.log(items.items)
    const itemsList = items.items.map(item => <li key={item.name}>{item.name} - {item.where}</li>)
    // console.log(itemsList)

  return <ul>{itemsList}</ul>
}

export default ItemsList