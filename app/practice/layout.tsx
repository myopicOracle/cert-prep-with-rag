import SideNav from '@/app/ui/practice/sidenav'
import { Toaster } from 'sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-full flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="grow px-6 md:overflow-y-auto md:px-12">
                {children}
            </div>
            <Toaster richColors />
        </div>
    )
}
