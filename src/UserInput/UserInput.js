import React from 'react';

const UserInput = (props) => {
    return(
        <form>
            <label htmlFor={props.key}>{props.liftType} </label>
            <input id={props.key} onChange={props.change}></input>
        </form>
    );
}

export default UserInput;