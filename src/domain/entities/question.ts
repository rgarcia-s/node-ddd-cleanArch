import { randomUUID } from "node:crypto";

interface QuestionProps {
  id?: string;
  title: string;
  content: string;
  authorId: string;
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor ({ id, title, content, authorId }: QuestionProps) {
    this.id = id ?? randomUUID();
    this.title = title;
    this.content = content;
    this.authorId = authorId;
  }
}