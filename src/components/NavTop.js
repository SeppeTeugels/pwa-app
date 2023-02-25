import {Container, Nav, Navbar} from "react-bootstrap";
import {FaShoppingBasket} from 'react-icons/fa';


export function NavTop(props) {
    const {cart} = props;
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand to={"#"}>GameCon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={"#"}>Stands</Nav.Link>
                        <Nav.Link to={"#"}>Locations</Nav.Link>
                        <Nav.Link to={"#"}>Products</Nav.Link>
                    </Nav>
                    <FaShoppingBasket style={{color: 'black', width: "1.5rem", height: "1.5rem", position: "relative"}}>

                    </FaShoppingBasket>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                         style={{
                             color: "black",
                             width: "1rem",
                             height: "1rem",
                             position: "absolute",
                             bottom: 7,
                             right: 165
                         }}>{cart.length}
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}