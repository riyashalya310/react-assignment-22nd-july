import "./App.css";
import BecomeACCA from "./components/BecomeACCA";
import LastComponent from "./components/LastComponent";
import Navbar from "./components/Navbar";
import PlacementAssistance from "./components/PlacementAssistance";
import WhatWillYouLearn from "./components/WhatWillYouLearn";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Navbar />
          <BecomeACCA/>
          <WhyChooseUs/>
          <WhatWillYouLearn/>
          <PlacementAssistance/>
          <LastComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
