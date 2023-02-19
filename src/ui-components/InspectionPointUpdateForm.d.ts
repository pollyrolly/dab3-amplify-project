/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { InspectionPoint } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InspectionPointUpdateFormInputValues = {
    model?: string;
    modelDeployed?: number;
    inspModus?: string;
};
export declare type InspectionPointUpdateFormValidationValues = {
    model?: ValidationFunction<string>;
    modelDeployed?: ValidationFunction<number>;
    inspModus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InspectionPointUpdateFormOverridesProps = {
    InspectionPointUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    modelDeployed?: PrimitiveOverrideProps<TextFieldProps>;
    inspModus?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type InspectionPointUpdateFormProps = React.PropsWithChildren<{
    overrides?: InspectionPointUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    inspectionPoint?: InspectionPoint;
    onSubmit?: (fields: InspectionPointUpdateFormInputValues) => InspectionPointUpdateFormInputValues;
    onSuccess?: (fields: InspectionPointUpdateFormInputValues) => void;
    onError?: (fields: InspectionPointUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InspectionPointUpdateFormInputValues) => InspectionPointUpdateFormInputValues;
    onValidate?: InspectionPointUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InspectionPointUpdateForm(props: InspectionPointUpdateFormProps): React.ReactElement;
