"use clients";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        label: "link",
        href: "/portfolio",
    },
    {
        label: "link",
        href: "linkinger",
    },
    {
        label: "link",
        href: "linkinger",
    },
    {
        label: "link",
        href: "linkinger",
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