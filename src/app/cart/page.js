'use client';
import BackToProductButton from '@/components/BackToProductButton'
import CartTable from '@/components/CartTable'
import PageTitle from '@/components/PageTitle'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const cart = useSelector((state) => state?.cart_items)
    return (
        <>
            <div className="container mb-20 mx-auto min-h-auto">
                <PageTitle text="Your Cart" />
                <CartTable cart={cart} />
                <div className="max-w-sm mx-auto space-y-4 px-2">
                    <BackToProductButton />
                </div>
            </div>
        </>
    )
}

export default page
