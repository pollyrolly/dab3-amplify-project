/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Model } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ModelUpdateFormInputValues = {
    name?: string;
    version?: string;
};
export declare type ModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    version?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModelUpdateFormOverridesProps = {
    ModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    version?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: ModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    model?: Model;
    onSubmit?: (fields: ModelUpdateFormInputValues) => ModelUpdateFormInputValues;
    onSuccess?: (fields: ModelUpdateFormInputValues) => void;
    onError?: (fields: ModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ModelUpdateFormInputValues) => ModelUpdateFormInputValues;
    onValidate?: ModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ModelUpdateForm(props: ModelUpdateFormProps): React.ReactElement;
