import CodeBlock from "./CodeBlock"
import { BiSolidRightArrow } from "react-icons/bi"
import { BiSolidDownArrow } from "react-icons/bi"
import { useState, useRef, useEffect } from "react"
function App() {
  const codeString = `import React from "react";
import { SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./custom-highlighting.css"; // Import your custom CSS file

function CodeSnippet() {
const letsgoo = wefw

  return (
    <SyntaxHighlighter language="javascript" style={darcula}>
      {code}
      
    <div className='lelel'></div>
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;
`

  const [showContent, setShowContent] = useState(false)

  return (
    <div>
      <div className={`wrapper mt-8 transition-max-height duration-1000 `}>
        <div
          className="bg-gray-400  items-center cursor-pointer rounded-lg p-2.5 px-10 flex gap-4 text-lg"
          onClick={() => setShowContent((prev) => !prev)}
        >
          {showContent ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
          <h1> Collapsable section</h1>
        </div>
        <div className="overflow-hidden mt-3 ">
          <div
            className={`py-4 px-10 bg-gray-400 rounded-lg ${
              showContent ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            sequi, necessitatibus distinctio provident voluptatibus ex earum
            eligendi? Eaque tempore quam, hic, dolores voluptate illo veniam
            illum quod tenetur quas doloribus assumenda ab deleniti modi quae
            libero dolore sit? Molestias deserunt voluptates tempore ullam
            molestiae distinctio aliquam minima? Eaque cupiditate voluptates,
            magni ab ea illo odit quidem quibusdam et dolorum. Autem blanditiis
            est harum minus rerum porro, dicta corrupti fugit, omnis optio quasi
            ex at facilis. Cum ea assumenda corrupti provident ipsam reiciendis
            nemo labore omnis voluptatem odit? Laudantium illo possimus deserunt
            quam suscipit animi, inventore ea modi fugiat necessitatibus
            reiciendis!
            <CodeBlock code={codeString} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
