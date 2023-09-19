import { experience } from '../data/CarrerPathData'

export default function CarrerPath () {
    // console.log(education);
    return ( 
        <div className='flex flex-col gap-8 mb-60'>
            <h1 className='text-center'>Experience</h1>
            <div>
                <div className='timeline'>
                    {
                        experience?.map((element, index) => {
                            return (
                                <div key={index} id="child">
                                    <div className="content text-center">
                                        <h3  className='font-semibold'>{element.title}</h3>
                                        <p>{element.institution}</p>
                                        <p className='font-bold'>{element.year}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}