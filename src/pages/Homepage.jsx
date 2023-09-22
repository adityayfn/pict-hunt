import { useState } from "react"
import axios from "axios"

import Jumbotron from "../components/Jumbotron"
import DisplayImages from "../components/DisplayImages"
import { useQuery } from "@tanstack/react-query"
import Pagination from "../components/Pagination"
import NavGroup from "../components/NavGroup"

import Loading from "../components/Loading"

const Homepage = () => {
  const [page, setPage] = useState(1)

  const getAllImages = async () => {
    const accessKey = import.meta.env.VITE_ACCESS_KEY
    const url = `https://pixabay.com/api/?key=${accessKey}&q=mountain&page=${page}&per_page=20`
    const res = await axios.get(url)
    return res.data
  }
  const { data, isLoading } = useQuery({
    queryKey: ["images", page],
    queryFn: getAllImages,
    keepPreviousData: true,
  })

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

  return (
    <>
      <div>
        <Jumbotron />

        <NavGroup />

        {isLoading ? <Loading /> : <DisplayImages images={data?.hits} />}

        <Pagination prevPage={prevPage} nextPage={nextPage} page={page} />
      </div>
    </>
  )
}

export default Homepage
