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
export declare type InspectionCreateFormInputValues = {
    imageS3Url?: string;
    inspModelTS?: number;
    inspManualTS?: number;
    inspModelClass?: string;
    inspManualClass?: string;
    inspModelConf?: number;
};
export declare type InspectionCreateFormValidationValues = {
    imageS3Url?: ValidationFunction<string>;
    inspModelTS?: ValidationFunction<number>;
    inspManualTS?: ValidationFunction<number>;
    inspModelClass?: ValidationFunction<string>;
    inspManualClass?: ValidationFunction<string>;
    inspModelConf?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InspectionCreateFormOverridesProps = {
    InspectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imageS3Url?: PrimitiveOverrideProps<TextFieldProps>;
    inspModelTS?: PrimitiveOverrideProps<TextFieldProps>;
    inspManualTS?: PrimitiveOverrideProps<TextFieldProps>;
    inspModelClass?: PrimitiveOverrideProps<SelectFieldProps>;
    inspManualClass?: PrimitiveOverrideProps<SelectFieldProps>;
    inspModelConf?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InspectionCreateFormProps = React.PropsWithChildren<{
    overrides?: InspectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InspectionCreateFormInputValues) => InspectionCreateFormInputValues;
    onSuccess?: (fields: InspectionCreateFormInputValues) => void;
    onError?: (fields: InspectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InspectionCreateFormInputValues) => InspectionCreateFormInputValues;
    onValidate?: InspectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function InspectionCreateForm(props: InspectionCreateFormProps): React.ReactElement;
