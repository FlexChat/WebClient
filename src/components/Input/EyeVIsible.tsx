import React, { useCallback } from "react";
import Visible from "assets/images/visiblity-visible.svg";
import Hidden from "assets/images/visibility-hidden.svg";
import { Button } from "./style";

interface Props {
  type: "password" | "text" | "email";
  setType: Function;
}

const EyeVisible: React.FC<Props> = ({ type, setType }) => {
  const handleClick = useCallback(() => setType(type === "password" ? "text" : "password"), [type]);
  return (
    <Button onClick={handleClick} type="button" tabIndex={-1}>
      {type === "text" && <img src={Visible} alt="tooltip" width="20" height="20" />}
      {type === "password" && <img src={Hidden} alt="tooltip" width="20" height="20" />}
    </Button>
  );
};

export default EyeVisible;
