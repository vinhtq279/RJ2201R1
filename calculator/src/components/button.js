function Button(props){
    return(
        <>
        <input type="button" value={props.label} onClick={props.onClick} />
        </>
    )
}

export default Button;