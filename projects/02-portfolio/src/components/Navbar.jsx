import { useState } from "react";

export default function Navbar() {
    const [open,setOpen] = useState(false);
    return (
        <nav className="shadow-sm w-full sticky top-0 left-0 z-10">
            <div className="flex text-slate-200 bg-slate-700 py-4 md:px-8 px-8 items-center justify-between"> 
                <div className="font-bold text-2xl cursor-pointer flex items-center">
                    <span className="text-3xl text-indigo-400 mr-1 pt-2">
                        <ion-icon size="large" name="code-working-outline"></ion-icon>
                    </span>
                    JH
                </div>

                <div 
                    onClick={()=>setOpen(!open)} 
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
                >
                    <ion-icon size="large" name={open ? 'close':'menu'}></ion-icon>
                </div>

                <div>
                    <ul className={`bg-slate-500 md:flex md:items-center pt-4 pb-4 absolute md:static md:bg-slate-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-400 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        {[
                            {name:'Home', link:'/'},
                            {name:'About', link:'#about'},
                            {name:'Carrer path', link: '#carrer'},
                            {name:'Projects', link: '#projects'},
                            {name:'Contact', link:'#contact'},
                        ].map(({name, link}, index) => (
                            <li className="md:ml-6 text-xl md:my-0 my-6" key={index}>
                                <a href={link} className="p-2 rounded-lg font-medium hover:bg-slate-200 hover:text-slate-700 duration-500">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
