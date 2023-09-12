import UseReducer from "./useReducer"
import { useState } from "react"
import Context from "./Context"

export default function App() {
  const [page, setPage] = useState("useReducer")
  return (
    <div className="grid grid-cols-[40rem_1fr] gap-24">
      <div className="flex flex-col max-w-lg mx-auto h-screen justify-center ">
        <div className="flex justify-between  min-w-[15rem] items-center  ">
          <p className="title">useReducer</p>
          <input
            type="radio"
            name="page"
            className=" text-blue-600 focuse:outline-none relative top-1 w-5 h-5"
            value="useReducer"
            onChange={(e) => setPage(e.target.value)}
          />
        </div>
        <div className="flex justify-between  min-w-[15rem] items-center  ">
          <p className="title">Context API</p>
          <input
            type="radio"
            name="page"
            className=" text-blue-600 focuse:outline-none  relative top-1 w-5 h-5"
            value="Context"
            onChange={(e) => setPage(e.target.value)}
          />
        </div>
      </div>
      {page === "useReducer" && <UseReducer />}
      {page === "Context" && <Context />}
    </div>
  )
}
