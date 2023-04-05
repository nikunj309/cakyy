import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
// import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages,
                loading: false,
            };
        case 'CREATE_REQUEST':
            return { ...state, loading: true };
        case 'CREATE_SUCCESS':
            return { ...state, loading: false };
        case 'CREATE_FAIL':
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
export default function CreateProductScreen() {
    const navigate = useNavigate()
    const { search } = useLocation();
    const params = useParams(); // /product/:id
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const { id: productId } = params;


    const [{ loading, error,products,
        pages, }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
    });

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');

    const sp = new URLSearchParams(search);
    const page = sp.get('page') || 1;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const createHandeler = async (e) => {
        e.preventDefault();
        try {
            dispatch({ type: 'CREATE_REQUEST' });
            const { data } =  await axios.post(
                `http://localhost:8000/api/products`,
                {
                    _id: productId,
                    name,
                    slug,
                    price,
                    image,
                    category,
                    // brand,
                    countInStock,
                    description,
                },
                {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                }
            );
            // ctxDispatch({ type: 'CREATE_SUCCESS', payload: data });
            // localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('product created successfully');
             dispatch({ type: 'CREATE_SUCCESS' });
            // navigate(`/admin/product/${data.product._id}`);
        } catch (err) {
            toast.error(getError(err));
            dispatch({
                     type: 'CREATE_FAIL',
                   });
        };

    }
        // useEffect(() => {
        //     if (userInfo) {
        //         navigate(redirect);
        //     }
        // }, [navigate,redirect, userInfo]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const { data } = await axios.get(`http://localhost:8000/api/products/admin?page=${page} `, {
                        headers: { Authorization: `Bearer ${userInfo.token}` },
                    });
    
                    dispatch({ type: 'FETCH_SUCCESS', payload: data });
                } catch (err) { }
            };
           
                fetchData();
            
        }, [page, userInfo]);


        return (
            <Container className="small-container">
                <Helmet>
                <title>Create Product</title>
            </Helmet>
                <h1>Create Product</h1>

                {/* {loading ? (
                    "loading..."
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : ( */}
                    <Form onSubmit={createHandeler}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="slug">
                            <Form.Label>Slug</Form.Label>
                            <Form.Control
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Image File</Form.Label>
                            <Form.Control
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="brand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                required
                            />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="countInStock">
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div className="mb-3">
                            <Button  type="submit">
                                Update
                            </Button>
                            {/* {loadingUpdate && "loading..."} */}
                        </div>
                    </Form>
                 {/* )}  */}
            </Container>
        );
    }
