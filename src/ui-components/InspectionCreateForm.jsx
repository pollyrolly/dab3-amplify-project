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
import { Inspection } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function InspectionCreateForm(props) {
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
    imageS3Url: "",
    inspModelTS: "",
    inspManualTS: "",
    inspModelClass: undefined,
    inspManualClass: undefined,
    inspModelConf: "",
  };
  const [imageS3Url, setImageS3Url] = React.useState(initialValues.imageS3Url);
  const [inspModelTS, setInspModelTS] = React.useState(
    initialValues.inspModelTS
  );
  const [inspManualTS, setInspManualTS] = React.useState(
    initialValues.inspManualTS
  );
  const [inspModelClass, setInspModelClass] = React.useState(
    initialValues.inspModelClass
  );
  const [inspManualClass, setInspManualClass] = React.useState(
    initialValues.inspManualClass
  );
  const [inspModelConf, setInspModelConf] = React.useState(
    initialValues.inspModelConf
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImageS3Url(initialValues.imageS3Url);
    setInspModelTS(initialValues.inspModelTS);
    setInspManualTS(initialValues.inspManualTS);
    setInspModelClass(initialValues.inspModelClass);
    setInspManualClass(initialValues.inspManualClass);
    setInspModelConf(initialValues.inspModelConf);
    setErrors({});
  };
  const validations = {
    imageS3Url: [],
    inspModelTS: [],
    inspManualTS: [],
    inspModelClass: [],
    inspManualClass: [],
    inspModelConf: [],
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
          imageS3Url,
          inspModelTS,
          inspManualTS,
          inspModelClass,
          inspManualClass,
          inspModelConf,
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
          await DataStore.save(new Inspection(modelFields));
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
      {...getOverrideProps(overrides, "InspectionCreateForm")}
      {...rest}
    >
      <TextField
        label="Image s3 url"
        isRequired={false}
        isReadOnly={false}
        value={imageS3Url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imageS3Url: value,
              inspModelTS,
              inspManualTS,
              inspModelClass,
              inspManualClass,
              inspModelConf,
            };
            const result = onChange(modelFields);
            value = result?.imageS3Url ?? value;
          }
          if (errors.imageS3Url?.hasError) {
            runValidationTasks("imageS3Url", value);
          }
          setImageS3Url(value);
        }}
        onBlur={() => runValidationTasks("imageS3Url", imageS3Url)}
        errorMessage={errors.imageS3Url?.errorMessage}
        hasError={errors.imageS3Url?.hasError}
        {...getOverrideProps(overrides, "imageS3Url")}
      ></TextField>
      <TextField
        label="Insp model ts"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          inspModelTS && convertToLocal(convertTimeStampToDate(inspModelTS))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              imageS3Url,
              inspModelTS: value,
              inspManualTS,
              inspModelClass,
              inspManualClass,
              inspModelConf,
            };
            const result = onChange(modelFields);
            value = result?.inspModelTS ?? value;
          }
          if (errors.inspModelTS?.hasError) {
            runValidationTasks("inspModelTS", value);
          }
          setInspModelTS(value);
        }}
        onBlur={() => runValidationTasks("inspModelTS", inspModelTS)}
        errorMessage={errors.inspModelTS?.errorMessage}
        hasError={errors.inspModelTS?.hasError}
        {...getOverrideProps(overrides, "inspModelTS")}
      ></TextField>
      <TextField
        label="Insp manual ts"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          inspManualTS && convertToLocal(convertTimeStampToDate(inspManualTS))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              imageS3Url,
              inspModelTS,
              inspManualTS: value,
              inspModelClass,
              inspManualClass,
              inspModelConf,
            };
            const result = onChange(modelFields);
            value = result?.inspManualTS ?? value;
          }
          if (errors.inspManualTS?.hasError) {
            runValidationTasks("inspManualTS", value);
          }
          setInspManualTS(value);
        }}
        onBlur={() => runValidationTasks("inspManualTS", inspManualTS)}
        errorMessage={errors.inspManualTS?.errorMessage}
        hasError={errors.inspManualTS?.hasError}
        {...getOverrideProps(overrides, "inspManualTS")}
      ></TextField>
      <SelectField
        label="Insp model class"
        placeholder="Please select an option"
        isDisabled={false}
        value={inspModelClass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imageS3Url,
              inspModelTS,
              inspManualTS,
              inspModelClass: value,
              inspManualClass,
              inspModelConf,
            };
            const result = onChange(modelFields);
            value = result?.inspModelClass ?? value;
          }
          if (errors.inspModelClass?.hasError) {
            runValidationTasks("inspModelClass", value);
          }
          setInspModelClass(value);
        }}
        onBlur={() => runValidationTasks("inspModelClass", inspModelClass)}
        errorMessage={errors.inspModelClass?.errorMessage}
        hasError={errors.inspModelClass?.hasError}
        {...getOverrideProps(overrides, "inspModelClass")}
      >
        <option
          children="Normal"
          value="NORMAL"
          {...getOverrideProps(overrides, "inspModelClassoption0")}
        ></option>
        <option
          children="Anomaly"
          value="ANOMALY"
          {...getOverrideProps(overrides, "inspModelClassoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Insp manual class"
        placeholder="Please select an option"
        isDisabled={false}
        value={inspManualClass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imageS3Url,
              inspModelTS,
              inspManualTS,
              inspModelClass,
              inspManualClass: value,
              inspModelConf,
            };
            const result = onChange(modelFields);
            value = result?.inspManualClass ?? value;
          }
          if (errors.inspManualClass?.hasError) {
            runValidationTasks("inspManualClass", value);
          }
          setInspManualClass(value);
        }}
        onBlur={() => runValidationTasks("inspManualClass", inspManualClass)}
        errorMessage={errors.inspManualClass?.errorMessage}
        hasError={errors.inspManualClass?.hasError}
        {...getOverrideProps(overrides, "inspManualClass")}
      >
        <option
          children="Normal"
          value="NORMAL"
          {...getOverrideProps(overrides, "inspManualClassoption0")}
        ></option>
        <option
          children="Anomaly"
          value="ANOMALY"
          {...getOverrideProps(overrides, "inspManualClassoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Insp model conf"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={inspModelConf}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              imageS3Url,
              inspModelTS,
              inspManualTS,
              inspModelClass,
              inspManualClass,
              inspModelConf: value,
            };
            const result = onChange(modelFields);
            value = result?.inspModelConf ?? value;
          }
          if (errors.inspModelConf?.hasError) {
            runValidationTasks("inspModelConf", value);
          }
          setInspModelConf(value);
        }}
        onBlur={() => runValidationTasks("inspModelConf", inspModelConf)}
        errorMessage={errors.inspModelConf?.errorMessage}
        hasError={errors.inspModelConf?.hasError}
        {...getOverrideProps(overrides, "inspModelConf")}
      ></TextField>
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
