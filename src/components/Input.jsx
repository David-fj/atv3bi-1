function Input(props)
{
    return (
        <>
        <input type="number" onChange={(e) => {
            props.onChange(Number(e.target.value));
        }}/>
        </>
    );
}

export default Input;