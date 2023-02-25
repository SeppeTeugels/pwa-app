import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";



function Product(props) {
    const {product,addToOrder,cart} = props;
    if (!product) return;
    return (
        <Card className='m-2 p-0shadow-sm text-center' style={{width:"95%" , alignItems:"center"}}>
            <Card.Img variant="top" src={`images/${product.image}`} style={{height:"280px", width:"280px"}}/>
            <Card.Body>
                <Card.Title style={{color: "black"}}>{product.name}</Card.Title>
                <Card.Subtitle style={{color: "black"}}>{product.standName}</Card.Subtitle>
                <Card.Subtitle style={{color: "black"}}>€ {product.price}</Card.Subtitle>
                <Button style={{color: "white"}} variant="dark"  onClick={() => addToOrder(cart.concat({...product}))}>Order</Button>
            </Card.Body>
        </Card>
    );
}

Product.propTypes = {
    car: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
    })
}

export function Products(props) {
    const {products,onSelect,cart} = props;
    if (!products) return;
    return (
        <>
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", paddingBottom: "200px"}}>
                {products.map(a => <Product key={a.id} product={a} addToOrder={onSelect} cart={cart}/>)}
            </div>
        </>

    )
}