'use client';
import React from 'react'
import ProductSection from '@/components/ProductSection';
import { useQuery } from '@tanstack/react-query';

const page = ({ params }) => {
    const { product } = params
    const { isLoading, data: single_data } = useQuery({
        queryKey: ['single'],
        queryFn: () =>
            fetch(`http://localhost:3000/api/laptop/${product}`)
                .then((res) => res.json()),
    });

    return (
        <>
            <ProductSection productData={single_data} isLoading={isLoading} />
        </>
    )
}

export default page;
