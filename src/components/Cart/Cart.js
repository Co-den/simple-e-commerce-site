import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
//we want to output the total amount
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id);
     };
    const addItemHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    }
    
    const CartItems = <ul className={classes['cart-items']}>
       {cartCtx.items.map((item) =>(
           <CartItem 
               key={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onRemove={removeItemHandler.bind(null, item.id)}
               onAdd={addItemHandler.bind(null, item)} />
       ))};
    </ul>
    
    return (
        //we then pass that onClose props down to the buttons that are to carry out 
        //that function
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order &#8674;</button>}
            </div>
        </Modal>
    );
};

export default Cart;