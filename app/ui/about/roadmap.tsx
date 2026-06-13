export default function Roadmap() {
    return (
        <section>
            <h1 className="text-2xl font-sora tracking-tight text-heading">
                How Atlas Works
            </h1>
            <p className="mt-4 text-body leading-relaxed">
                Atlas takes you from a cold start to exam day along one
                continuous loop. Each tool below does a single job and hands off
                to the next - and all of it is aligned to how AWS actually
                structures its exams, so your prep time maps directly onto test
                day.
            </p>

            <div className="mt-8 space-y-8">
                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        1. Chat with Docs
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Start here. Chat with an agent grounded in AWS
                        documentation and the exam blueprint: ask for
                        definitions, walk through scenarios, or have it compare
                        two services side by side - every answer comes with
                        citations you can verify. Because it knows what each
                        exam tests, you can ask “what would AWS ask about this?”
                        and build your foundation one domain at a time.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        2. Flashcards
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Once a topic clicks, switch to flashcards to lock in
                        recall. Short, repeatable, and focused on the core
                        services and trade-offs AWS likes to probe - ideal for
                        filling the gaps between longer sessions and keeping
                        earlier material warm as you move on.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        3. Speedrun
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Quick-fire questions that test one concept at a time - a
                        single correct answer among three, with none of the
                        multi-constraint scenarios or careful wording of a real
                        exam. If you know the idea you’ll answer in seconds; if
                        you stall, you’ve found the gap between knowing
                        something and only thinking you do. It bridges the two
                        steps around it: flashcards drill a term in isolation,
                        while Speedrun checks that the recall holds once the
                        concept is wrapped in a question - a lighter pressure
                        check before you commit to a full-length timed exam.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        4. Mock Exams + Live Explanations
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        When the quick checks feel easy, step up to a
                        full-length mock exam in an interface that mirrors the
                        actual testing environment - the same flag controls,
                        navigation, and review flow, on the clock. It surfaces
                        your weak areas under realistic pressure, and every
                        question comes with an explanation - or, on any of them,
                        a live agent that breaks down why each option is right
                        or wrong and keeps the conversation open until the
                        question clicks.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-sora tracking-tight text-subheading">
                        Close the loop
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Take anything still shaky back to Chat with Docs for a
                        deeper pass. That cycle - test, re-explain, retest - is
                        where the durable learning happens. By exam day, both
                        the material and the interface should feel familiar, so
                        the only thing competing for your attention is the
                        question in front of you.
                    </p>
                </div>
            </div>
        </section>
    )
}
