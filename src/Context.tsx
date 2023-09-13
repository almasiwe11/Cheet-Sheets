import Collapse from "./Collapse"
import CodeBlock from "./CodeBlock"

export default function Context() {
  const code1 = `<MarkedContext.Provider value={{ bookmarked, setBookmarked }}>
      </App>
</MarkedContext.Provider>
  `

  const code2 = ` <MarkedContext.Provider value={{ bookmarked, setBookmarked }}>
      {children}
</MarkedContext.Provider>`

  const code3 = `const MarkedContext = createContext();
  
  function MarkedProvider({ children }) {
  const [bookmarked, setBookmarked] = useState(
    () => JSON.parse(localStorage.getItem("Bookmarked")) || []
  )

  useEffect(() => {
    localStorage.setItem("Bookmarked", JSON.stringify(bookmarked));
  }, [bookmarked])

  return (
    <MarkedContext.Provider value={{ bookmarked, setBookmarked }}>
      {children}
    </MarkedContext.Provider>
  );

  export { MarkedProvider}
}`

  const createContext = `import { createContext } from "react";

const ProductsContext = createContext<ProductsContextType | null>(null);


`

  const types = `
type ProductsContextType = {
  cartIsOpen?: boolean
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  mobileMenuIsOpen: boolean
  setMobileMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  products: ProductType[]
  categoryList: string[]
  inCartProducts: inCartType[]
  setInCartProducts: React.Dispatch<React.SetStateAction<inCartType[]>>
}
`

  const code4 = `function useProducts() {
  const context = useContext(ProductsContext)
  if (context === null) {
    throw new Error("useProducts must be used within a ProductsProvider")
  }
  return context
}

export { ProductsProvider, useProducts }

  `
  return (
    <div>
      <h1 className="title text-center ">Context API</h1>
      <Collapse title="! Idea - Provider component should be wrapped in a ContextProvider">
        The component that will provide context to it's children should be
        wrapped in the Context Provider
        <CodeBlock code={code1} />
        In this case my App component will be providing context to it's all
        children, and to itself if needed.
      </Collapse>

      <Collapse title="1) Create Context">
        <CodeBlock code={createContext} />
        Define types for the values that Provider will provide
        <CodeBlock code={types} />
      </Collapse>

      <Collapse title="2) Now this is what we want">
        <CodeBlock code={code2} />
      </Collapse>

      <Collapse title="3)So we create a function component that will accept children prop">
        <CodeBlock code={code3} />
      </Collapse>

      <Collapse title="4)Finally a custom hook to access the context values faster and easier">
        <CodeBlock code={code4} />
      </Collapse>

      <Collapse title="5)Don't confuse them">
        Function component is a provider <br></br> While the wrapper JSX is{" "}
        <strong>Context.Provider</strong>
      </Collapse>
    </div>
  )
}
