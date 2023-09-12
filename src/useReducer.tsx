import CodeBlock from "./CodeBlock"
import Collapse from "./Collapse"

function useReducer() {
  const reducer = `function reducer(state, action) {
    return { player: 3, status: 'won' }
  }`

  const reducer2 = `function reducer(state, action) {
    switch(action.type){
      case 'nextPlayer': 
        return {...state, player:state.player + 1}
      case 'victory': 
        return {player:action.player, status:'won'}
      case 'restart:
        return initialState
      default:
        throw new Error('Unknown action')
    }
  } `

  return (
    <div className="max-w-5xl ">
      <h1 className="  title text-center">Use Reducer</h1>

      <Collapse title="1) Destructure">
        Create and initial state object and pass it inside a useReducer()
        <CodeBlock
          code={`const initialState = {player:1, status:'playing'} 
const[state, dispatch] = useReducer(reducer, initialState)`}
        />
        To use the values of initial state we can destrucure it like this
        <CodeBlock code={`const {player, status} = state`} />
        or like this
        <CodeBlock
          code={`const [{player, status}, dispatch] = useReducer(reducer, initialState)`}
        />
      </Collapse>

      <Collapse title="2)Reducer">
        <div>
          Reducer Should Always return an object with the same shape as the
          iniital state
          <CodeBlock code={reducer} />
        </div>
        <div>
          All the possible commands that useReducer() can recieve should be
          inside a <strong>switch statement</strong>
          <CodeBlock code={reducer2} />
          If a dispatch is wrong throw a new error in a{" "}
          <strong>default </strong> case
        </div>
      </Collapse>

      <Collapse title="3)Dispatch">
        Dispatch or call an action it will be passed into the reducer function
        as <strong>action</strong>
        <CodeBlock
          code={`dispatch({type:'victory', player:'5' 
dispatch({type:'reset})`}
        />
        Pass in an object into the dispatch function
      </Collapse>
    </div>
  )
}

export default useReducer
