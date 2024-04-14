import React from "react";
import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};
export default function PersonList({names}: PersonListProps) {
  return (
    <div>
      {names.map((name, _i) => {
        return (
          <h2 key={_i}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
}
