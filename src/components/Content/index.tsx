// modules
import React, { SetStateAction } from "react";
import Fuse from "fuse.js";

// components
import SearchInput from "../SearchInput";
import Table from "../Table";
import SelectedCar from "../SelectedCar";

// api
import { onGetCars } from "../../api";

const Content: React.FC = () => {
  const [selectedCar, setSelectedCar] = React.useState(null);
  const [defaultCars, setDefaultCars] = React.useState([]);
  const [filteredCars, setFilteredCars] = React.useState([]);
  const [tariffs, setTariffs] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const onSearchValue = (value: string) => {
    setInputValue(value);
  };

  const handlerSelectCar = (car: SetStateAction<null>) => {
    setSelectedCar(car);
  };

  React.useEffect(() => {
    const carsLoader = async () => {
      const { data } = await onGetCars();
      setDefaultCars(data.cars);
      setFilteredCars(data.cars);
      setTariffs(data.tariffs_list);
    };
    carsLoader();
  }, []);

  const options = {
    minMatchCharLength: 2,
    keys: ["mark", "model"],
  };
  const fuse = new Fuse(defaultCars, options);

  function filterCars() {
    if (inputValue) {
      const result = fuse.search(inputValue);
      setFilteredCars(result.map((item) => item.item));
    } else {
      setFilteredCars(defaultCars);
    }
  }

  return (
    <div className="main">
      <div className="main-content">
        <SearchInput
          inputValue={inputValue}
          onSearchValue={onSearchValue}
          filterCars={filterCars}
        />
        <Table
          cars={filteredCars}
          tariffs={tariffs}
          handlerSelectCar={handlerSelectCar}
        />
      </div>
      <div className="car-dedicated">
        <SelectedCar car={selectedCar} />
      </div>
    </div>
  );
};

export default Content;
