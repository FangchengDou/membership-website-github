/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Persuade(props) {
  const { banner, handleClick, overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      direction="column"
      width="1110px"
      height="864px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="24px"
      padding="70px 0px 70px 0px"
      backgroundColor="rgba(17,35,49,1)"
      {...getOverrideProps(overrides, "Persuade")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="50px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="801px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Become a member to get unlimited access to articles on how to solve technical problems"
        {...getOverrideProps(
          overrides,
          "Become a member to get unlimited access to articles on how to solve technical problems"
        )}
      ></Text>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Become a Member"
        onClick={handleClick}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Image
        width="930px"
        height="455px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(126,128,131,0.38)"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        src={banner}
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
    </Flex>
  );
}
