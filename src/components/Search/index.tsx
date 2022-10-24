/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from "./Search.module.scss";

import { useRef } from "react";
import { useState, useCallback } from "react";

import debounce from "lodash.debounce";

import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((string: string) => {
     dispatch( setSearchValue(string));
    }, 150),
    [dispatch]
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <BsSearch className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && <GrClose onClick={onClickClear} className={styles.clearIcon} />}
    </div>
  );
};

export default Search;
