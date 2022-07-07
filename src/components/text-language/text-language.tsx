/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { PosipilityProps } from "enums";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

const TextLanguage = observer(({ prop }: { prop: string }) => {
  const { language } = useContext(Context)!;
  const textAllLanguages: {
    UA: { [key in PosipilityProps]: string };
    RU: { [key in PosipilityProps]: string };
  } = {
    UA: {
      AboutCourse: "Про курси",
      AboutUs: "Про нас",
      Tariffs: "Тарифи",
      HeadingH1First: "Знання -",
      HeadingH1Second: "це скарб",
      SubHeadingH1First: "Отримай скарб, який",
      SubHeadingH1Second: "об'єднує світ",
      StartLearning: "Почати навчання",
      HeadingForWhomeTraining: "Навчання підійде для тих, хто",
      Reason1: "Хоче здобути нову професію",
      Reason2: "Хоче вільно подорожувати світом",
      Reason3: "Хоче дивитися улюблені серіали в оригіналі",
      HeadingAfterTrainingYouWillBeAble: "Після навчання ви зможете",
      WhatWillBeAble1First: "Розуміти все",
      WhatWillBeAble1Second: "часи",
      WhatWillBeAble2First: "Подолати мовний",
      WhatWillBeAble2Second: "барьер",
      WhatWillBeAble3First: "Сприймати",
      WhatWillBeAble3Second: "на слух",
      WhatWillBeAble4First: "Дивитися та читати",
      WhatWillBeAble4Second: "в оригинале",
      WhatWillBeAble5First: "Знайти",
      WhatWillBeAble5Second: "однодумців",
      WhatWillBeAble6First: "Збільшити словниковий",
      WhatWillBeAble6Second: "запас",
      CourseProgram: "Програма курсу",
      Format: "Формат",
      Language: "Мова",
      Level: "Рівень",
      Grammar: "Граматика",
      Sets: "Набори",
      Result: "Результат",
      Tools: "Інструменти",
      Textbook: "Підручник",
      TutorialWithTeacher: "Підручник із викладачем",
      TutorialWithZlata: "Підручник із Златою",
      English: "Англійська",
      French: "Французька",
      Deutsch: "Німецька",
      A1A2: "A1 - A2",
      B1: "B1",
      B2: "B2",
    },
    RU: {
      AboutCourse: "О курсах",
      AboutUs: "О нас",
      Tariffs: "Тарифы",
      HeadingH1First: "Знания -",
      HeadingH1Second: "это сокровище",
      SubHeadingH1First: "Получи сокровище, которое",
      SubHeadingH1Second: "объединяет мир",
      StartLearning: "Начать обучение",
      HeadingForWhomeTraining: "Обучение подойдет для тех, кто",
      Reason1: "Хочет получить новую профессию",
      Reason2: "Хочет свободно путешествовать по миру",
      Reason3: "Хочет смотреть любимые сериалы в оригинале",
      HeadingAfterTrainingYouWillBeAble: "После обучения вы сможете",
      WhatWillBeAble1First: "Понимать все",
      WhatWillBeAble1Second: "времена",
      WhatWillBeAble2First: "Побороть языковой",
      WhatWillBeAble2Second: "барьер",
      WhatWillBeAble3First: "Воспринимать",
      WhatWillBeAble3Second: "на слух",
      WhatWillBeAble4First: "Смотреть и читать",
      WhatWillBeAble4Second: "в оригинале",
      WhatWillBeAble5First: "Найти",
      WhatWillBeAble5Second: "единомышленников",
      WhatWillBeAble6First: "Увеличить словарный",
      WhatWillBeAble6Second: "запас",
      CourseProgram: "Программа курса",
      Format: "Формат",
      Language: "Язык",
      Level: "Уровень",
      Grammar: "Грамматика",
      Sets: "Наборы",
      Result: "Результат",
      Tools: "Инструменты",
      Textbook: "Учебник",
      TutorialWithTeacher: "Учебник с преподавателем",
      TutorialWithZlata: "Учебник со Златой",
      English: "Английский",
      French: "Французский",
      Deutsch: "Немецкий",
      A1A2: "A1 - A2",
      B1: "B1",
      B2: "B2",
    },
  };

  return <>{(textAllLanguages as any)?.[language.getLanguage!]?.[prop]}</>;
});

export default TextLanguage;
