import photo from '../assets/photo.jpeg'
import pdf from '../assets/hv_me.pdf'

export default function Home () {
 return ( 
    <div className="px-20 md:px-24 lg:px-4 md:grid-flow-col md:justify-center xl:gap-24" id='home'>
        <section className='flex justify-center items-end md:items-center'>
            <img src={photo} className='rounded-full w-48 h-fit z-10' alt="" />
        </section>
        <section className="flex flex-col gap-6 md:justify-center md:items-center z-10">
            <h1 className='text-center'> Jhon Edinson Henao Puenayan</h1>
            <h2 className='text-center'>Front-end react developer</h2>
            <h3 className='text-center'>
                I build accessible and inclusive digital products for the web, always creating the best user experience.
            </h3>
            <button className='flex justify-center border border-slate-600 p-2 rounded-lg md:max-w-max md:px-4 dark:border-slate-50'> 
                <a href={pdf} target="_blank" rel="noopener noreferrer" download="hv_me.pdf" className='flex gap-4 font-bold'>
                    <ion-icon size="large" name="cloud-download-outline"></ion-icon>
                    CV
                </a>
            </button>
        </section>
    </div>
 )
}