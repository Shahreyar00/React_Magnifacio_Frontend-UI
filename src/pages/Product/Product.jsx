import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    console.log(id);

    const loading = false;
    const error = false;

    const images = [
        "https://images.pexels.com/photos/14257256/pexels-photo-14257256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2800159/pexels-photo-2800159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/11288118/pexels-photo-11288118.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]

    return (
        <div className="product">
            {error 
                ?"Something went wrong!" 
                :loading
                ?"Loading"
                : (
                <>
                    <div className="left">
                        <div className="images">
                            <img 
                                src={images[0]} 
                                alt="" 
                                onClick={(e)=>setSelectedImg(0)}
                            />
                            <img 
                                src={images[1]} 
                                alt="" 
                                onClick={(e)=>setSelectedImg(1)}
                            />
                            <img 
                                src={images[2]} 
                                alt="" 
                                onClick={(e)=>setSelectedImg(2)}
                            />
                        </div>
                        <div className="mainImg">
                            <img 
                                src={images[selectedImg]}
                                alt="" 
                            />
                        </div>
                    </div>
                    <div className="right">
                        <h1>Summer style for the fashionista</h1>
                        <span className="price">$ 15</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam minus qui minima eos reiciendis! Cumque sequi sunt nemo ut.
                        </p>
                        <div className="quantity">
                            <button onClick={()=>setQuantity((prev)=>(prev===1?1:prev-1))}>-</button>
                            {quantity}
                            <button onClick={()=>setQuantity((prev)=>(prev+1))}>+</button>
                        </div>
                        <button
                            className="add"
                        >
                            <AddShoppingCartIcon /> ADD TO CART
                        </button>
                        <div className="links">
                            <div className="item">
                                <FavoriteBorderIcon /> ADD TO WISH LIST
                            </div>
                            <div className="item">
                                <BalanceIcon /> ADD TO COMPARE
                            </div>
                        </div>
                        <div className="info">
                            <span>Vendor: Magnifacio exclusive</span>
                            <span>Product Type: Summer Dress</span>
                            <span>Tag: Dress, Top, Women, T-Shirt</span>
                        </div>
                        <hr />
                        <div className="info">
                            <span>DESCRIPTION</span>
                            <hr />
                            <span>ADDITIONAL INFORMATION</span>
                            <hr />
                            <span>FAQ</span>
                            <hr />
                        </div>
                    </div>
                </>
                ) 
            }
        </div>
    );
};

export default Product;