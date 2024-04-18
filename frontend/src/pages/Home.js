import React, { useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";

function Home() {


  return (
    <div>
      <img src=" https://res.cloudinary.com/dvc52xluq/image/upload/v1711494833/360_F_489280525_nISHfaWCctYBFlyYkTQUkzQwVOPWmyvp_xlql62.jpg" className="home-banner" />
      <div className="featured-products-container container mt-4">
        <h2>Last products</h2>
        {/* last products here */}
        <div className='d-flex justify-content-center flex-wrap'>
         
        </div>
        <div>
            <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
            See more {">>"}
             </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="sale__banner--container mt-4">
          <img src="https://res.cloudinary.com/dvc52xluq/image/upload/v1711495522/63456144e2c5a500112d6fca_ci8xcm.jpg" />
      </div>
      <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer key={category.id} to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
    </div>


  )
}

export default Home;