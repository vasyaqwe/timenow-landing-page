import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomeMain } from '../components/HomeMain'

export const Home = () => {
    return (
        <>
            <Header />
            <div aria-hidden="true" className="hidden sm:block absolute top-[0] z-[-1] w-[50%] right-0 bottom-[54%] lg:bottom-[10%] 
      bg-accent-400"></div>
            <HomeMain />
            <Footer />
        </>
    )
}
