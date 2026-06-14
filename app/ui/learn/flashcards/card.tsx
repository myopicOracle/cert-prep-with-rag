import Concept from './concept'
import Definition from './definition'
import { FlashcardCardProps } from '@/app/types/components'

export default function Card({
    term,
    definition,
    isFlipped,
    onFlip,
}: FlashcardCardProps) {
    return (
        <button
            type="button"
            onClick={onFlip}
            aria-label={isFlipped ? 'Show term' : 'Show definition'}
            className="block w-full cursor-pointer [perspective:1200px] focus:outline-none">
            <div
                className={`relative h-80 w-full shadow-md transition-transform duration-500 [transform-style:preserve-3d] md:h-96 ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}>
                <Concept>{term}</Concept>
                <Definition>{definition}</Definition>
            </div>
        </button>
    )
}
