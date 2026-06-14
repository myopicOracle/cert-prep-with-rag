'use client'

import { useState, useEffect, useCallback } from 'react'
import { shuffle } from 'lodash'

import CountdownBar from './countdown-bar'
import Card from './card'
import Results from './results'
import { SpeedrunWrapperProps } from '@/app/types/components'
import { Quiz, RoundQuestion } from '@/app/types/quiz'

const ROUND_SIZE = 25
const QUESTION_SECONDS = 60

function buildRound(quizzes: Quiz[]): RoundQuestion[] {
    const sampled = shuffle(quizzes).slice(
        0,
        Math.min(ROUND_SIZE, quizzes.length),
    )

    return sampled.map((quiz) => ({
        ...quiz,
        choices: shuffle([
            { answer: quiz.correct_answer, isCorrect: true },
            { answer: quiz.wrong_answer_1, isCorrect: false },
            { answer: quiz.wrong_answer_2, isCorrect: false },
            { answer: quiz.wrong_answer_3, isCorrect: false },
        ]),
    }))
}

export default function SpeedrunWrapper({ quizzes }: SpeedrunWrapperProps) {
    const [round, setRound] = useState<RoundQuestion[]>(() =>
        buildRound(quizzes),
    )
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const [isAnswered, setIsAnswered] = useState(false)
    const [score, setScore] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(QUESTION_SECONDS)
    const [isFinished, setIsFinished] = useState(false)

    const total = round.length
    const currentQuestion = round[currentIndex]

    const advance = useCallback(() => {
        if (currentIndex >= total - 1) {
            setIsFinished(true)
            return
        }
        setCurrentIndex((i) => i + 1)
        setSelectedIndex(null)
        setIsAnswered(false)
        setSecondsLeft(QUESTION_SECONDS)
    }, [currentIndex, total])

    // per-question countdown: ticks only while the question is unanswered.
    // On expiry the question auto-advances (counts as a miss, no explanation).
    useEffect(() => {
        if (isAnswered || isFinished) {
            return
        }
        const timer = setTimeout(() => {
            if (secondsLeft <= 1) {
                advance()
            } else {
                setSecondsLeft((s) => s - 1)
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [secondsLeft, isAnswered, isFinished, advance])

    function handleSelect(index: number) {
        if (isAnswered) {
            return
        }
        setSelectedIndex(index)
        setIsAnswered(true)
        if (currentQuestion.choices[index].isCorrect) {
            setScore((s) => s + 1)
        }
    }

    function handleRestart() {
        setRound(buildRound(quizzes))
        setCurrentIndex(0)
        setSelectedIndex(null)
        setIsAnswered(false)
        setScore(0)
        setSecondsLeft(QUESTION_SECONDS)
        setIsFinished(false)
    }

    if (isFinished) {
        return <Results score={score} total={total} onRestart={handleRestart} />
    }

    return (
        <div className="mx-auto flex w-full max-w-2xl flex-col">
            <div className="mb-4 flex items-center justify-between font-outfit text-sm tracking-wide text-contrast">
                <span>
                    {currentIndex + 1} / {total}
                </span>
                <span>Score: {score}</span>
            </div>

            <CountdownBar
                secondsLeft={secondsLeft}
                totalSeconds={QUESTION_SECONDS}
            />

            <Card
                question={currentQuestion}
                selectedIndex={selectedIndex}
                isAnswered={isAnswered}
                onSelect={handleSelect}
                onNext={advance}
            />
        </div>
    )
}
