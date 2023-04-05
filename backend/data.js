import bcrypt from "bcryptjs"
const data = {

    users: [
      {
        name: 'nikunj',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
      },
      {
        name: 'pranav',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
      },
    ],
    products: [
      {
        // _id:'1',
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        // _id:'2',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 250,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        // _id:'3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        // _id:'4',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;