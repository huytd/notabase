import { BaseEditor, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type NotabaseEditor = BaseEditor & ReactEditor & HistoryEditor;

export enum ElementType {
  Paragraph = 'paragraph',
  HeadingOne = 'heading-one',
  HeadingTwo = 'heading-two',
  HeadingThree = 'heading-three',
  ListItem = 'list-item',
  BulletedList = 'bulleted-list',
  NumberedList = 'numbered-list',
  Blockquote = 'block-quote',
  Link = 'link',
}

export enum Mark {
  Bold = 'bold',
  Italic = 'italic',
  Code = 'code',
  Underline = 'underline',
}

export type ParagraphElement = {
  type: ElementType.Paragraph;
  children: Descendant[];
};

export type HeadingOneElement = {
  type: ElementType.HeadingOne;
  children: Descendant[];
};

export type HeadingTwoElement = {
  type: ElementType.HeadingTwo;
  children: Descendant[];
};

export type HeadingThreeElement = {
  type: ElementType.HeadingThree;
  children: Descendant[];
};

export type ListItem = {
  type: ElementType.ListItem;
  children: Descendant[];
};

export type BulletedList = {
  type: ElementType.BulletedList;
  children: ListItem[];
};

export type NumberedList = {
  type: ElementType.NumberedList;
  children: ListItem[];
};

export type Blockquote = {
  type: ElementType.Blockquote;
  children: Descendant[];
};

export type Link = {
  type: ElementType.Link;
  url: string;
  children: Descendant[];
};

export type NotabaseElement =
  | ParagraphElement
  | HeadingOneElement
  | HeadingTwoElement
  | HeadingThreeElement
  | ListItem
  | BulletedList
  | NumberedList
  | Blockquote
  | Link;

export type ListElement = BulletedList | NumberedList;

export type FormattedText = { text: string } & Partial<Record<Mark, boolean>>;

export type NotabaseText = FormattedText;

declare module 'slate' {
  interface CustomTypes {
    Editor: NotabaseEditor;
    Element: NotabaseElement;
    Text: NotabaseText;
  }
}