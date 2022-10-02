import G1 from "../resources/images/1.jpg"
import G2 from "../resources/images/2.png"
import G3 from "../resources/images/3.png"
import G4 from "../resources/images/4.jpg"
import G5 from "../resources/images/5.jpg";
import G6 from "../resources/images/g6.jpg";

import G7 from "../resources/images/g7.jpg";
import G9 from "../resources/images/g9.png";
const Hero =() =>{
return (
  <>
    <section>
      <div class="row">
        <div class="column">
          <img src={G1} className="w-60 rad-10 " />
          <img src={G2} className="w-60 mb-25 mt-35 rad-10 " />
          <img src={G3} className="w-60 rad-10" />
          <img src={G7} className="w-60 rad-10" />
        </div>
        <div class="column">
          <img src={G4} className="w-60 rad-10" />
          <img src={G5} className="w-60 mb-25 mt-35 rad-10 " />
          <img src={G6} className="w-60 rad-10" />
          <img src={G9} className="w-60 rad-10" />
        </div>
      </div>
    </section>
    <div className="title">
      <h2>Experiences</h2>
      <h3>React Js FrontEnd</h3>
    </div>
  </>
);
}
export default Hero;