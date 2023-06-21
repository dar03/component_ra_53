import React from "react";
import '../css/ShopItem.css'


function ShopItem({ item, key }) {
    console.log('ShopCard ');
    return (
        <div className='shopItem'>
            <div className='wrap_img'>
                <img src={item.img} alt='' />
            </div>
            <h2 className='heading'>{item.name}</h2>
            <p>{item.color}</p>
            <span className='bodyCart_price'>${item.price}</span>
            <button className='buttonCart'>Add to Cart</button>
        </div>
    )
}
export default ShopItem