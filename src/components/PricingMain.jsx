import React, { useState } from 'react'
import { Card } from './Card'
import { Switch } from './Switch'

export const PricingMain = () => {
    const [billingYearly, setBillingYearly] = useState(false)
    const toggleBilling = () => setBillingYearly(prev => !prev)

    const plans = [
        {
            price: billingYearly ? 3 : 4,
            description: "Perfect plan if you're just starting out.",
            pros: [
                'LinkedIn Integration',
                'Twitter Integration',
                'Real-time Analytics',
            ]
        },
        {
            price: billingYearly ? 9 : 12,
            description: "Perfect plan if you're a heavy user of social media.",
            pros: [
                'LinkedIn Integration',
                'Twitter Integration',
                'Instagram Integration',
                'Real-time Analytics',
            ]
        },
        {
            price: billingYearly ? 5 : 7,
            description: "Perfect plan if you're just starting out.",
            pros: [
                'LinkedIn Integration',
                'Twitter Integration',
            ]
        },
    ]
    return (
        <main className='container mx-auto px-4'>
            <h1 className='font-bold text-4xl lg:text-6xl mt-14 text-center'>Flexible Plans for Everyone</h1>
            <p className='text-secondary-700 md:text-lg max-w-3xl mx-auto mt-4 text-center'>Our plans are made for everyone. Whether you're just starting out on social media, or
                have been on there for a long time, we have a plan that's right for you.</p>
            <div className='flex justify-center items-center gap-3 mt-6'>
                <p className={`text-secondary-700 md:text-lg ${!billingYearly ? 'font-semibold' : ''}`}>Billed Monthly</p>
                <Switch on={!billingYearly} toggle={toggleBilling} />
                <p className={`text-secondary-700 md:text-lg ${billingYearly ? 'font-semibold' : ''}`}>Billed Yearly</p>
            </div>
            <div className='mt-9 md:mt-16 grid gap-8 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3'>
                {plans.map((plan, idx) => <Card key={plan.price} className={idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''} {...plan} />)}
            </div>
        </main>
    )
}
