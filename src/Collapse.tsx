import { BiSolidRightArrow } from "react-icons/bi"
import { useState, useRef, useEffect } from "react"
import { ReactNode } from "react"

type PropTypes = {
  children: ReactNode
  title: string
}
function Collapse({ children, title }: PropTypes) {
  const [showContent, setShowContent] = useState(true)
  const [heightStart, setHeightStart] = useState(0)
  const [heightFull, setHeightFull] = useState(0)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setHeightStart(headerRef!.current!.offsetHeight + 5)
    setHeightFull(
      headerRef!.current!.offsetHeight + bodyRef!.current!.offsetHeight + 12
    )
  }, [])

  const myStyles = {
    maxHeight: `${showContent ? `${heightFull}px` : `${heightStart}px`}`,
  }

  return (
    <div
      className={`mt-6 transition-max-height duration-500  ease-in  w-full  `}
      style={myStyles}
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
      <div className="overflow-hidden w-full  mt-3 ">
        <div
          className={`py-4 px-3 bg-gray-400 rounded-lg duration-500 ease-in ${
            showContent ? "translate-y-0" : "-translate-y-[130%]"
          }`}
          ref={bodyRef}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Collapse
