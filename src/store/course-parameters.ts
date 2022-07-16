import {
  FormatOfStudyEnum,
  LanguageOfStudyEnum,
  LevelOfStudyEnum,
} from "enums";
import { makeAutoObservable } from "mobx";

export default class CourseParametersStore {
  private _courseParameters!: ICourseParameters;

  public constructor() {
    this.setCourseParameters(
      localStorage.getItem("courseParameters")
        ? JSON.parse(localStorage.getItem("courseParameters")!)
        : {}
    );
    makeAutoObservable(this);
  }

  public setCourseParameters(courseParameters: ICourseParameters): void {
    localStorage.setItem("courseParameters", JSON.stringify(courseParameters));
    this._courseParameters = courseParameters;
  }

  public getCourseParameters(): ICourseParameters {
    return this._courseParameters;
  }
}

export interface ICourseParameters {
  level?: LevelOfStudyEnum;
  format?: FormatOfStudyEnum;
  language?: LanguageOfStudyEnum;
}
