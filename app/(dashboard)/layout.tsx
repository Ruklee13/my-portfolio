<<<<<<< HEAD
import { Sidebar } from "@/components/Sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className=" h-full">
            <div className=" hidden md:flex h-full w-full fixed inset-y-0 z-50">
                <Sidebar/>
            </div>
            <div>
                {children}
            </div>
=======
import Navbar from "@/components/Navbar";
const DasbboardLayout = ({}) => {
    return(
        <div className=" border-black border-4 h-full w-full flex flex-col">
            <Navbar/>
            <div className=" border-green-900 border-2"></div>
        
>>>>>>> parent of 0aec842 (Homepage)
        </div>
    );
}

export default DashboardLayout;