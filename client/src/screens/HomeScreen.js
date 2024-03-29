import { useEffect, useReducer } from 'react';
// import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
// import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function HomeScreen() {
    // const [products, setProducts] = useState([]);
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            //   const result = await axios.get('http://localhost:5000/api/products');
            //   setProducts(result.data);

            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('http://localhost:8000/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <Helmet>
                <title>Cakyy</title>
            </Helmet>
            <h1>Featured Products</h1>
            <div className="products">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>

                ) : (
                    
                    <Row>
                    {products.map((product) => (
                      <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                        <Product product={product}></Product>
                      </Col>
                    ))}
                  </Row>
                   ) }

            </div>
        </div>
    );
}
export default HomeScreen;