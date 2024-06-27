'use client';
import Link from 'next/link'
import { useSelector } from 'react-redux';

function Nav() {
  const cart = useSelector((state) => state?.cart_items)

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:py-5">
        <Link href="/">
          <h1 className="flex no-underline items-center">
            <img height="32" width="32" alt="logo" className="h-auto w-8 mr-1 object-contain" src="/images/laptop.png" />
            <span className="text-xl font-primary font-bold tracking-tight pt-1">
              {'Computer Zone'}
            </span>
          </h1>
        </Link>
        <div>
          <Link
            href="/cart"
          >
            <div className='relative'>
              <img height="auto" width="auto" alt="logo" className="relative h-auto w-8 mr-1 object-contain" src="/images/store.png" />
              {
                cart === 0 ?
                  null
                  :
                  <div
                    className=" absolute left-0 top-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1.4 px-1 transform translate-x-7 -translate-y-3"
                  >
                    {cart?.length}
                  </div>
              }
            </div>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Nav;
