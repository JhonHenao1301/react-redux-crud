import photo from '../assets/photo.jpeg'
import pdf from '../assets/hv_me.pdf'

export default function Home () {
 return ( 
    <div className="grid grid-col-2 gap-12 h-screen justify-center md:grid-flow-col md:justify-center xl:gap-24" id='home'>
        <section className='flex justify-center items-end md:items-center'>
            <img src={photo} className='rounded-full w-64 h-fit' alt="" />
        </section>
        <section className="flex flex-col gap-6 md:justify-center md:items-center">
            <h1 className='text-center'> Jhon Edinson Henao Puenayan</h1>
            <h2 className='text-center'>Front-end react developer</h2>
            <h3 className='text-center'>I build accessible and inclusive digital products for the web, always creating the best user experience.</h3>
            <button className='border border-slate-600 p-2 rounded-lg md:max-w-max md:px-4'> 
                <a href={pdf} target="_blank" rel="noopener noreferrer" download="hv_me.pdf" className='flex gap-4 font-bold'>
                    <ion-icon size="large" name="cloud-download-outline"></ion-icon>
                    CV
                </a>
            </button>
        </section>
    </div>
 )
}