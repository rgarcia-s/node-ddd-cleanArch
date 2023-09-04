import { randomUUID } from "node:crypto";

interface AnswerProps {
  id?: string;
  content: string;
  authorId: string;
  questionId: string;
}

export class Answer {
  public id: string;
  public content: string;
  public authorId: string;
  public questionId: string;

  constructor ({ id, content, authorId, questionId }: AnswerProps){
    this.id = id ?? randomUUID();
    this.content = content;
    this.authorId = authorId;
    this.questionId = questionId;
  }
}