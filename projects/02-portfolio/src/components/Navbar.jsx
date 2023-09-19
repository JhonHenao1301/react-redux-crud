import { useState } from "react";

export default function Navbar() {
    const [open,setOpen] = useState(false);
    return (
        <nav className="shadow-sm w-full sticky top-0 left-0">
            <div className="flex bg-slate-200 py-4 md:px-8 px-8 items-center justify-between"> 
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-600">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2">
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
                    <ul className={`bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-slate-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-400 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        {[
                            ['Home'],
                            ['About'],
                            ['Carrer path'],
                            ['Projects'],
                            ['Contact'],
                        ].map(([title], index) => (
                            <li className="md:ml-8 text-xl md:my-0 my-4" key={index}>
                                <a href="/" className="rounded-lg text-gray-500 font-medium hover:bg-slate-300 hover:text-slate-900 duration-500">
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
