import { useState } from 'react';
function UserForm() {
    const [data, setData] = useState(
        {
            username: 'anonymous',
            password: 'any'
        }
    );

    const [form, setForm] = useState(
        {
            username: '',
            password: ''
        }
    )

    const handlerSubmit = (e) => {
        e.preventDefault();
        setForm({
            username: data.username,
            password: data.password
        })
        console.log(`data.username is ${data.username}, data.password is ${data.password}`)
    }

    const handlerChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        console.log(`data.username is ${data.username}, data.password is ${data.password}`)
    }

    return(
        <div>
            <form onSubmit={handlerSubmit}>
                <label>Username: </label>
                <input type="text" onChange={handlerChange} name="username"></input>
                <label>Password: </label>
                <input type="password" onChange={handlerChange} name="password"></input>
                <p>You've input username is {data.username}, and password is {data.password}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;