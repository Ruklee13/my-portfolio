
import { Sidebar } from "@/components/Sidebar";

const DashBoardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className=" h-full">
            <div className=" hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar/>
            </div>
            <main className="md:pl-56">
                {children}
            </main>
        </div>
    )
}
export default DashBoardLayout