import Profile1 from "../resources/images/profile1.png";
import Profile6 from "../resources/images/p8.png";

import Profile2 from "../resources/images/p2.png"
import Profile3 from "../resources/images/profile3.png"

import Profile4 from "../resources/images/p1.png"
import Profile5 from "../resources/images/p3.png"



const Details = () => {
  return (
    <>
      <article>
        <div className="details">
          <div className="details-p">
            <img src={Profile1} alt="Profile" />
            <p>26th September,2021</p>
            <h4>
              I Used The Web For A Day On A <br /> 50 MB Budget
            </h4>
            <p>Html , Css </p>
            <i class="fa-solid fa-arrow-right"></i>{" "}
          </div>

          <div className="details-p">
            <img src={Profile6} alt="Profile2" />
            <p>26th October,2021</p>
            <h4>
              I Used The Web For A Day On A <br /> 50 MB Budget
            </h4>
            <p>Html , Css </p>
            <i class="fa-solid fa-arrow-right"></i>{" "}
          </div>

          <div className="details-p">
            <img src={Profile3} alt="Profile2" />
            <p>20th July,2022</p>
            <h4>
              I Used The Web For A Day On A <br /> 50 MB Budget
            </h4>
            <p>Html , Css </p>
            <i class="fa-solid fa-arrow-right"></i>{" "}
          </div>
        </div>
        {/*  */}
        <div className="details">
          <div className="details-p">
            <img src={Profile4} alt="Profile" />
            <p>25th August,2022</p>
            <h4>
              I Used The Web For A Day On A <br /> 50 MB Budget
            </h4>
            <p>Html , Css ,React Js </p>
            <i class="fa-solid fa-arrow-right"></i>{" "}
          </div>

          <div className="details-p">
            <img src={Profile5} alt="Profile3" />
            <p>26th September,2022</p>
            <h4>
              I Used The Web For A Day On A <br /> 50 MB Budget
            </h4>
            <p>Html , Css ,React Js</p>
            <i class="fa-solid fa-arrow-right"></i>{" "}
          </div>
          <div className="details-p">
            <img src={Profile2} alt="Profile3" />
            <p>2th October,2022</p>
            <h4>
              I Used The Web For A Day On A <br /> 50 MB Budget
            </h4>
            <p>Html , Css ,React Js</p>
            <i class="fa-solid fa-arrow-right"></i>{" "}
          </div>
        </div>
      </article>
    </>
  );
};
export default Details;
