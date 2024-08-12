import { useEffect, useState } from "react";
import data from "../data/productos.json";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer = () =>{

    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=> {
        new Promise((resolve,reject) => setTimeout(resolve(data.items),2000))
        .then((response)=> {
                const finded = response.find((i) => i.id === Number(id));
                setItems(finded)
            }
        )
        .finally(()=> setLoading(false))
    },[id])
    if (loading) return <Spinner animation="grow" />
    console.log(items);

    return (
            
        <Container style={{ display: "ruby-text"}}>
            <h1 style={{ marginBottom: '40px'}}>{items.name}</h1>

                <Card className="text-center">
                    <Card.Body>
                        <Card.Img variant="top" src={items.image} style={{ width: '30%', height: "30%"}}/>
                        <Card.Text>
                        {items.description}
                        </Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">${items.price} us</Card.Footer>
                </Card>
            
        </Container>
    
)
    
}



