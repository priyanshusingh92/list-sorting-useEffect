import { Fragment } from "react";

export const ListItem = (props) => {
  return (
    <Fragment>
      <p> {props.product.name}</p>
      <p> {props.product.price}</p>
    </Fragment>
  );
};
