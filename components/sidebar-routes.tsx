"use clients";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Projects",
        href: "/portfolio",
    },
    {
        label: "Gallery",
        href: "/work",
    },
    {
        label: "Blog",
        href: "/posts"
    },
    {
        label: 'Resume',
        href: '/resume'
    },
]
export const SidebarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className=" flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                key={route.href}
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
}