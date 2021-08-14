import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import BounceMessage from "../shared/BounceMessage";

type Animation = "bounceUp" | "bounceDown";

interface BounceArrowMessageProps {
  icon: IconDefinition;
  message: string;
  animation: Animation;
}

const BounceArrowMessage: React.FC<BounceArrowMessageProps> = ({
  icon,
  message,
  animation,
}): React.ReactElement => {
  return (
    <BounceMessage animation={animation}>
      {message}
      <FontAwesomeIcon className={"arrow"} icon={icon} />
    </BounceMessage>
  );
};

export default BounceArrowMessage;
