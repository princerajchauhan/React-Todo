import React from "react";
import './ItemsTodo.css'

const ItemsTodo = (props) => {

    return (
        <>
            <div className="myStyle">
                <i className="fa-sharp fa-solid fa-circle-xmark" onClick={()=>props.delFun(props.id)}/>
                <li>{props.item}</li>
            </div>
        </>
    )
}

export default ItemsTodo