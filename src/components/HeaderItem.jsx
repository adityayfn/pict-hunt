import { Col, Row, Input, Typography } from "antd"
import { useContext } from "react"

import { useNavigate } from "react-router-dom"

import { GlobalContext } from "../context"
import { NavLink } from "react-router-dom"

const { Title } = Typography

const { Search } = Input

const HeaderItem = () => {
  const { searchQuery, setSearchQuery } = useContext(GlobalContext)

  const navigate = useNavigate()

  const handleSearch = async () => {
    navigate(`/search?q=${searchQuery}`)
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Title level={2} style={{ marginTop: "15px" }}>
            <NavLink to="/" className="nav-title">
              PictHunt
            </NavLink>
          </Title>
        </Col>
        <Col span={12}>
          <Search
            style={{ marginTop: "15px" }}
            placeholder="search image"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={handleSearch}
          />
        </Col>
      </Row>
    </>
  )
}

export default HeaderItem
