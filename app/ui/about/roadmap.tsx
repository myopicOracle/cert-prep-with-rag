export default function Roadmap() {
    return (
        <section>
            <h1 className="text-2xl font-sora tracking-tight text-heading">
                Study Roadmap
            </h1>
            <p className="mt-4 text-body leading-relaxed">
                The features above work best as a sequence. Here's a suggested
                path from a cold start to exam day - feel free to loop back to
                earlier steps whenever a topic needs more reps.
            </p>

            <div className="mt-8 space-y-8">
                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        1. Build a foundation in Study mode
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Start by chatting with the study agent. Work through
                        each exam domain at your own pace - ask for definitions,
                        walk through scenarios, and have the agent compare
                        services side by side. Because it knows the exam
                        blueprint, you can ask questions like "what would AWS
                        test about this?" and get answers that map to the way
                        questions are actually written.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        2. Reinforce with flashcards
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Once a topic feels familiar, switch to flashcards to
                        drill recall. Short, focused, and repeatable - ideal for
                        filling the gaps between longer study sessions and for
                        keeping older material warm as you move on to new
                        domains.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        3. Test yourself with mock exams
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Use mock exams to surface weak areas under realistic
                        conditions. After each attempt, review the explanations
                        and bring anything that still feels shaky back to the
                        study agent for a deeper pass - the loop between testing
                        and re-explaining is where most of the durable learning
                        happens.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        4. Acclimate with the exam simulator
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        In the final stretch before your exam, run through the
                        simulator. The goal here isn't more content - it's
                        removing the unfamiliarity of the interface so that on
                        test day, the only thing asking for your attention is
                        the question in front of you.
                    </p>
                </div>
            </div>
        </section>
    )
}
