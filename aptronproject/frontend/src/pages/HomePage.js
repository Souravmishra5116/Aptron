import React from "react";
import { Layout } from "../component/Layout";
import { useAuth } from "../context/auth";

export const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      {/* {<pre>{JSON.stringify(auth, null)}</pre>} */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../images/home1.jpg"
              className="d-block w-100"
              height="520px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/home4.jpg"
              className="d-block w-100"
              height="520px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/home5.jpg"
              className="d-block w-100"
              height="520px"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  );
};
