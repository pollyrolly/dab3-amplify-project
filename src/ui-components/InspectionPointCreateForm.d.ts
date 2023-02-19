/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InspectionPointCreateFormInputValues = {
    model?: string;
    modelDeployed?: number;
    inspModus?: string;
};
export declare type InspectionPointCreateFormValidationValues = {
    model?: ValidationFunction<string>;
    modelDeployed?: ValidationFunction<number>;
    inspModus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InspectionPointCreateFormOverridesProps = {
    InspectionPointCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    modelDeployed?: PrimitiveOverrideProps<TextFieldProps>;
    inspModus?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type InspectionPointCreateFormProps = React.PropsWithChildren<{
    overrides?: InspectionPointCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InspectionPointCreateFormInputValues) => InspectionPointCreateFormInputValues;
    onSuccess?: (fields: InspectionPointCreateFormInputValues) => void;
    onError?: (fields: InspectionPointCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InspectionPointCreateFormInputValues) => InspectionPointCreateFormInputValues;
    onValidate?: InspectionPointCreateFormValidationValues;
} & React.CSSProperties>;
export default function InspectionPointCreateForm(props: InspectionPointCreateFormProps): React.ReactElement;
