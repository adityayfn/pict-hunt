import { Button, Row, Col } from "antd"
import { NavLink } from "react-router-dom"
const NavGroup = () => {
  return (
    <>
      <Row justify={"center"}>
        <Col xs={6} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=nature"}>Nature</NavLink>
          </Button>
        </Col>
        <Col xs={6} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=camp"}>Camp</NavLink>
          </Button>
        </Col>

        <Col xs={6} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=cloud"}>Cloud</NavLink>
          </Button>
        </Col>

        <Col xs={6} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=food"}>Food</NavLink>
          </Button>
        </Col>
        <Col xs={0} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=sky"}>Sky</NavLink>
          </Button>
        </Col>
        <Col xs={0} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=city"}>City</NavLink>
          </Button>
        </Col>
        <Col xs={0} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=keyboard"}>Keyboard</NavLink>
          </Button>
        </Col>
        <Col xs={0} sm={3} md={2}>
          <Button>
            <NavLink to={"/search?q=wallpaper"}>Wallpaper</NavLink>
          </Button>
        </Col>
        <Col xs={0} sm={0} md={2}>
          <Button>
            <NavLink to={"/search?q=background"}>Background</NavLink>
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default NavGroup
