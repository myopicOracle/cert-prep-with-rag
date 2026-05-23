import SideNav from '@/app/ui/study/sidenav'
import { Toaster } from 'sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-full flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="grow md:overflow-y-auto px-6 py-4 md:px-12 md:py-8 rounded-tl-lg bg-contra-page">
                {children}
            </div>
            <Toaster richColors />
        </div>
    )
}
