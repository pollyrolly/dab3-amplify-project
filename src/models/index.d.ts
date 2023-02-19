import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum InspClass {
  NORMAL = "NORMAL",
  ANOMALY = "ANOMALY"
}

export enum InspModus {
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL"
}



type EagerInspection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Inspection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imageS3Url?: string | null;
  readonly inspModelTS?: number | null;
  readonly inspManualTS?: number | null;
  readonly inspModelClass?: InspClass | keyof typeof InspClass | null;
  readonly inspManualClass?: InspClass | keyof typeof InspClass | null;
  readonly inspModelConf?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInspection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Inspection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imageS3Url?: string | null;
  readonly inspModelTS?: number | null;
  readonly inspManualTS?: number | null;
  readonly inspModelClass?: InspClass | keyof typeof InspClass | null;
  readonly inspManualClass?: InspClass | keyof typeof InspClass | null;
  readonly inspModelConf?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Inspection = LazyLoading extends LazyLoadingDisabled ? EagerInspection : LazyInspection

export declare const Inspection: (new (init: ModelInit<Inspection>) => Inspection) & {
  copyOf(source: Inspection, mutator: (draft: MutableModel<Inspection>) => MutableModel<Inspection> | void): Inspection;
}

type EagerInspectionPoint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InspectionPoint, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly model?: string | null;
  readonly modelDeployed?: number | null;
  readonly inspModus?: InspModus | keyof typeof InspModus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInspectionPoint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InspectionPoint, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly model?: string | null;
  readonly modelDeployed?: number | null;
  readonly inspModus?: InspModus | keyof typeof InspModus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InspectionPoint = LazyLoading extends LazyLoadingDisabled ? EagerInspectionPoint : LazyInspectionPoint

export declare const InspectionPoint: (new (init: ModelInit<InspectionPoint>) => InspectionPoint) & {
  copyOf(source: InspectionPoint, mutator: (draft: MutableModel<InspectionPoint>) => MutableModel<InspectionPoint> | void): InspectionPoint;
}

type EagerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Model, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly version?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Model, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly version?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Model = LazyLoading extends LazyLoadingDisabled ? EagerModel : LazyModel

export declare const Model: (new (init: ModelInit<Model>) => Model) & {
  copyOf(source: Model, mutator: (draft: MutableModel<Model>) => MutableModel<Model> | void): Model;
}