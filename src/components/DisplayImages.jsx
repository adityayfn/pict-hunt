import { useState, useRef } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ModalImage from "./ModalImage"

const DisplayImages = (props) => {
  const { images } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  const detailImageRef = useRef(null)

  const showModal = (image) => {
    setIsModalOpen(true)
    detailImageRef.current = image
  }

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{ margin: "10px" }}
      >
        <Masonry gutter="10px">
          {images?.map((image, index) => (
            <img
              key={index}
              src={image.webformatURL}
              alt={image.pageURL}
              onClick={() => showModal(image)}
              loading="lazy"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <ModalImage
        detailImageRef={detailImageRef}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  )
}

export default DisplayImages
