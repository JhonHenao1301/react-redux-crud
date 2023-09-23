import { experience } from '../mocks/CarrerPathData'

export default function CarrerPath () {
    // console.log(education);
    return ( 
        <div className='flex flex-col gap-8 md:mb-60' id='carrer'>
            <h1 className='text-center'>Experience</h1>
            <div>
                <div className='timeline md:absolute md:w-px md:left-1/2 md:bg-black'>
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