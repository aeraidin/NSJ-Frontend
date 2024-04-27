import GetRecLis from '@/util/hook/GetRecLis';
import React from 'react'

async function RecomendedList() {
    const data = await GetRecLis()
    // console.log('====================================');
    // console.log(data.value.list);
    // console.log('====================================');
    return (
        <div className='Container'>
            <h1>پیشنهاد های ویژه</h1>
        </div>
    )
}

export default RecomendedList