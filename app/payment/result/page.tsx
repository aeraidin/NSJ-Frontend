"use client"
import MainLayout from '@/components/Layout/MainLayout';
import { VerifyPayment } from '@/util/api/Cart/VerifyPayment';
import { useMutation } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

function Page({
    searchParams,
}: {
    searchParams: { Authority: string, Status: string };
}) {
    if (!searchParams.Authority || !searchParams.Status) {
        redirect("/");
    }
    const Verfiy = useMutation({
        mutationFn: VerifyPayment, onSuccess(data, variables, context) {
            console.log(data);
        },
        onError(error, variables, context) {
            redirect("/");
        },
    })
    useEffect(() => {
        if (searchParams.Authority) {
            Verfiy.mutate(searchParams.Authority)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <MainLayout>Page</MainLayout>
    )
}

export default Page