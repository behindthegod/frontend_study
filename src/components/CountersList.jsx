import React, {useState} from "react";
import {Counter} from "./Counter";

const CountersList = () => {
    const state = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]
    const [counters, setCounters] = useState(state);

    const handleDelete = (id) => {
        const newCounters = counters.filter((el) => el.id !== id);
        setCounters(newCounters);
    }

    const handleReset = () => {
        setCounters(state);
    }

    const handleIncrement = (id) => {
        const newCounters = counters.map(el => el.id === id ? {...el, value: el.value + 1} : el);
        setCounters(newCounters);
    }

    const handleDecrement = (id) => {
        const newCounters = counters.map(el => el.id === id ? {...el, value: el.value - 1} : el);
        setCounters(newCounters);
    }

    return (
        <>
            {
                counters.map((count) =>
                    <Counter onDelete={handleDelete}
                             onIncrement={handleIncrement}
                             onDecrement={handleDecrement}
                             key={count.id}
                             {...count}
                    />)
            }
            <button className="btn btn-primary btn-sm m-2"
                    onClick={handleReset}>Сброс</button>
        </>
    )
}

export default CountersList;