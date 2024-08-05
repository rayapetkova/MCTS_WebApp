import { useEffect, useState } from "react"

function useScrollWindow() {
    const [showScrollButton, setShowScrollButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', () => setShowScrollButton(false))
        }
    }, [])

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

    return [
        showScrollButton,
        clickArrowButtonTop
    ]
}

export default useScrollWindow;