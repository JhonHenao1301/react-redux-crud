
export default function Layout ({ children }) {
    return ( 
        <div className='flex flex-col md:m-0 md:max-w-4xl'>
            { children }            
        </div>
    )
}