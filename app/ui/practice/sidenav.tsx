import NavLinks from '@/app/ui/practice/nav-links'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function SideNav() {
    return (
        <div className="flex h-full flex-col bg-sidenav">
            <nav className="flex flex-row gap-1 px-4 md:flex-col md:gap-2">
                <NavLinks />
            </nav>
            <div className="mt-auto hidden p-4 md:block">
                <div className="flex items-center gap-3">
                    <UserCircleIcon className="h-10 w-10 text-body-muted" />
                    <span className="font-outfit font-semibold text-body">
                        Guest
                    </span>
                </div>
            </div>
        </div>
    )
}
