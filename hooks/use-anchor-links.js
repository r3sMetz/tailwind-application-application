import { useEffect, useState } from "react"
import slugify from "slugify"
import AnchorJS from "anchor-js"

export const useAnchorLinks = (ref) => {
  const [allLinks, setAllLinks] = useState([])
  useEffect(() => {
    const anchors = new AnchorJS()
    anchors.options = {
      placement: "left",
      icon: "#",
      visible: "hover",
      class: "text-gray-400",
    }
    const links = []
    const allAnchors = Array.from(
      ref.current.querySelectorAll(".markdown > h2"),
    )

    allAnchors.forEach((anchor) => {
      const text = anchor.innerText
      const slug = slugify(text, { lower: true })
      anchor.classList.add("anchorjs")

      links.push({
        title: text,
        href: `#${slug}`,
      })
    })

    anchors.add(".anchorjs")

    setAllLinks(links)
  }, [])

  return allLinks
}
