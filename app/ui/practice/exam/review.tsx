import Link from 'next/link'
import { lusitana } from '@/app/ui/fonts'
import { FlagIcon as FlagIconOutline } from '@heroicons/react/24/outline'
import { FlagIcon as FlagIconSolid } from '@heroicons/react/24/solid'
import { ReviewProps } from '@/app/types/components'

export default function Review({
    questions,
    totalQuestions,
    numberCompleted,
    numberCorrect,
}: ReviewProps) {
    const score = Math.round((numberCorrect / totalQuestions) * 100)
    const letterArray = ['A', 'B', 'C', 'D']

    return (
        <div>
            <h2 className={`${lusitana.className} text-2xl font-semibold mt-8 mb-2`}>
                Exam Statistics
            </h2>
            <div className="flex justify-between my-6">
                <div className="text-xl text-center">
                    <h3 className="font-semibold">Score</h3>
                    <p>{score}%</p>
                </div>
                <div className="text-xl text-center">
                    <h3 className="font-semibold">Outcome</h3>
                    <p>{score >= 75 ? 'PASS' : 'FAIL'}</p>
                </div>
                <div className="text-xl text-center">
                    <h3 className="font-semibold">Completion</h3>
                    <p>
                        {numberCompleted} of {totalQuestions}
                    </p>
                </div>
            </div>
            <h2 className={`${lusitana.className} text-2xl font-semibold mt-8 mb-2`}>
                Question Review
            </h2>
            <div className="flex flex-col gap-4 my-4">
                {questions.map((question, index) => {
                    const bgColor =
                        question.answeredCorrectly === null
                            ? 'bg-gray-50'
                            : question.answeredCorrectly
                              ? 'bg-green-50'
                              : 'bg-red-50'

                    return (
                        <div key={question.id} className={`flex gap-6 p-4 rounded-xl ${bgColor}`}>
                            <div className="flex-none w-24">
                                <strong>Question {index + 1}</strong>
                            </div>
                            <div className="flex-1">
                                <strong>Scenario</strong>
                                <br />
                                {question.scenario}
                            </div>
                            <div className="flex-none w-24">
                                <strong>Status</strong>{' '}
                                {question.isRevealed ? 'Completed' : 'Skipped'}
                            </div>
                            <div className="flex-none w-24">
                                <strong>Flagged</strong>{' '}
                                {question.isFlagged ? (
                                    <FlagIconSolid className="w-5" />
                                ) : (
                                    <FlagIconOutline className="w-5" />
                                )}
                            </div>
                            <div className="flex-none w-24">
                                <Link
                                    href={`/practice/exam?id=${index + 1}`}
                                    className="text-blue-600 underline hover:text-blue-800 transition-colors">
                                    Review
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
