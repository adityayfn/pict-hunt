import { Outlet } from "react-router-dom"
import { Layout, Space } from "antd"
import HeaderItem from "../components/HeaderItem"
const { Header, Content, Footer } = Layout
const headerStyle = {
  color: "#fff",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#191717",
}
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#F1EFEF",
  overflow: "hidden",
}
const footerStyle = {
  textAlign: "center",
  color: "#000",
  backgroundColor: "#F1EFEF",
}

const RootLayout = () => {
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header style={headerStyle}>
            <HeaderItem />
          </Header>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
          <Footer style={footerStyle}>
            <span className="nav-title">PictHunt {""}</span>
            ©2023 Image Source From Pixabay
          </Footer>
        </Layout>
      </Space>
    </>
  )
}

export default RootLayout
