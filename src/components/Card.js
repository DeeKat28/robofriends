import React from 'react';

const Card = (props) => {
    const { id, name, email } = props.robot;
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt="users" src={`https://robohash.org/${id}?size=200x200`} />
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    );
}

export default Card;