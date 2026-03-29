import { lusitana } from '@/app/ui/fonts'

export default async function Page() {
    return (
        <div>
            <h1 className={`${lusitana.className} text-2xl`}>Flashcards</h1>
            <p>Match terms to definitions.</p>
        </div>
    )
}
