import React from "react"
import { Carousel, Typography } from "antd"

const { Title } = Typography

const Jumbotron = () => {
  return (
    <>
      <Carousel>
        <div className="hero-image">
          <div className="hero-content">
            <Title level={2}>
              Stunning royalty-free images & royalty-free stock
            </Title>
            <Title level={5} style={{ color: "#fff" }}>
              Over 4.1 million+ high quality stock images by our talented
              community.
            </Title>
          </div>
        </div>
      </Carousel>
    </>
  )
}
export default Jumbotron
