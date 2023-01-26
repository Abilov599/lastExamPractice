import React from "react";
import Cards from "../../components/teacher-cards";
import "./index.scss";

const Home = () => {
  return (
    <main>
      <div className="top-section">
        <div className="content">
          <div className="left-div">
            <h1>Learn From The Expert</h1>
            <p>
              Learn From The Expert Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas
              necessitatibus.
            </p>
            <span>
              <button>ADMISSION NOW</button>
            </span>
          </div>
          <div className="right-div">
            <h1>Sign Up</h1>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Re-type Password" />
            <span>
              <button>SIGN UP</button>
            </span>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div className="container">
          <div className="head-text">
            <h1>Our Programs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repellat aut neque! Doloribus sunt non aut reiciendis, vel
              recusandae obcaecati hic dicta repudiandae in quas quibusdam
              ullam, illum sed veniam!
            </p>
          </div>
          <div className="top-content">
            <div className="left-content">
              <img
                src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg"
                alt=""
              />
            </div>
            <div className="right-content">
              <h1>We Are Excellent In Education</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                maxime nam porro possimus fugiat quo molestiae illo.
              </p>
              <div>
                <span>22,931 Yearly Graduates</span>
              </div>
              <div>
                <span>150 Universities Worldwide</span>
              </div>
            </div>
          </div>
          <div className="bottom-content">
            <div className="left-content">
              <img
                src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg"
                alt=""
              />
            </div>
            <div className="right-content">
              <h1>We Are Excellent In Education</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                maxime nam porro possimus fugiat quo molestiae illo.
              </p>
              <div>
                <span>22,931 Yearly Graduates</span>
              </div>
              <div>
                <span>150 Universities Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="container">
          <div className="head-text">
            <h1>Our Teachers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repellat aut neque! Doloribus sunt non aut reiciendis, vel
              recusandae obcaecati hic dicta repudiandae in quas quibusdam
              ullam, illum sed veniam!
            </p>
          </div>
          <Cards />
        </div>
      </div>
      <div className="message-section">
        <div className="container">
          <div className="head-text">
            <h1>Message us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repellat aut neque! Doloribus sunt non aut reiciendis, vel
              recusandae obcaecati hic dicta repudiandae in quas quibusdam
              ullam, illum sed veniam!
            </p>
          </div>
          <div className="form">
            <form action="">
              <div className="fullname-input">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Subject" />
              <input type="email" placeholder="Email" />
              <textarea
                placeholder="Write your message here."
                name=""
                id=""
                cols="30"
                rows="10"
              />
              <div className="btn">
                <button>SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
