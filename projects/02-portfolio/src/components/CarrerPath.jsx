import { education, experience } from '../data/CarrerPathData'

export default function CarrerPath () {
    // console.log(education);
    return ( 
        <div>
            {
                education?.map((element, index) => {
                    return (
                        <div key={index}>
                            <h3>{element.title}</h3>
                            <p>{element.institution}</p>
                            <p>{element.year}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}