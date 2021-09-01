import { IWorksheetValues } from "./types";

function required(value?: string | number) {
  if (!value) {
    return "Required";
  }
}

function validateMain(values: IWorksheetValues) {
  return {
    firstName: required(values.firstName),
    lastName: required(values.lastName),
    age: required(values.age)
  };
}

function validateDocuments(values: IWorksheetValues) {
  return {
    series: required(values.series),
    number: required(values.number),
    placeOfIssue: required(values.placeOfIssue)
  };
}

function validateEducation(values: IWorksheetValues) {
  return {
    education: (values.education || []).map((educationBlock) => ({
      place: required(educationBlock.place),
      beginYear: required(educationBlock.beginYear),
      endYear: required(educationBlock.endYear)
    }))
  };
}

export function validate(values: IWorksheetValues) {
  return {
    ...validateMain(values),
    ...validateDocuments(values),
    ...validateEducation(values)
  };
}
