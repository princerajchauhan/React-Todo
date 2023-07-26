import React, { useState } from 'react'
import './Todo.css'
import ItemsTodo from './ItemsTodo'

const ToDoList = () => {

    const [listItem, setListItem] = useState('')
    const [itemsArr, setItemsArr] = useState([])

    const inputItem = (event) => {
        setListItem(event.target.value)
    }

    const itemAdd = () => {
        if (listItem !== '') {
            itemsArr.push(listItem)
            setListItem('')
        }
    }

    const deleteItems = (id) => {
        setItemsArr((oldItems) => {
            return oldItems.filter((item, index) => index !== id)
        })
    }

    return (
        <>
            <div className="heroSection">
                <div className="centerDiv">
                    <h1>Todo List</h1>
                    <div className="inputBtn">
                        <input type="text" name="items" value={listItem} placeholder='Add a Item' onChange={inputItem} />
                        <button onClick={itemAdd}> + </button>
                    </div>
                    <ol>
                        {
                            itemsArr.map((item, index) => {
                                return <ItemsTodo item={item} key={index} id={index} delFun={deleteItems} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ToDoList