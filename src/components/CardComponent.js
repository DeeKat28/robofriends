import React from 'react';
import Card from './Card';

const CardComponent = (props) => {
    return (
        props.robots.map((robot) => <Card key={robot.id} robot={robot} />)
    );
}

export default CardComponent;