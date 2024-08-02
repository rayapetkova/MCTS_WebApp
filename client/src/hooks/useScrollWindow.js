import { useState } from "react"

function useScrollWindow() {
    const [showScrollButton, setShowScrollButton] = useState(false)

    function scrollHandler() {
        if (window.scrollY > 100) {
            setShowScrollButton(true)
        } else {
            setShowScrollButton(false)
        }
    }

    function clickArrowButtonTop() {
        setShowScrollButton(false)
        window.scrollTo(0, 0)
    }

    window.addEventListener('scroll', scrollHandler)

    return [
        showScrollButton,
        clickArrowButtonTop
    ]
}

export default useScrollWindow;