export default function Features() {
    return (
        <section>
            <h1 className="text-2xl font-bold tracking-tight text-subheading">
                Features
            </h1>
            <p className="mt-4 text-body leading-relaxed">
                Atlas is built around two complementary modes - one for learning
                and one for testing yourself. Each is designed to mirror how AWS
                structures its exams, so the time you spend here translates
                directly to time on the test.
            </p>

            <div className="mt-8 space-y-8">
                <div>
                    <h2 className="text-lg font-semibold text-heading">
                        Study Mode
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Hold a conversation with a study agent that has been
                        primed on AWS documentation and the structure of each
                        certification exam. Ask broad concept questions, request
                        worked examples, or dig into edge cases - answers are
                        grounded in source material and come with citations you
                        can verify. Because the agent understands the exam
                        blueprint, it can frame explanations in the same shape
                        the test will use.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-heading">
                        Practice Library
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Reinforce concepts with flashcards that target core
                        services, design patterns, and the trade-offs AWS likes
                        to probe. When you're ready for a fuller check, switch
                        to mock exams that match the question style, difficulty
                        distribution, and timing of the real certification.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-heading">
                        Exam Simulator
                    </h2>
                    <p className="mt-2 text-body leading-relaxed">
                        Sit a full-length practice exam in an interface designed
                        to closely resemble the actual AWS testing environment -
                        same flag controls, navigation, and review flow. By exam
                        day, the mechanics should feel familiar so you can put
                        all your attention on the questions themselves.
                    </p>
                </div>
            </div>
        </section>
    )
}
