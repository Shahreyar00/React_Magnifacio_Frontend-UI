import React from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const products = [
        {
            id:1,
            img:"https://images.pexels.com/photos/11288118/pexels-photo-11288118.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1007017/pexels-photo-1007017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium temporibus unde sit, laudantium atque incidunt, harum voluptates blanditiis.",
            oldPrice:19,
            price:12,
            quantity: 1,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/14257256/pexels-photo-14257256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/2800159/pexels-photo-2800159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title:"Top",
            isNew:true,
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium temporibus unde sit, laudantium atque incidunt, harum voluptates blanditiis.",
            oldPrice:19,
            price:15,
            quantity: 2,
        },
    ]

    const totalPrice = () => {
        let total = 0;
        products.forEach((item)=>{
            total+=item.quantity*item.price;
        });
        return total.toFixed(2);
    };

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map((item)=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1> 
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price} = {item.quantity*item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon 
                        className="delete"
                        onClick={()=>{}}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() =>{}}>
                Reset Cart
            </span>
        </div>
    )
}

export default Cart