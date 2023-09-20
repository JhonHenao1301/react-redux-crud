import photo from '../assets/photo.jpeg'
import pdf from '../assets/hv_me.pdf'

export default function Home () {
 return ( 
    <div className="grid gap-12 md:grid-flow-col md:py-12">
        <section className="flex flex-col gap-6">
            <h1>Front-End React Developer</h1>
            <h3>Hi, I'm Jhon Edinson Henao Puenayan. A passionate Front-End react developer based in Cali, Colombia</h3>
            <button className='border border-slate-600 py-2 rounded-lg'>
                <a href={pdf} target="_blank" rel="noopener noreferrer" download="hv_me.pdf" className='flex justify-center gap-4 font-bold'>
                    <ion-icon size="large" name="cloud-download-outline"></ion-icon>
                    CV
                </a>
            </button>
        </section>
        <section className='flex justify-center'>
            <img src={photo} className='rounded-full w-56 h-56' alt="" />
        </section>
    </div>
 )
}