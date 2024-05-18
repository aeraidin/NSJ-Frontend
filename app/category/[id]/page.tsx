import CategoryLayout from '@/components/Layout/CategoryLayout';
import React from 'react'

function page({
    params,
}: {
    params: { id: string };
}) {
    return (
        <CategoryLayout serviceId={Number(params.id)} />
    )
}

export default page