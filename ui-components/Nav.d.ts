/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavOverridesProps = {
    Nav?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    User36473262?: PrimitiveOverrideProps<FlexProps>;
    User36473263?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    "Group 6027"?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<IconProps>;
    C?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavOverridesProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;
