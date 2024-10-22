const Container = () => {
    return ( 
        <main className="container">
            <div className="left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="buttons">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="icons">
                        <img src="/amazon.png" alt="amazon-logo" />
                        <img src="/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="/shoe_image.png" alt="shoe-image" />
            </div>
        </main>
    )
};

export default Container