"use client";
import React, { useEffect, useState } from "react";
import Select, { ActionMeta, MultiValue, Options } from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
export type OptionType = { value: string; label: string };

type MultiSelectProps = {
  options: Options<OptionType>;
  onChange: (
    option: readonly OptionType[],
    actionMeta: ActionMeta<OptionType>,
  ) => void;
  defaultValue?: OptionType[];
};

export const MultiSelect = ({
  options,
  onChange,
  defaultValue,
}: MultiSelectProps) => {
  const [isMounted, setIsMounted] = useState(false);

  // Must be deleted once
  // https://github.com/JedWatson/react-select/issues/5459 is fixed.
  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Select
      closeMenuOnSelect
      components={animatedComponents}
      isMulti
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
      className="text-black"
    />
  ) : null;
};
