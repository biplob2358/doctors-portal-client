import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import background from "../../../assets/images/bg.png";

const AppoinmentBanner = ({ selecetedDate, setSeleceteDate }) => {
  return (
    <header
      className="my-6"
      style={{
        width: "100%",
        height: "550px",

        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm lg:w-1/2  rounded-lg shadow-2xl"
            alt=""
          />
          <div className="mr-6 ">
            <DayPicker
              mode="single"
              selected={selecetedDate}
              onSelect={setSeleceteDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
