import Navbar from "@/components/Navbar";
const DasbboardLayout = ({}) => {
    return(
        <div className=" border-black border-4 h-full w-full flex flex-col">
            <Navbar/>
            <div className=" border-green-900 border-2"></div>
            <div className=" flex border-red-600 border-2 h-full ">
                <div className=" bg-orange-400 basis-1/2 transition-all duration-500 hover:basis-3/4">inner</div>
                <div className=" bg-purple-400 basis-1/2 transition-all duration-500 hover:basis-3/4">inners</div>
            </div>
        
        </div>
    );
}

export default DasbboardLayout