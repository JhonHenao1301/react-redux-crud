import Lottie from "lottie-react"
import animationData from "../assets/animation_lmo5nfny.json"

export default function About () {
 return ( 
    <div className="flex flex-col gap-8">
        <h1 className="text-center">About</h1>
        <div className="grid grid-cols-1 justify-center gap-12 md:grid-cols-2 md:gap-12">
            <section className="flex justify-center md:max-w-fit">
                <Lottie animationData={animationData}></Lottie>
            </section>
            <section className="flex flex-wrap content-center">
                <h3>
                    I am a software developer focused on the front-end side of web development, my skills allow me to create websites of excellent quality and with the best user experience. 
                    Graduated as a systems technologist I am ready to bring value to the team and company where I work.
                </h3>
            </section>
        </div>
    </div>
 )
}