'use client'

import Scenario from '@/app/ui/practice/exam/scenario'
import Choice from '@/app/ui/practice/exam/choice'
import Explanation from '@/app/ui/practice/exam/explanation'
import Button from '@/app/ui/practice/button'

export default function Card() {
    const questionID = 'Question 1' // NTD: make dynamic

    function handlePrevCard() {}
    function handleNextCard() {}

    return (
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-8 m-12 shadow-sm min-h-64">
            <div>
                <p className="mt-2 p-4 rounded-sm text-md font-bold text-gray-600 bg-blue-100">
                    {questionID}
                </p>
            </div>
            <div className="mt-4 mb-8 p-4">
                <Scenario />
                <Choice />
                {/* <Explanation /> */}
                <Choice />
                {/* <Explanation /> */}
                <Choice />
                {/* <Explanation /> */}
                <Choice />
                {/* <Explanation /> */}
            </div>
            <div className="flex w-full items-center justify-between">
                <Button name="Prev" onClick={handlePrevCard} />
                <Button name="Next" onClick={handleNextCard} />
            </div>
        </div>
    )
}
