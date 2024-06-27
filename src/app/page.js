'use client';
import ProductListings from "@/components/ProductListings";
import StoreHeading from "@/components/StoreHeading";
import { useQuery } from '@tanstack/react-query';
export default function Home() {

  const { isLoading, error, data: laptops } = useQuery({
    queryKey: ['laptops'],
    queryFn: () =>
      fetch('http://localhost:3000/api/laptop/')
        .then((res) => res.json()),
  });
  return (
    <>
      <StoreHeading />
      {isLoading ? (
        <h1 className="leading-relaxed font-primary font-extrabold text-2xl text-center text-palette-primary mt-4 py-2 sm:py-4">
          {'waiting...!'}
        </h1>) : (
        <>
          <ProductListings products={laptops} />
        </>
      )}
    </>
  )
}
