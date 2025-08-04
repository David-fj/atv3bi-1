import {useState} from 'react'

function Button(props)
{
    const [sum, setSum] = useState(0);
    return(
        <>
        <button onClick={() => {
            setSum(props.val1 + props.val2);
        }}>Clique-me</button>
        <span>{sum}</span>
        </>
    )
}

export default Button;