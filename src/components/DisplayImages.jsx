import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import Imagespreview from "./Imagespreview"

const DisplayImages = (props) => {
  const { images } = props

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{ margin: "10px" }}
      >
        <Masonry gutter="10px">
          {images?.map((image, index) => (
            <LazyLoadComponent key={index}>
              <Imagespreview image={image} />
            </LazyLoadComponent>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}

export default DisplayImages
