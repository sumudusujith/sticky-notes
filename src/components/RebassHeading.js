import React from "react";
import { Heading } from "rebass";

export const RebassHeading = ({
  name,
  value,
  fontSize,
  textAlign,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontFamily,
  color,
}) => {
  return (
    <Heading
      fontSize={fontSize}
      textAlign={textAlign}
      mt={marginTop}
      mb={marginBottom}
      ml={marginLeft}
      mr={marginRight}
      fontFamily={fontFamily}
      color={color}
    >
      {value}
    </Heading>
  );
};
