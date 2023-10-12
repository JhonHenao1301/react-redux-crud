import { experience } from '../mocks/CarrerPathData'

export default function CarrerPath () {
    // console.log(education);
    return ( 
        <div className='after:bg-indigo-500 flex flex-col gap-12 justify-center h-screen w-screen z-10 px-20 md:px-24 lg:px-4' id='carrer'>
            <h1 className='text-center'>Experience</h1>
            <div className='flex justify-center'>
                <div className='timeline dark:md:bg-slate-50 md:absolute md:w-px md:left-1/2 md:bg-black'>
                    {
                        experience?.map((element, index) => {
                            return (
                                <div className='' key={index} id="child">
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