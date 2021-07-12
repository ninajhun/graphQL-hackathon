import React from "react";
import "./landing-page.css";

export default function LandingPage(props) {
  const { setView } = props;
  function changeView() {
    setView("dashBoard");
  }

  return (
    <>
      <div className="container-fluid p-5">
        <h3 className="mt-5">Welcome to The Pointless Dashboard!</h3>
        <h1 className="emoji-large mb-4">&#128640; &#128021; &#128640; </h1>
        <h6>The last dashboard you'll NEVER need...</h6>
        <h6 className="mb-5">(unless you're feeling bored)</h6>
      </div>

      <div className="container-fluid p-5" style={{ color: "red" }}>
        <h2 onClick={changeView} className="click-app">
          <span>
            <img src="img/arrow.png" className="icon-landing" alt="..."></img>
          </span>{" "}
          Click here to check it out!
        </h2>
      </div>

      <div className="container-fluid p-5">
        <h6 className="p-5">Created by...</h6>
        <div className="d-flex justify-content-center flex-wrap ">
          <div className="col-lg-3 col-md-3 col-sm-12 mb-5">
            <img
              src="img/nina.jpg"
              className="thumbnail-landing"
              alt="..."
            ></img>
            <h6 className="mt-1">Nina</h6>
            <a
              href="https://github.com/ninajhun"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
              </svg>
            </a>
            <span> </span>

            <a
              href="https://www.linkedin.com/in/ninajhunjhnuwala/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 mb-5">
            <img
              src="img/jerry.jpeg"
              className="thumbnail-landing"
              alt="..."
            ></img>
            <h6 className="mt-1">Jerry</h6>
            <a
              href="https://github.com/jerryong89"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
              </svg>
            </a>
            <span> </span>

            <a
              href="https://www.linkedin.com/in/jerryong89/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 mb-5">
            <img
              src="img/chris.jpeg"
              className="thumbnail-landing"
              alt="..."
            ></img>
            <h6 className="mt-1">Chris</h6>
            <a
              href="https://github.com/ChrisGitmed"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
              </svg>
            </a>
            <span> </span>

            <a
              href="https://www.linkedin.com/in/christopher-gitmed/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 d-flex justify-content-around align-items-center flex-wrap">
        <div className="col-lg-7  col-md-7 col-sm-12">
          <img
            className="img-landing img-thumbnail"
            src="img/preview.png"
            alt="..."
          ></img>
        </div>
        <div className="col-lg-4 col-md-7 col-sm-12 ml-3">
          <h3>About the The Pointless Dashboard App!</h3>
          <p className="text-start">
            This application was created for the MintBean GraphQL hackathon
            (feat. the amazing team @ StepZen!). We thought the best way to
            learn GraphQL was to just make as many API queries as possible so we
            could practice! The result is this pointless dashboard that is well,
            pointless... but if you're wondering where your next cup of coffee
            is coming from or what's the weather is like in your area, we got
            you!
          </p>
          <p className="text-start">
            <strong>The nitty gritty:</strong> React.js and Bootstrap 4 was used
            to create the front-end. StepZen converts our REST API endpoints
            into GraphQL endpoints then we used GraphQL to query our APIs and
            fetch the data necessary to populate our widgets.
          </p>
        </div>
      </div>

      <div className="container-fluid p-5">
        <h3>Technologies Used</h3>
        <li>React.js</li>
        <li>GraphQL</li>
        <li>StepZen</li>
        <li>BootStrap 4</li>
        <li>CSS</li>
      </div>

      <div className="container-fluid p-5 d-flex align-items-end">
        <div className="col-1">
          {" "}
          <span className="emoji-landing"> &#128588;</span>
        </div>

        <div className="col-10">
          <h5 style={{ color: "red" }}>
            Thank you to{" "}
            <a href="https://mintbean.io/" target="_blank" rel="noreferrer">
              MintBean
            </a>{" "}
            and{" "}
            <a href="https://stepzen.com/" target="_blank" rel="noreferrer">
              StepZen
            </a>{" "}
            for hosting the hackathon that inspired this project!
          </h5>
        </div>
        <div className="col-1">
          <span className="emoji-landing"> &#128588;</span>
        </div>
      </div>
    </>
  );
}
