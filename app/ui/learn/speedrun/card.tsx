import Choice from './choice'
import Button from '@/app/ui/learn/button'
import { SpeedrunCardProps } from '@/app/types/components'

const nextButtonStyle =
    'rounded-sm text-sm font-semibold px-8 py-3 bg-button text-button-text hover:bg-button/80 shadow-md focus:outline-none'

export default function Card({
    question,
    selectedIndex,
    isAnswered,
    onSelect,
    onNext,
}: SpeedrunCardProps) {
    const wasCorrect =
        selectedIndex !== null && question.choices[selectedIndex].isCorrect

    return (
        <div className="w-full">
            <p className="mb-6 font-sora text-lg tracking-tight text-contrast md:text-xl">
                {question.question}
            </p>

            <div className="flex flex-col gap-3">
                {question.choices.map((choice, index) => (
                    <Choice
                        key={index}
                        answer={choice.answer}
                        index={index}
                        isAnswered={isAnswered}
                        isCorrect={choice.isCorrect}
                        isSelected={selectedIndex === index}
                        onSelect={onSelect}
                    />
                ))}
            </div>

            {isAnswered && (
                <div className="mt-6">
                    <div className="rounded-lg border border-border bg-card p-4">
                        <p className="mb-1 font-outfit text-sm font-semibold tracking-wide text-body">
                            {wasCorrect ? 'Correct' : 'Not quite'}
                        </p>
                        <p className="font-outfit text-sm leading-relaxed text-body">
                            {question.explanation}
                        </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button
                            name="Next"
                            buttonStyle={nextButtonStyle}
                            onClick={onNext}
                            isDisabled={false}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
