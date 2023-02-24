import React from 'react'
import { CtaButton } from './CtaButton'

export const Features = () => {
    return (
        <section className='bg-accent-100 py-9 lg:py-16'>
            <div className="container mx-auto grid gap-9 lg:grid-cols-2 lg:gap-24">
                <div className='px-4'>
                    <p className='text-primary-400 font-bold'>Unified Dashboard</p>
                    <h3 className='text-accent-700 font-bold text-3xl lg:text-4xl'>Customizable
                        dashboard for all
                        platforms.</h3>
                    <p className='text-secondary-700 mt-3'>Use Twitter and Instagram but not
                        LinkedIn? You can customize your
                        dashboard to your liking. You can even
                        schedule the same post to individual
                        platforms instead of all platforms.</p>
                    <div className='mt-4'>
                        <CtaButton />
                    </div>
                </div>
                <div className='px-4'>
                    <p className='text-primary-400 font-bold'>Enhanced Analytics</p>
                    <h3 className='text-accent-700 font-bold text-3xl lg:text-4xl'>Real-time data that
                        tells you everything.</h3>
                    <p className='text-secondary-700 mt-3'>Get detailed reports of what's working and
                        what isn't. Engagement rates, impressions,
                        views, and much more data is available to
                        you through our in-depth dashboard tool.</p>
                    <div className='mt-4'>
                        <a href="#" className="font-bold text-secondary-700 border-b-2 border-transparent leading-tight
                        hover:text-primary-400 hover:border-primary-400">View Live Demo &#8594;</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
