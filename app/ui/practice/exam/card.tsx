import Scenario from '@/app/ui/practice/exam/scenario'
import Choice from '@/app/ui/practice/exam/choice'
import Explanation from '@/app/ui/practice/exam/explanation'
import Button from '@/app/ui/practice/button'

export default function Card() {
    const questionID = 'Question 1' // NTD: make dynamic

    function handlePrevCard() {}
    function handleNextCard() {}

    return (
        <div>
            <div>
                <p>{questionID}</p>
            </div>
            <div>
                <Scenario />
                <Choice />
                <Explanation />
            </div>
            <div>
                <Button name="Prev" onClick={handlePrevCard} />
                <Button name="Next" onClick={handleNextCard} />
            </div>
        </div>
    )
}
