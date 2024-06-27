'use client';
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Price from '@/components/Price'
import { useDispatch } from 'react-redux';
import { removeFromCard, updateQuantity } from '@/redux/slices/cartSlice';

function CartTable({ cart }) {
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setCartItems(cart)
  }, [cart])

  function updateItem(laptopId, size) {
    dispatch(removeFromCard({ laptopId, size }))
  }

  function handleQuantityChange(laptopId, size, quantity) {
    dispatch(updateQuantity({ laptopId, size, quantity: parseInt(quantity) }))
  }

  return (
    <div className="min-h-auto max-w-5xl my-4 sm:my-8 mx-auto w-full max-h-80 overflow-y-auto">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4">Size</th>
            <th className="font-primary font-normal px-6 py-4">Quantity</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
            <th className="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
          {cartItems.map(item => (
            <tr key={item.variantId} className="text-sm sm:text-base text-gray-600 text-center">
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <img
                  src={item?.image}
                  alt={item?.image}
                  height={64}
                  width={64}
                  className={`hidden sm:inline-flex`}
                />
                <Link className="pt-1 hover:text-palette-dark" href={`/product/${item?.brand || '#'}`}>
                  {item?.brand}, {item?.model}
                </Link>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <h6>{item?.size}</h6>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item?.quantity}
                  onChange={(e) => handleQuantityChange(item.laptopId, item.size, e.target.value)}
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price
                  currency="$ "
                  num={item?.price}
                  numSize="text-lg"
                />
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  className=""
                  onClick={() => updateItem(item.laptopId, item.size)}
                >
                  cancel
                </button>
              </td>
            </tr>
          ))}
          {
            subtotal === 0 ?
              null
              :
              <tr className="text-center">
                <td></td>
                <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
                <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <Price
                    currency="$"
                    num={subtotal}
                    numSize="text-xl"
                  />
                </td>
                <td></td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default CartTable
