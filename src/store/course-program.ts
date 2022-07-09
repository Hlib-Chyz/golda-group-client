import {
  FormatOfStudyEnum,
  LanguageOfStudyEnum,
  LevelOfStudyEnum,
} from "enums";
import { makeAutoObservable } from "mobx";

export default class CourseProgramStore {
  private _language: LanguageOfStudyEnum = LanguageOfStudyEnum.English;

  private _level: LevelOfStudyEnum = LevelOfStudyEnum.A1A2;

  private _format: FormatOfStudyEnum = FormatOfStudyEnum.Textbook;

  public constructor() {
    makeAutoObservable(this);
  }

  public setLanguage(language: LanguageOfStudyEnum): void {
    this._language = language;
  }

  public get getLanguage(): LanguageOfStudyEnum {
    return this._language;
  }

  public setLevel(level: LevelOfStudyEnum): void {
    this._level = level;
  }

  public get getLevel(): LevelOfStudyEnum {
    return this._level;
  }

  public setFormat(format: FormatOfStudyEnum): void {
    this._format = format;
  }

  public get getFormat(): FormatOfStudyEnum {
    return this._format;
  }
}
