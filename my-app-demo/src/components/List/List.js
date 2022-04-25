import React, { useEffect, useState } from 'react';

function List({filter}){
    const[Fruits, setFruits] = useState(
        ['Apple', 'Orange', 'Lemon', "Melon", "Mango"]
    );
    const [_filter, setFilter] = useState(filter);

    useEffect((_filter) => {
        const tempFruits = Fruits.filter((fruit) => {fruit.includes(_filter)});
        tempFruits.map((fruit) => {return <li>{fruit}</li>;})
    }, [_filter])

    return(
        <div>
            <ul>
                {Fruits}
            </ul>
        </div>
    );
}

export default List;