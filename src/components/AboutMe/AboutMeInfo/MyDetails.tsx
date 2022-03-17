import React from "react";
type Props = {
  detailText: string,
};

const myDetails = (props: Props) => <p>{props.detailText}</p>;

export default myDetails;
