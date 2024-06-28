'use client';
import { useState } from 'react'
import { addToCard } from '@/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

function ProductForm({ id, brand, model, price, mainImg, sizes, product }) {
  const [quantity, setQuantity] = useState(0)
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch()

  function handleSizeChange(e) {
    setSelectedSize(e === 'select' ? '' : e);
  }

  function handleAddToCart() {
    if (quantity > 0 || sizes && selectedSize) {
      dispatch(addToCard({ id: id, brand: brand, price: price, model: model, image: mainImg, quantity: quantity, size: selectedSize, product: product }));
      setQuantity(0);
      setSelectedSize('select');
    }
  }

  function updateQuantity(e) {
    if (e === '') {
      setQuantity('')
    } else {
      setQuantity(Math.floor(e))
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base">Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        <div className="flex flex-col items-start space-y-1 flex-grow">
          {sizes && (
            <>
              <label className="text-gray-500 text-base">Size</label>
              <select
                id="size-selector"
                name="size-selector"
                onChange={(event) => handleSizeChange(event.target.value)}
                value={selectedSize}
                className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
              >
                <option value="select">Select</option>
                {sizes?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
      <button
        disabled={quantity < 1 || sizes && selectedSize === '' ? true : false}
        className={'w-full p-2 bg-amber-300 mt-5 rounded disabled:bg-slate-400'}
        aria-label="cart-button"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  )
}

export default ProductForm
