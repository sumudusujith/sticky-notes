import React from "react";
import { Text } from "rebass";

export const RebassLabel = ({
  name,
  value,
  fontSize,
  fontWeight,
  fontFamily,
  marginBottom,
  htmlFor,
  textAlign,
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      mb={marginBottom}
      htmlFor={htmlFor}
      textAlign={textAlign}
    >
      
      {value}
    </Text>
  );
};
