import { Spin } from "antd"
const Loading = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    </>
  )
}

export default Loading
