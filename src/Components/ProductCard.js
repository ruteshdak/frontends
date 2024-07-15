import React from 'react';
const ProductCard = ({ product }) => {
    return (
        <div className="card border-1 border-gray-100 p-4 w-70 rounded-lg">
            <div className="p-3 w-full h-60 overflow-hidden bg-slate-100 rounded-md">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-full object-contain rounded-lg"
                />
            </div>
            <div className="mt-2 text-center">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-700 font-medium">{product.description}</p>
                <p className="text-gray-500 font-bold">Price: ₹{product.price}</p>
                <button className="bg-blue-200 border-black border-1 p-2 m-2 rounded-xl hover:bg-blue-500">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
