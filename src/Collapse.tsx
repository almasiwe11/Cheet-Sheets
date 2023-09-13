import { BiSolidRightArrow } from "react-icons/bi"
import { useState, useRef } from "react"
import { ReactNode } from "react"

type PropTypes = {
  children: ReactNode
  title: string
}
function Collapse({ children, title }: PropTypes) {
  const [showContent, setShowContent] = useState(true)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  const myStyle = {
    maxHeight: `${
      showContent ? `${bodyRef?.current?.offsetHeight}px` || "100%" : 0
    }`,
  }

  return (
    <div
      className={`mt-6 transition-max-height duration-300  ease-in  w-full  `}
    >
      <div
        className="bg-gray-400 w-full  items-center cursor-pointer rounded-lg p-2.5 px-10 flex gap-4 text-lg"
        onClick={() => setShowContent((prev) => !prev)}
        ref={headerRef}
      >
        <h1> {title}</h1>
        <div
          className={` duration-300 ease-in-out ${
            showContent ? "rotate-90" : "rotate-0"
          }`}
        >
          <BiSolidRightArrow />
        </div>
      </div>
      <div
        className="overflow-hidden w-full duration-300 ease-in transition-max-height mt-3 "
        style={myStyle}
      >
        <div className={`py-4 px-3 bg-gray-400   rounded-lg `} ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Collapse
