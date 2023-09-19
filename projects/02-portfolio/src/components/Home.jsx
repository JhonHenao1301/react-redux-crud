
import photo from '../assets/photo.jpeg'

export default function Home () {
 return ( 
    <div className="grid gap-12 md:grid-flow-col md:py-12">
        <section className="flex flex-col gap-4">
            <h1>Front-End React Developer</h1>
            <h3>Hi, I'm Jhon Edinson Henao Puenayan. A passionate Front-End react developer based in Cali, Colombia</h3>
            {/* <div className='flex gap-4'>
            </div> */}
        </section>
        <section className='flex justify-center'>
            <img src={photo} className='rounded-full w-56 h-56' alt="" />
        </section>
    </div>
 )
}