import React from "react";
import { PersonProps } from "./Person.types";

export default function Person({name}: PersonProps) {
  return <div>{name.firstName} {name.lastName}</div>;
}
