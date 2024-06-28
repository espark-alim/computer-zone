import BackToProductButton from '@/components/BackToProductButton'
import ProductInfo from '@/components/ProductInfo'
import ProductForm from '@/components/ProductForm'

function ProductDetails({ productData }) {

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo
        title={productData?.brand}
        description={productData?.description}
        price={productData?.price}
      />
      <ProductForm
        id={productData?.id}
        brand={productData?.brand}
        model={productData?.model}
        price={productData?.price}
        mainImg={productData?.image}
        sizes={productData?.sizes}
        product={productData?.product}
      />
    </div>
  )
}

export default ProductDetails
