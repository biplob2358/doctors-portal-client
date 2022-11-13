import React, { useState } from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  const [selecetedDate, setSeleceteDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selecetedDate={selecetedDate}
        setSeleceteDate={setSeleceteDate}
      ></AppoinmentBanner>
      <AvailableAppoinments
        selecetedDate={selecetedDate}
      ></AvailableAppoinments>
    </div>
  );
};

export default Appoinment;
