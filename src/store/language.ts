import { Languages } from "enums";
import { makeAutoObservable } from "mobx";

export default class LanguageStore {
  private _language!: Languages;

  public constructor() {
    this.setLanguage(
      (localStorage.getItem("language") as Languages) ?? Languages.UA
    );
    makeAutoObservable(this);
  }

  public setLanguage(language: Languages): void {
    localStorage.setItem("language", language);
    this._language = language;
  }

  public get getLanguage(): Languages {
    return this._language;
  }
}
