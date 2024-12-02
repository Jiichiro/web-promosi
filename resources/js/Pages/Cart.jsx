import React from 'react';
import Navbar from '@/components/Navbar';
import { Trash2 } from 'lucide-react';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    console.log(items);
    
    const dispatch = useDispatch()
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div className="flex flex-col bg-gray-900 text-white min-h-screen">
            <Navbar />
            <div className="py-4 border-b border-gray-700">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>
                </div>
            </div>

            <main className="flex-1 container mx-auto py-8">
                {items.length > 0 ? items.map((item, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 flex w-full">
                        <div>
                            <img src={item.imageUrl || "/api/placeholder/300/200"} alt={item.name} className="rounded-lg" />
                        </div>
                        <div className="ml-4 flex flex-col justify-between">
                            <h3 className="text-lg font-medium">{item.name}</h3>
                            <p className="text-gray-400">${item.price}</p>
                        </div>
                        <div className="ml-auto flex items-center space-x-2">
                            <button className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded" onClick={dispatch(decrement(item.id))}>-</button>
                            <span>{item.qty}</span>
                            <button className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded" onClick={dispatch(increment(item.id))}>+</button>
                        </div>
                        <Trash2 className='m-4' onClick={() => dispatch(removeFromCart(item.id))}/>
                    </div>
                )) : (
                    <p className="text-gray-400">Your cart is empty.</p>
                )}
            </main>

            <div className="bg-gray-800 py-4 border-t border-gray-700 mt-auto">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-gray-400">Total: {total}</p>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">Proceed to Checkout</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;