import React from 'react';
import '@styles/OrderItem.scss';
import close from "@icons/icon_close.png"
import AppContext from '../context/AppContext';


const OrderItem = ({product, indexValue}) => {
	const {removeFromCart} =  React.useContext(AppContext);
	
	const handleRemote = index => {
		removeFromCart(index);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className='image-close' src={close} alt="close" onClick={() => handleRemote(indexValue)} />
		</div>
	);
}

export default OrderItem;
