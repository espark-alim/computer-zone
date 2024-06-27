'use client';
import { useState } from 'react'
import Image from 'next/image'

function ProductImage({ images, mainImage }) {
  const [mainImg, setMainImg] = useState('')

  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-96">
        <Image
          src={mainImg !== '' ? mainImg : mainImage}
          alt={mainImage}
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        {images && (
          <>
            <div
              style={{ scrollBehavior: "smooth" }}
              className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
            >
              {
                images?.map((imgItem, index) => (
                  <button
                    key={index}
                    className="relative w-40 h-32 flex-shrink-0 rounded-sm "
                    onClick={() => setMainImg(imgItem)}
                  >
                    <Image
                      src={imgItem}
                      alt={imgItem}
                      layout="fill"
                    />
                  </button>
                ))
              }
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductImage
