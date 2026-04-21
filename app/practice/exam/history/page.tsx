import { lusitana } from '@/app/ui/fonts'

export default async function Page() {
    return (
        <div>
            <h1 className={`${lusitana.className} text-2xl`}>Past Exams</h1>
            <p className="mt-2 text-gray-500">Review your past exams here.</p>
        </div>
    )
}
