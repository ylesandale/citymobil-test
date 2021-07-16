// modules
import React from "react";

interface SearchInputProps {
  inputValue: string;
  onSearchValue(value: string): void;
  filterCars(): void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearchValue,
  inputValue,
  filterCars,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="input-group mb-3">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Поиск"
        value={inputValue}
        onChange={(e) => onSearchValue(e.target.value)}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary search-button"
          type="submit"
          onClick={filterCars}
        >
          Найти
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
