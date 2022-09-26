import carousel1 from "./img/carousel1.jpg"
import carousel2 from "./img/carousel2.jpg"
import carousel3 from "./img/carousel3.jpg"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Inicio.scss"

const Inicio = () => {
    return (
      <div className="contenedor">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid img-car" src={carousel1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid img-car" src={carousel2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img-fluid img-car" src={carousel3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="d-md-inline-flex p-inicio">
          <div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, praesentium laborum libero unde voluptatibus ipsum quisquam accusantium eum blanditiis harum, perferendis voluptatum, necessitatibus quas porro. Rem porro deleniti doloremque dolore tempore eius saepe! Suscipit quibusdam non nam fugiat, soluta nisi quos expedita dolor voluptatem eos, nemo alias maiores, modi rerum quam. Ab dicta laborum praesentium tenetur labore cumque, quisquam quo soluta illo necessitatibus inventore repellendus fuga accusamus! Eos porro sapiente amet temporibus perferendis nostrum ipsam veritatis iusto consequatur velit.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, praesentium laborum libero unde voluptatibus ipsum quisquam accusantium eum blanditiis harum, perferendis voluptatum, necessitatibus quas porro. Rem porro deleniti doloremque dolore tempore eius saepe! Suscipit quibusdam non nam fugiat, soluta nisi quos expedita dolor voluptatem eos, nemo alias maiores, modi rerum quam. Ab dicta laborum praesentium tenetur labore cumque, quisquam quo soluta illo necessitatibus inventore repellendus fuga accusamus! Eos porro sapiente amet temporibus perferendis nostrum ipsam veritatis iusto consequatur velit.
            </p>
          </div>
          <div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, praesentium laborum libero unde voluptatibus ipsum quisquam accusantium eum blanditiis harum, perferendis voluptatum, necessitatibus quas porro. Rem porro deleniti doloremque dolore tempore eius saepe! Suscipit quibusdam non nam fugiat, soluta nisi quos expedita dolor voluptatem eos, nemo alias maiores, modi rerum quam. Ab dicta laborum praesentium tenetur labore cumque, quisquam quo soluta illo necessitatibus inventore repellendus fuga accusamus! Eos porro sapiente amet temporibus perferendis nostrum ipsam veritatis iusto consequatur velit.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, praesentium laborum libero unde voluptatibus ipsum quisquam accusantium eum blanditiis harum, perferendis voluptatum, necessitatibus quas porro. Rem porro deleniti doloremque dolore tempore eius saepe! Suscipit quibusdam non nam fugiat, soluta nisi quos expedita dolor voluptatem eos, nemo alias maiores, modi rerum quam. Ab dicta laborum praesentium tenetur labore cumque, quisquam quo soluta illo necessitatibus inventore repellendus fuga accusamus! Eos porro sapiente amet temporibus perferendis nostrum ipsam veritatis iusto consequatur velit.
            </p>
          </div>            
        </div>
    </div>
    )
}

export default Inicio