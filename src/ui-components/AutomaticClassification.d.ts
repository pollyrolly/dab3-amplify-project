/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Inspection } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AutomaticClassificationInputValues = {
    imageS3Url?: string;
    inspModelTS?: number;
    inspManualTS?: number;
    inspModelClass?: string;
    inspManualClass?: string;
    inspModelConf?: number;
};
export declare type AutomaticClassificationValidationValues = {
    imageS3Url?: ValidationFunction<string>;
    inspModelTS?: ValidationFunction<number>;
    inspManualTS?: ValidationFunction<number>;
    inspModelClass?: ValidationFunction<string>;
    inspManualClass?: ValidationFunction<string>;
    inspModelConf?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AutomaticClassificationOverridesProps = {
    AutomaticClassificationGrid?: PrimitiveOverrideProps<GridProps>;
    imageS3Url?: PrimitiveOverrideProps<TextFieldProps>;
    inspModelTS?: PrimitiveOverrideProps<TextFieldProps>;
    inspManualTS?: PrimitiveOverrideProps<TextFieldProps>;
    inspModelClass?: PrimitiveOverrideProps<SelectFieldProps>;
    inspManualClass?: PrimitiveOverrideProps<SelectFieldProps>;
    inspModelConf?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AutomaticClassificationProps = React.PropsWithChildren<{
    overrides?: AutomaticClassificationOverridesProps | undefined | null;
} & {
    id?: string;
    inspection?: Inspection;
    onSubmit?: (fields: AutomaticClassificationInputValues) => AutomaticClassificationInputValues;
    onSuccess?: (fields: AutomaticClassificationInputValues) => void;
    onError?: (fields: AutomaticClassificationInputValues, errorMessage: string) => void;
    onChange?: (fields: AutomaticClassificationInputValues) => AutomaticClassificationInputValues;
    onValidate?: AutomaticClassificationValidationValues;
} & React.CSSProperties>;
export default function AutomaticClassification(props: AutomaticClassificationProps): React.ReactElement;
