import person1 from '../assets/UA1.png'
import person2 from '../assets/UA2.png'
import person3 from '../assets/UA3.png'
import person4 from '../assets/UA4.png'
import person5 from '../assets/UA5.png'

export const People = () => {
    const people = [
        person1,
        person2,
        person3,
        person4,
        person5,
        person2,
        person4,
        person2,
    ]
    return (
        <section className='container mx-auto px-4 sm:mt-24 mb-12 grid sm:grid-cols-2 gap-4 sm:gap-y-8 sm:gap-x-5'>
            <h2 className='text-primary-900 font-bold text-3xl lg:text-4xl'>TimeNow is used by the most
                influential people.</h2>
            <div className="flex flex-wrap gap-2 lg:row-start-2">
                {people.map((person, idx) => <img className='max-w-[50px]' key={idx} src={person} />)}
            </div>
            <div className="sm:col-span-2 lg:col-start-2 lg:row-span-2 lg:max-w-[480px] lg:ml-16">
                <p className='text-secondary-700'>The most influential people on Facebook,
                    Twitter, and Instagram are using TweetNow
                    to schedule posts when their followers are
                    most active.</p>
                <p className='text-secondary-700 mt-6'>They generally receive 23% more
                    engagement than people who do not,</p>
            </div>
        </section>
    )
}
