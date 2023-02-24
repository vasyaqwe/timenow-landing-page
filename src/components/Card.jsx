import checkmark from '../assets/checkmark.svg'
import { CtaButton } from './CtaButton'

export const Card = ({ price, description, pros, className }) => {
    return (
        <article className={`grid lg:h-fit auto-rows-[max-content_max-content_max-content_1fr] gap-3 border border-neutral-400 rounded-md p-6 ${className}`}>
            <h2 className='h-fit'>
                <strong className='font-bold text-4xl'>${price}</strong>
                <span className='text-neutral-700 lg:text-lg'>/mo</span>
            </h2>
            <p className='text-secondary-700 border-b pb-6 border-neutral-400 '>{description}</p>
            <ul className='grid gap-3 my-3'>
                {pros.map((pro, idx) => <li key={idx} className="text-secondary-700 flex items-center gap-3">
                    <img src={checkmark} alt="checkmark" />
                    {pro}
                </li>)}
            </ul>
            <CtaButton className={'text-center self-end'} text={'Subscribe Now'} />
        </article>
    )
}
