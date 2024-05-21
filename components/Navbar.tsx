'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({}) => {
    const path = usePathname();
    const menueItem = [
        {
            name: "Something",
            link: "link",
        },
        {
            name: "Something",
            link: "link",
        },
        {
            name: "Something",
            link: "link",
        },
        {
            name: "Something",
            link: "link",
        },
    ]
    return(
        <div className=" flex justify-between bg-slate-400">
            <div>
                <h1 className=" text-black text-3xl font-semibold ">Rukudzo Mushunje</h1>
            </div>
            <div>
                <ul className=" flex text-2xl ">
                    {menueItem.map((menu)=>{
                        const isActive = menu.link == path;
                        return (
                            <li key={menu.link}>
                                <Link href = {menu.link} className={isActive ? "m-2 text-blue-600": "m-4 p-2 hover:bg-slate-400 "}>
                                    {menu.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
export default Navbar;