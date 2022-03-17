import React from "react";

type Props = {
  eduStyle: string;
  infoText: string;
};

const education = (props: Props) => (
  <li className={props.eduStyle}>{props.infoText}</li>
);

export default education;
