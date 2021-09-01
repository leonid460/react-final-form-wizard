export interface IMainStepValues {
  firstName: string;
  lastName: string;
  age: number;
}

export interface IDocumentsStepValues {
  series: number;
  number: number;
  placeOfIssue: string;
}

interface IEducationStepValues {
  education?: Array<
    Partial<{
      beginYear: number;
      endYear: number;
      place: string;
    }>
  >;
}

export interface IWorksheetValues
  extends Partial<IMainStepValues>,
    Partial<IDocumentsStepValues>,
    IEducationStepValues {}
