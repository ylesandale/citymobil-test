// modules
import React from "react";

// types
import { Car } from "../../types";

interface SelectedCarProps {
  car: Car | null;
}

const SelectedCar: React.FC<SelectedCarProps> = ({ car }) => {
  return (
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      value={
        car
          ? `Выбран автомобиль ${car.mark} ${car.model} 2005 года выпуска`
          : "Машина не выбрана"
      }
      readOnly
    ></textarea>
  );
};

export default SelectedCar;
