import { CtaButton } from "./CtaButton"
import shield from '../assets/shield.svg'
import heroImg from '../assets/mockup.png'

export const Hero = () => {
    return (
        <section className='hero container mx-auto mt-9 grid sm:grid-cols-[45%_1fr] gap-9 '>
            <div className="px-4 self-center">
                <h1 className="text-primary-900 font-bold text-4xl lg:text-6xl">Post when your audience is most active.</h1>
                <p className="mt-3 text-secondary-700">With TimeNow, automatically schedule your posts on
                    Twitter, LinkedIn, and Instagram to post when your
                    followers are most active.</p>
                <div className="max-w-[315px] mt-4 flex items-center gap-8
                sm:flex-col sm:gap-5 mr-5 sm:max-w-fit lg:flex-row lg:gap-9">
                    <CtaButton />
                    <a href="#" className="font-bold text-secondary-700 border-b-2 leading-tight
                     border-transparent hover:text-primary-400 hover:border-primary-400">View Demo</a>
                </div>
                <div className="mt-5 flex items-start gap-4">
                    <img src={shield} alt="" />
                    <div>
                        <p className="text-secondary-700 leading-tight sm:inline">TimeNow does not sell your data.</p>
                        <a className="text-secondary-700 font-bold border-b-2 leading-tight border-b-secondary-700
                        sm:ml-1 hover:border-0 hover:text-primary-400
                        "
                            href="#">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="bg-accent-400 sm:bg-transparent">
                <div className="pl-7 py-9 lg:pl-20">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </section >
    )
}
