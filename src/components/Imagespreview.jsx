import {
  DownloadOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons"

import { Image, Space } from "antd"

const iconStyle = {
  fontSize: "2rem",

  padding: "5px",
  backgroundColor: "#1677FF",
}

const Imagespreview = (props) => {
  const { image } = props

  const onDownload = () => {
    fetch(image.largeImageURL)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]))
        const link = document.createElement("a")
        link.href = url
        link.download = "image.png"
        document.body.appendChild(link)
        link.click()
        URL.revokeObjectURL(url)
        link.remove()
      })
  }

  return (
    <>
      <Image
        src={image.webformatURL}
        preview={{
          src: image.largeImageURL,
          toolbarRender: (
            _,
            { transform: { scale }, actions: { onZoomOut, onZoomIn } }
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <DownloadOutlined onClick={onDownload} style={iconStyle} />

              <ZoomOutOutlined
                disabled={scale === 1}
                onClick={onZoomOut}
                style={iconStyle}
              />
              <ZoomInOutlined
                disabled={scale === 50}
                onClick={onZoomIn}
                style={iconStyle}
              />
            </Space>
          ),
        }}
      />
    </>
  )
}
export default Imagespreview
