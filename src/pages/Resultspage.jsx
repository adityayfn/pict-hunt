import { useState } from "react"
import DisplayImages from "../components/DisplayImages"
import Pagination from "../components/Pagination"
import { useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"
import { Typography } from "antd"
import Loading from "../components/Loading"
const { Title } = Typography

const Resultspage = () => {
  const [page, setPage] = useState(1)
  const [resTitle, setResTitle] = useState("")

  const location = useLocation()
  const params = location.search

  const newQuery = (string, char) => {
    return string.replace(char, "")
  }
  const newUrl = newQuery(params, "?q=")

  const getResults = async () => {
    const accessKey = "39557967-641c71b10620958e9f7a3eab9"
    const url = `https://pixabay.com/api/?key=${accessKey}&q=${newQuery(
      params,
      "?q="
    )}&page=${page}&per_page=20`
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      throw new Error("error get results " + error.message)
    }
  }

  const { data, isLoading, refetch } = useQuery(["search"], getResults)

  useEffect(() => {
    setResTitle(newUrl.replace(/%20/g, " "))
    if (resTitle !== newUrl.replace(/%20/g, " ")) {
      setPage(1)
    }

    refetch()
  }, [data, params, page, resTitle])

  const nextPage = () => {
    setPage(page + 1)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 500)
  }

  const prevPage = () => {
    setPage(page - 1)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 500)
  }

  const formattedNumber = (number) => {
    return number.toLocaleString("id-ID", {
      style: "decimal",
      useGrouping: true,
    })
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {data?.hits?.length > 1 ? (
            <div style={{ marginTop: "25px" }}>
              <div style={{ marginRight: "10px", marginLeft: "10px" }}>
                <Title>
                  {formattedNumber(data.total)} Free Images For{" "}
                  {newUrl.replace(/%20/g, " ").toUpperCase()}
                </Title>
              </div>

              <DisplayImages images={data.hits} />
              <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />
            </div>
          ) : (
            <div style={{ height: "100vh" }}>
              <Title>No Results Found</Title>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Resultspage
