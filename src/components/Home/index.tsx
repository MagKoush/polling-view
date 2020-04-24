import * as React from "react";

export interface Props {
  name: string;
}

export default function Hello(props: Props) {
  return <h1>Hello from {props.name}!</h1>;
}
