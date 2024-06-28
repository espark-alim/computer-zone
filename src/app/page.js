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

  const { data: desktop } = useQuery({
    queryKey: ['desktop'],
    queryFn: () =>
      fetch('http://localhost:3000/api/desktop/')
        .then((res) => res.json()),
  });

  const { data: led } = useQuery({
    queryKey: ['led'],
    queryFn: () =>
      fetch('http://localhost:3000/api/led/')
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
          <h1 className="font-primary font-extrabold text-2xl underline text-center text-palette-primary mt-4 py-2 sm:py-4">
            {'Laptops'}
          </h1>
          <ProductListings products={laptops} />
          <h1 className="font-primary font-extrabold text-2xl underline text-center text-palette-primary mt-4 py-2 sm:py-4">
            {'Desktop'}
          </h1>
          <ProductListings products={desktop} />
          <h1 className="font-primary font-extrabold text-2xl underline text-center text-palette-primary mt-4 py-2 sm:py-4">
            {'Leds'}
          </h1>
          <ProductListings products={led} />
        </>
      )}
    </>
  )
}
