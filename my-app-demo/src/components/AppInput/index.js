import react from 'react'

function AppInput(props){
    const { type, value, onChangeCallback, ...rest } = props;
    return (
        <div>
            <input type={type} value={value} onChange={onChangeCallback} {...rest}/>
        </div>
    );
}

export default AppInput;
