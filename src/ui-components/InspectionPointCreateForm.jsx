/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { InspectionPoint } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function InspectionPointCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    model: "",
    modelDeployed: "",
    inspModus: undefined,
  };
  const [model, setModel] = React.useState(initialValues.model);
  const [modelDeployed, setModelDeployed] = React.useState(
    initialValues.modelDeployed
  );
  const [inspModus, setInspModus] = React.useState(initialValues.inspModus);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setModel(initialValues.model);
    setModelDeployed(initialValues.modelDeployed);
    setInspModus(initialValues.inspModus);
    setErrors({});
  };
  const validations = {
    model: [],
    modelDeployed: [],
    inspModus: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          model,
          modelDeployed,
          inspModus,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new InspectionPoint(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "InspectionPointCreateForm")}
      {...rest}
    >
      <TextField
        label="Model"
        isRequired={false}
        isReadOnly={false}
        value={model}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              model: value,
              modelDeployed,
              inspModus,
            };
            const result = onChange(modelFields);
            value = result?.model ?? value;
          }
          if (errors.model?.hasError) {
            runValidationTasks("model", value);
          }
          setModel(value);
        }}
        onBlur={() => runValidationTasks("model", model)}
        errorMessage={errors.model?.errorMessage}
        hasError={errors.model?.hasError}
        {...getOverrideProps(overrides, "model")}
      ></TextField>
      <TextField
        label="Model deployed"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          modelDeployed && convertToLocal(convertTimeStampToDate(modelDeployed))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              model,
              modelDeployed: value,
              inspModus,
            };
            const result = onChange(modelFields);
            value = result?.modelDeployed ?? value;
          }
          if (errors.modelDeployed?.hasError) {
            runValidationTasks("modelDeployed", value);
          }
          setModelDeployed(value);
        }}
        onBlur={() => runValidationTasks("modelDeployed", modelDeployed)}
        errorMessage={errors.modelDeployed?.errorMessage}
        hasError={errors.modelDeployed?.hasError}
        {...getOverrideProps(overrides, "modelDeployed")}
      ></TextField>
      <SelectField
        label="Insp modus"
        placeholder="Please select an option"
        isDisabled={false}
        value={inspModus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              model,
              modelDeployed,
              inspModus: value,
            };
            const result = onChange(modelFields);
            value = result?.inspModus ?? value;
          }
          if (errors.inspModus?.hasError) {
            runValidationTasks("inspModus", value);
          }
          setInspModus(value);
        }}
        onBlur={() => runValidationTasks("inspModus", inspModus)}
        errorMessage={errors.inspModus?.errorMessage}
        hasError={errors.inspModus?.hasError}
        {...getOverrideProps(overrides, "inspModus")}
      >
        <option
          children="Automatic"
          value="AUTOMATIC"
          {...getOverrideProps(overrides, "inspModusoption0")}
        ></option>
        <option
          children="Manual"
          value="MANUAL"
          {...getOverrideProps(overrides, "inspModusoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
