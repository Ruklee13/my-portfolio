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
        </div>
    );
}

export default DashboardLayout;