import logo from '../assets/logo.svg'
import { CtaButton } from './CtaButton'

export const Footer = () => {

    const navigation = [
        {
            title: 'Product',
            links: [
                'Homepage',
                'Pricing',
                'Features'
            ]
        },
        {
            title: 'Help',
            links: [
                'Live Chat',
                'Send Email',
                'FAQ'
            ]
        },
        {
            title: 'Company',
            links: [
                'About',
                'Customers',
                'Blog'
            ]
        },
    ]

    return (
        <footer className="container mx-auto mt-auto px-4 py-8 md:py-12 lg:py-16">
            <div><img src={logo} alt="TimeNow logo" /></div>
            <div className='mt-6 flex flex-col gap-8 lg:flex-row lg:justify-between max-w-[1200px]'>
                <div className=' flex flex-wrap gap-y-6 gap-x-20'>
                    {navigation.map(item => (
                        <div key={item.title}>
                            <h4 className='text-lg font-bold mb-3'>{item.title}</h4>
                            <ul className='grid gap-2'>
                                {item.links.map(link => <li key={link}><a className='text-secondary-700 border-b-2 border-transparent hover:border-neutral-700 leading-tight' href="#">{link}</a></li>)}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='flex-1 ml-auto max-w-[390px]'>
                    <h4 className='text-lg font-bold mb-3'>Try TweetNow</h4>
                    <div className='relative '>
                        <input className='border-2 w-full border-neutral-400 rounded-md p-5 
                        focus:outline-none focus:border-primary-900 ' type="email" placeholder='Email Address' />
                        <CtaButton className={'absolute right-[6px] top-[50%] translate-y-[-50%]'} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
