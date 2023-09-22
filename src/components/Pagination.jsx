import { Row, Col, Button } from "antd"
const Pagination = (props) => {
  const { prevPage, nextPage, page } = props
  return (
    <Row justify={"center"}>
      <Col span={4}>
        <Button onClick={prevPage} disabled={page === 1}>
          Prev
        </Button>
      </Col>
      <Col>
        <h1>{page}</h1>
      </Col>

      <Col span={4}>
        <Button onClick={nextPage}>Next</Button>
      </Col>
    </Row>
  )
}
export default Pagination
