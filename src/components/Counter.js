import React, {useState} from "react";


export const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [tags, setTags] = useState(['tag1','tag2','tag3']);

    const formatCount = () => {
        return counter === 0 ? 'empty' : counter;
    }

    const getBageClasses = () => {
        let classes = 'badge m-3 ';
        classes += counter === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    }

    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
    }
    const handleTagChange = (id) => {
        setTags(prevState => prevState.filter(tag=>tag !== id))
        console.log(id)
    }
    const renderTags = () => {
        return tags.map(tag => (<li className='btn btn-primary btn-sm m-2' key={tag}
                                    onClick={() => handleTagChange(tag)}>{tag}</li>))
    }


    return (
        tags.length !== 0
        ?
        <>
            <ul>
                {renderTags()}
            </ul>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button className='btn btn-primary btn-sm m-3' onClick={handleIncrement}>+</button>
            <button className='btn btn-primary btn-sm m-3' onClick={handleDecrement}>-</button>
        </> : 'No tags'
    )
}