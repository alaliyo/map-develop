import { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
import mapImg from '../../imgs/1000_F_315445649_00DrF55vABpPacVw63X6Cqq00UWNMWqD.jpg'
import { cardsDb } from '../../db';

function Cords() {
    const [heartChang, setHeartChang] = useState(false);

    const heartClick = () => {
        setHeartChang(!heartChang)
    }

    return(
        <CardsBox>
            {cardsDb.map(obj => (
                <CardShadow>
                <Card key={obj.id} style={{ width: '230px' }}>
                <Card.Img variant="top" src={mapImg} />
                <Card.Body>
                    <CardTextBox>
                        <Card.Title>{obj.title}</Card.Title>
                    </CardTextBox>
                    <TextBox>
                        <div>
                            <CardText1>조회수: {obj.views}</CardText1>
                            <br />
                            <CardText1 onClick={heartClick}>{heartChang ? '❤' : '🤍'} {obj.heartCount}</CardText1>
                        </div>
                        <div>
                            <CardText2>{obj.userId}</CardText2>
                            <br />
                            <CardText2>{obj.postTime}</CardText2>
                        </div>
                    </TextBox>
                </Card.Body>
                </Card>
            </CardShadow>
            ))}
        </CardsBox>
    );
}

export default Cords;

const CardsBox = styled.div`
    width: 70%;
    margin: 20px auto;
    display: grid;
    gap: 50px 0;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: none;
    }
`;

const CardShadow = styled.div`
    padding: 10px;
    width: 250px;
    box-shadow: 1px 1px 5px 1px #bdc3c7;
    border-radius: 5px;
    &:hover{
        box-shadow: 1px 1px 5px 1px #adadad;
        transition: .2s;
    }

`;

const CardTextBox = styled.div`
    height: 80px;
`

const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CardText1 = styled.span`
    font-weight: 900;
    font-size: 15px;
    &:nth-child(3){
        cursor: pointer;
    }
`;

const CardText2 = styled.span`
    color: gray;
    font-weight: 900;
    font-size: 15px;
`;