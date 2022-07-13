import React from "react";


export const Counter = ({value, name, onIncrement, onDecrement, id, onDelete}) => {
    const formatValue = () => {
        return value === 0 ? 'empty' : value;
    }

    const getBageClasses = () => {
        let classes = 'badge m-3 ';
        classes += value === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    }



    return (
        <div>
            <span>{name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button className='btn btn-primary btn-sm m-3' onClick={()=>onIncrement(id)}>+</button>
            <button className='btn btn-primary btn-sm m-3' onClick={()=>onDecrement(id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>onDelete(id)}>delete</button>
        </div>
    )
}