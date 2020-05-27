import { useState } from "react"

export const useToggle = (initialValue = false) => {
  const [isTrue, setIsTrue] = useState(initialValue)
  const toggle = () => setIsTrue((prev) => !prev)

  return [isTrue, setIsTrue, toggle]
}
