import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Cards = (props) => {
    const [likes, setLikes] = useState(props.data.likes)


    const Handler = () => {
        setLikes(likes + 1)
        props.setTotal(props.total + 1)
    }

    return (
        <Card style={{ width: '18rem' }} className="cardsBody">
            <Card.Img className='cardsImage' variant="top" src={props.data.image_url} onClick={Handler} />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>
                    Likes: {likes}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}