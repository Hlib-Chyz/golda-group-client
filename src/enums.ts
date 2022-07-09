/* eslint-disable no-unused-vars */
export const enum Languages {
  UA = "UA",
  RU = "RU",
}

export enum Props {
  AboutCourse = "AboutCourse",
  AboutUs = "AboutUs",
  Tariffs = "Tariffs",
  HeadingH1First = "HeadingH1First",
  HeadingH1Second = "HeadingH1Second",
  SubHeadingH1First = "SubHeadingH1First",
  SubHeadingH1Second = "SubHeadingH1Second",
  StartLearning = "StartLearning",
  HeadingForWhomeTraining = "HeadingForWhomeTraining",
  Reason1 = "Reason1",
  Reason2 = "Reason2",
  Reason3 = "Reason3",
  HeadingAfterTrainingYouWillBeAble = "HeadingAfterTrainingYouWillBeAble",
  WhatWillBeAble1First = "WhatWillBeAble1First",
  WhatWillBeAble1Second = "WhatWillBeAble1Second",
  WhatWillBeAble2First = "WhatWillBeAble2First",
  WhatWillBeAble2Second = "WhatWillBeAble2Second",
  WhatWillBeAble3First = "WhatWillBeAble3First",
  WhatWillBeAble3Second = "WhatWillBeAble3Second",
  WhatWillBeAble4First = "WhatWillBeAble4First",
  WhatWillBeAble4Second = "WhatWillBeAble4Second",
  WhatWillBeAble5First = "WhatWillBeAble5First",
  WhatWillBeAble5Second = "WhatWillBeAble5Second",
  WhatWillBeAble6First = "WhatWillBeAble6First",
  WhatWillBeAble6Second = "WhatWillBeAble6Second",
  CourseProgram = "CourseProgram",
  Format = "Format",
  Language = "Language",
  Level = "Level",
  Grammar = "Grammar",
  Sets = "Sets",
  Result = "Result",
  Tools = "Tools",
  Textbook = "Textbook",
  TutorialWithTeacher = "TutorialWithTeacher",
  TutorialWithZlata = "TutorialWithZlata",
  English = "English",
  French = "French",
  Deutsch = "Deutsch",
  A1A2 = "A1A2",
  B1 = "B1",
  B2 = "B2",
}

export type PosipilityProps = keyof typeof Props;

export enum LevelOfStudyEnum {
  A1A2 = "A1A2",
  B1 = "B1",
  B2 = "B2",
}

export enum LanguageOfStudyEnum {
  English = "English",
  French = "French",
  Deutsch = "Deutsch",
}

export enum FormatOfStudyEnum {
  Textbook = "Textbook",
  TutorialWithTeacher = "TutorialWithTeacher",
  TutorialWithZlata = "TutorialWithZlata",
}
