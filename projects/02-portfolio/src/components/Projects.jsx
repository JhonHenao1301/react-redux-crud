// import { repos } from '../data/ReposData.json'
import { useFetch } from '../hooks/useFetch'

export default function Projects () {
    const { data, isLoading } = useFetch()
    if(isLoading) {
        return <div className='flex flex-col gap-12 h-screen mt-60'>
            <h1 className='text-center'>Projects</h1>
            <div className='loading mt-5'></div>
        </div>
    }
    return (
        <div className="flex flex-col gap-12 px-10 md:mt-60 h-fit" id='projects'>
            <h1 className='text-center'>Projects</h1>
            {
                !isLoading ?
                    data?.map(element => {
                        return  element.stargazers_count >= 1
                            ? 
                            <div className='flex flex-col gap-12 py-4 md:grid md:grid-cols-card' key={element.id}>
                                <section className='flex flex-col justify-center gap-6 text-center'>
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
                                        <a href={element.html_url} target='_blank' title='Link to github repo of this project'>
                                            <ion-icon size="large" name="logo-github"></ion-icon>
                                        </a>
                                        <a href={element.homepage}
                                        target='_blank' title='Link to deployment project'>
                                            <ion-icon size="large" name="log-out-outline"></ion-icon>
                                        </a>
                                    </div>
                                </section>
                                <section className='m-auto w-auto'>
                                    <img 
                                        className='rounded-xl w-auto'
                                        src={`images/${element.name}.jpg`}
                                        alt={element.description} 
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