import ProductImage from '@/components/ProductImage'
import ProductDetails from '@/components/ProductDetails'

function ProductSection({ productData, isLoading }) {
  const { images, image } = productData || {}

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-10 max-w-6xl w-11/12 mx-auto">
      {isLoading ? (
        <h1 className="leading-relaxed font-primary font-extrabold text-3xl text-center text-palette-primary mt-4 py-2 sm:py-4">
          {'waiting...!'}
        </h1>) : (
        <>
          <ProductImage images={images} mainImage={image} />
          <ProductDetails productData={productData} />
        </>)
      }
    </div >
  )
}

export default ProductSection
