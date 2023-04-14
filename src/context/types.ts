import {
  IInterviewSettingsValues,
  IJobDetailsValues,
  IRequisitionDetails,
} from "@src/interface/forms";
import { actionTypes } from "./reducer";

export interface ContextType {
  requisitionFormData: IRequisitionDetails;
  jobDetailFormData: IJobDetailsValues;
  interviewSettingFormData: IInterviewSettingsValues;
}

export interface ContextAction {
  type: actionTypes;
  requisitionFormData?: IRequisitionDetails;
  jobDetailFormData?: IJobDetailsValues;
  interviewSettingFormData?: IInterviewSettingsValues;
}
