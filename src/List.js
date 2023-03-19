import React, { Fragment } from "react";
import { ListItem } from "./ListItem";

const List = (props) => {
  return (
    <Fragment>
      Count - {props.products.length}
      {props.products.map((product) => (
        <ListItem key={product.description} product={product} />
      ))}
    </Fragment>
  );
};

export default React.memo(List);
