import SyntaxHighlighter from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { HiOutlineClipboard } from "react-icons/hi"
import { BsCheckLg } from "react-icons/bs"
import { useState } from "react"

type PropTypes = {
  code: string
  bg?: boolean
}
const CodeBlock = ({ code, bg = false }: PropTypes) => {
  const [copied, setCopied] = useState(false)

  const customStyle = {
    ...darcula,
    hljs: {
      ...darcula.hljs,
      background: "#000", // Black background color
    },
    "hljs-attr": {
      color: "#ea580c",
    },
    "hljs-keyword": {
      color: "#2e95d3", // Red for imports
    },
    "hljs-variable": {
      color: "#00a67d", // Green for variables
    },
    "hljs-title": {
      color: "#f22c3d",
    },
    "hljs-name": {
      color: "#df3079",
    },
  }

  return (
    <div className={`${bg && "bg-gray-500"} flex-center w-full`}>
      <div className="max-w-5xl min-w-[45rem] bg-[#3a404d] rounded-md overflow-hidden my-10">
        <div className="flex justify-between px-4 py-2 text-white text-xs items-center">
          <p className="text-lg">Example code</p>

          {copied ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-lg">
                <BsCheckLg />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(code)
                setCopied(true)
                setTimeout(() => {
                  setCopied(false)
                }, 3000)
              }}
            >
              <span className="text-lg">
                <HiOutlineClipboard />
              </span>
              Copy code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={customStyle}
          customStyle={{
            padding: "20px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock
