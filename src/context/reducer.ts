import { ContextAction, ContextType } from "./types";

export const initialState: ContextType = {
  requisitionFormData: {
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  },
  jobDetailFormData: {
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
  },
  interviewSettingFormData: {
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
  },
};

export enum actionTypes {
  SET_REQUISITION_FORM_DATA,
  SET_JOB_DETAIL_FORM_DATA,
  SET_INTERVIEW_SETTINGS_FORM_DATA,
}

const reducer = (state: ContextType, action: ContextAction): ContextType => {
  switch (action.type) {
    case actionTypes.SET_REQUISITION_FORM_DATA:
      return {
        ...state,
        requisitionFormData: action.requisitionFormData!,
      };

    case actionTypes.SET_JOB_DETAIL_FORM_DATA:
      return {
        ...state,
        jobDetailFormData: action.jobDetailFormData!,
      };

    case actionTypes.SET_INTERVIEW_SETTINGS_FORM_DATA:
      return {
        ...state,
        interviewSettingFormData: action.interviewSettingFormData!,
      };

    default:
      return state;
  }
};

export default reducer;
