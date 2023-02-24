import { Features } from "./Features"
import { Hero } from "./Hero"
import { People } from "./People"

export const HomeMain = () => {
    return (
        <main className="flex flex-col gap-10">
            <Hero />
            <People />
            <Features />
        </main>
    )
}
