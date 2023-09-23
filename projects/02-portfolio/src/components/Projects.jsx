// import { repos } from '../data/ReposData.json'
import { useFetch } from '../hooks/useFetch'

export default function Projects () {
    const { data, isLoading } = useFetch()
    if(isLoading) {
        return <div className='flex flex-col md:mt-60 gap-8'>
            <h1 className='text-center'>Projects</h1>
            <div className='loading mt-5'></div>
        </div>
    }
    return ( 
        <div className="flex flex-col md:mt-60 gap-8" id='projects'>
            <h1 className='text-center'>Projects</h1>
            {
                !isLoading ?
                    data?.map(element => {
                        return  element.stargazers_count >= 1
                            ? 
                            <div className='flex flex-col gap-12 py-4 md:grid md:grid-cols-card' key={element.id}>
                                <section className='flex flex-col gap-6 text-center'>
                                    <h3 className='capitalize'>{element.name}</h3>
                                    <p>{element.description}</p>
                                    <div className="tools grid grid-cols-tag md:grid md:grid-cols-2 gap-2">
                                        {
                                            element?.topics?.map((topic, index) => {
                                                return  <span key={index} className='tag text-tag'>
                                                            {topic}
                                                        </span>
                                            })
                                        }
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <a href={element.html_url}>
                                            <ion-icon size="large" name="logo-github"></ion-icon>
                                        </a>
                                        <a href={element.homepage}>
                                            <ion-icon size="large" name="log-out-outline"></ion-icon>
                                        </a>
                                    </div>
                                </section>
                                <section className='m-auto w-auto'>
                                    <img 
                                        className='rounded-xl w-auto'
                                        src={`images/${element.name}.jpg`}
                                        alt="" 
                                    />
                                </section>
                            </div>
                            : ''
                    })
                : ''
            }
        </div>
    )
}