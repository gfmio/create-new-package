import type {
  InputQuestion as InputQuestionType,
  NumberQuestion as NumberQuestionType,
  PasswordQuestion as PasswordQuestionType,
  RawListQuestion as RawListQuestionType,
  ListQuestion as ListQuestionType,
  ExpandQuestion as ExpandQuestionType,
  CheckboxQuestion as CheckboxQuestionType,
  ConfirmQuestion as ConfirmQuestionType,
  EditorQuestion as EditorQuestionType,
} from 'inquirer';
import builder from 'fluent-object-builder';

export const InputQuestionBuilder = <T>() => builder<InputQuestionType<T>>().type('input');
export const NumberQuestionBuilder = <T>() => builder<NumberQuestionType<T>>().type('number');
export const PasswordQuestionBuilder = <T>() => builder<PasswordQuestionType<T>>().type('password');
export const ListQuestionBuilder = <T>() => builder<ListQuestionType<T>>().type('list');
export const RawListQuestionBuilder = <T>() => builder<RawListQuestionType<T>>().type('rawlist');
export const ExpandQuestionBuilder = <T>() => builder<ExpandQuestionType<T>>().type('expand');
export const CheckboxQuestionBuilder = <T>() => builder<CheckboxQuestionType<T>>().type('checkbox');
export const ConfirmQuestionBuilder = <T>() => builder<ConfirmQuestionType<T>>().type('confirm');
export const EditorQuestionBuilder = <T>() => builder<EditorQuestionType<T>>().type('editor');

export const InputQuestion = <T>(props: Omit<InputQuestionType<T>, 'type'>) => ({
  ...props,
  type: 'input',
});
export const NumberQuestion = <T>(props: Omit<NumberQuestionType<T>, 'type'>) => ({ ...props, type: 'number' });
export const PasswordQuestion = <T>(props: Omit<PasswordQuestionType<T>, 'type'>) => ({ ...props, type: 'password' });
export const ListQuestion = <T>(props: Omit<ListQuestionType<T>, 'type'>) => ({
  ...props,
  type: 'list',
});
export const RawListQuestion = <T>(props: Omit<RawListQuestionType<T>, 'type'>) => ({ ...props, type: 'rawlist' });
export const ExpandQuestion = <T>(props: Omit<ExpandQuestionType<T>, 'type'>) => ({ ...props, type: 'expand' });
export const CheckboxQuestion = <T>(props: Omit<CheckboxQuestionType<T>, 'type'>) => ({ ...props, type: 'checkbox' });
export const ConfirmQuestion = <T>(props: Omit<ConfirmQuestionType<T>, 'type'>) => ({ ...props, type: 'confirm' });
export const EditorQuestion = <T>(props: Omit<EditorQuestionType<T>, 'type'>) => ({ ...props, type: 'editor' });
