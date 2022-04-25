import React, { useState } from 'react';
import List from '../List/List';

function Test(){

    const [_filter, setFilter] = useState("")
    const changeFilter = (e) => {
        setFilter(e.target.value);
    }
    const submitFilter = () => {
        console.log(_filter);
    }

    return(
        <div>
            <form onSubmit={submitFilter}>
                <input type="text" onChange={changeFilter} />
                <List filter={_filter} /> 
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Test;