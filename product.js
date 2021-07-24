import React, {useState} from 'react'

export default function product(props){
return (
    <div>
        <p>{props.count}</p>
        <button onClick={props.handleClick}>increase</button>
<button onClick={props.handleClick2}>decrease</button>
</div>

);
}
