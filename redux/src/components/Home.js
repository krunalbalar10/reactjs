import React from 'react';

function Home(props) {
    console.log(props.data.cardData)
    return (
        <>
            <div className="container mt-5">
                <div className='d-flex' style={{ position: 'absolute', marginLeft: '1100px', top: 30 }}>
                    <span className=''>{props.data.cardData.length}</span>
                    <span class="material-symbols-outlined fs-1">
                        add_shopping_cart
                    </span>
                </div>
                <div className='m-4'>
                    <h1>Home Component</h1>
                </div>

                <div className="card bordered shadow" style={{ width: '18rem' }}>

                    <img src="https://picsum.photos/200/200" className="" alt="Card Image" />

                    <div className="card-body">
                        <span className="card-title h4 m-4">I-Phone</span>
                        <span className="card-text">Price: $1000.00</span>
                        <a href="#" onClick={() => props.addToCartHandler({price: 1000 , name: 'i Phone 14'})} className="btn btn-primary m-3">Add to Cart</a>
                        <a href="#" onClick={() => props.removeToCartHandler({price: 1000 , name: 'i Phone 14'})} className="btn btn-secondary m-3">Remove to Cart</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;
