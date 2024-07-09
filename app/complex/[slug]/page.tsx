import CategoryLayout from '@/components/Layout/CategoryLayout';
import React from 'react'

function page({
    params,
}: {
    params: { slug: string };
}) {
    const parts = params.slug.split('-');
    const lastItem = parts[parts.length - 1];
    const allExceptLast = parts.slice(0, -1).join(' ');

    return (
        <CategoryLayout sportComplexName={decodeURIComponent(allExceptLast)} sportComplexId={Number(lastItem)} />
    )
}

export default page