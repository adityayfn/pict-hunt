import { RouterProvider } from "react-router-dom"
import { router } from "./routers"
import { useState } from "react"
import { GlobalContext } from "./context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const App = () => {
  const queryClient = new QueryClient()

  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchTitle, setSearchTitle] = useState("")

  return (
    <>
      <GlobalContext.Provider
        value={{
          page,
          setPage,
          searchQuery,
          setSearchQuery,
          searchTitle,
          setSearchTitle,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </GlobalContext.Provider>
    </>
  )
}
export default App
