// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const InspClass = {
  "NORMAL": "NORMAL",
  "ANOMALY": "ANOMALY"
};

const InspModus = {
  "AUTOMATIC": "AUTOMATIC",
  "MANUAL": "MANUAL"
};

const { Inspection, InspectionPoint, Model } = initSchema(schema);

export {
  Inspection,
  InspectionPoint,
  Model,
  InspClass,
  InspModus
};