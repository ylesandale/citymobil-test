// modules
import React from "react";

// img
import arrow from "../../img/arrow.svg";

// types
import { Car } from "../../types";

interface TableProps {
  handlerSelectCar(car: any): void;
  cars: Car[];
  tariffs: string[];
}

const Table: React.FC<TableProps> = ({ handlerSelectCar, cars, tariffs }) => {
  const [alphabetOrder, setAlphabetOrder] = React.useState(false);
  const [sortCars, setSortCars] = React.useState<any[]>([]);

  React.useEffect(() => {
    setSortCars(cars);
  }, [cars]);

  function sortTable() {
    return function (a: Car, b: Car) {
      if (!alphabetOrder) {
        return b["mark"].localeCompare(a["mark"]);
      } else {
        return a["mark"].localeCompare(b["mark"]);
      }
    };
  }
  const onSortTable = () => {
    setSortCars(cars.sort(sortTable()));
    setAlphabetOrder(!alphabetOrder);
  };

  function getArrowDirection() {
    if (!alphabetOrder) {
      return "img-pointer-fw";
    } else {
      return "img-pointer-bc";
    }
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th onClick={onSortTable} scope="col" className="pointer">
            Марка и модель
            <img className={getArrowDirection()} src={arrow} alt="arrow" />
          </th>
          {tariffs &&
            tariffs.map((item, index) => (
              <th key={index + 1} scope="col">
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {sortCars.map((item, index) => (
          <tr onClick={() => handlerSelectCar(item)} key={index + 1}>
            <td>{`${item.mark} ${item.model}`}</td>
            {item.tariffs["Стандарт"] ? (
              <td>{item.tariffs["Стандарт"].year}</td>
            ) : (
              <td>—</td>
            )}
            {item.tariffs["Комфорт"] ? (
              <td>{item.tariffs["Комфорт"].year}</td>
            ) : (
              <td>—</td>
            )}
            {item.tariffs["Бизнес"] ? (
              <td>{item.tariffs["Бизнес"].year}</td>
            ) : (
              <td>—</td>
            )}
            {item.tariffs["Комфорт+"] ? (
              <td>{item.tariffs["Комфорт+"].year}</td>
            ) : (
              <td>—</td>
            )}
            {item.tariffs["Эконом"] ? (
              <td>{item.tariffs["Эконом"].year}</td>
            ) : (
              <td>—</td>
            )}
            {item.tariffs["Минивен"] ? (
              <td>{item.tariffs["Минивен"].year}</td>
            ) : (
              <td>—</td>
            )}
            {item.tariffs["Лайт"] ? (
              <td>{item.tariffs["Лайт"].year}</td>
            ) : (
              <td>—</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
