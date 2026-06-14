'use client'

import { useState } from 'react'
import { shuffle } from 'lodash'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

import Card from './card'
import Button from '@/app/ui/learn/button'
import { FlashcardDeckProps } from '@/app/types/components'

const navButtonStyle =
    'rounded-sm text-sm font-semibold px-8 py-3 bg-button text-button-text hover:bg-button/80 shadow-md focus:outline-none'

export default function FlashcardWrapper({ cards }: FlashcardDeckProps) {
    const [deck, setDeck] = useState(() => cards)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const total = deck.length
    const currentCard = deck[currentIndex]

    function goTo(nextIndex: number) {
        setIsFlipped(false)
        setCurrentIndex(nextIndex)
    }

    function handlePrev() {
        if (currentIndex > 0) {
            goTo(currentIndex - 1)
        }
    }

    function handleNext() {
        if (currentIndex < total - 1) {
            goTo(currentIndex + 1)
        }
    }

    function handleFlip() {
        setIsFlipped((prev) => !prev)
    }

    function handleShuffle() {
        setDeck(shuffle(deck))
        goTo(0)
    }

    return (
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center">
            <div className="mb-4 flex w-full items-center justify-between font-outfit text-sm tracking-wide text-contrast">
                <span>
                    {currentIndex + 1} / {total}
                </span>
                <button
                    type="button"
                    onClick={handleShuffle}
                    className="flex cursor-pointer items-center gap-1.5 rounded-sm px-2 py-1 transition-colors hover:text-link-hover focus:outline-none">
                    <ArrowsRightLeftIcon
                        aria-hidden="true"
                        className="size-4"
                    />
                    Shuffle
                </button>
            </div>

            <Card
                term={currentCard.term}
                definition={currentCard.definition}
                isFlipped={isFlipped}
                onFlip={handleFlip}
            />

            <p className="mt-3 text-xs font-outfit tracking-wide text-body-muted">
                Click the card to flip it.
            </p>

            <div className="mt-6 flex w-full items-center justify-between px-12">
                <Button
                    name="Prev"
                    buttonStyle={navButtonStyle}
                    onClick={handlePrev}
                    isDisabled={currentIndex <= 0}
                />
                <Button
                    name="Next"
                    buttonStyle={navButtonStyle}
                    onClick={handleNext}
                    isDisabled={currentIndex >= total - 1}
                />
            </div>
        </div>
    )
}
