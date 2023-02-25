import {collection,orderBy, query} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Products} from "../components/Products";
import {Container, Form} from "react-bootstrap";
import {useState} from "react";

const productConverter = {
    toFirestore: undefined, //we will do this later
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export function ShopPage(props) {
    const collectionRef = collection(firestoreDB, 'Products').withConverter(productConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    const [search, setSearch] = useState("");
    const {cart, setCart} = props;

    console.log({values, loading, error});
    return (
        <Container className='p-1'>
            <div className="m-3">
                <Form >
                    <Form.Control style={{border:"solid black 2px"}} placeholder="Search products"
                                  value={search} onChange={e => setSearch((e.target.value))}/>
                </Form>
            </div>
            <Products onSelect={setCart} cart={cart} products={search ? values.filter(m => m.name.toUpperCase().includes(search.toUpperCase())) : values}/>
        </Container>
    );
}