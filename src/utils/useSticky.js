import { useEffect, useState, useRef } from "react"

function useSticky() {
  const [isSticky, setSticky] = useState(true)
  const element = useRef(null)

  useEffect(() => {
    console.log("sticky")
  },[isSticky])

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().top
      ? setSticky(true)
      : setSticky(true)
  }

  // This function handles the scroll performance issue
  const debounce = (func, wait = 15, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}

export default useSticky