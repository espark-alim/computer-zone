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
      <ProductListings products={laptops} />
    </>
  )
}
