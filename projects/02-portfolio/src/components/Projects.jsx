import { repos } from '../data/ReposData.json'

export default function Projects () {
    return ( 
        <div className="flex flex-col mt-60 gap-4">
            {
                repos?.map(element => {
                    return  element.stargazers_count >= 1
                        ? 
                        <div className='grid grid-cols-card gap-4 py-4' key={element.id}>
                            <section className='flex flex-col gap-2 text-center'>
                                <h3>{element.name}</h3>
                                <p>{element.description}</p>
                                <div className="tools grid grid-cols-tag gap-2">
                                    {
                                        element?.topics?.map((topic, index) => {
                                            return  <span key={index} className='tag'>
                                                        {topic}
                                                    </span>
                                        })
                                    }
                                </div>
                                <div className="flex justify-center gap-2">
                                    <a href={element.html_url}>
                                        <ion-icon size="small" name="logo-github"></ion-icon>
                                    </a>
                                    <a href={element.homepage}>
                                        <ion-icon size="small" name="log-out-outline"></ion-icon>
                                    </a>
                                </div>
                            </section>
                            <section>
                                <ion-icon name="qr-code-outline"></ion-icon>
                            </section>
                        </div>
                        : ''
                })
            }
        </div>
    )
}