export interface ITask {
  id: string;
  title: string;
  description: string;
  createdAt: string | Date;
  orderId?: number;
  status: "DONE" | "INPROGRESS" | "TODO";
}

export class Task implements ITask {
  id: string;
  title: string;
  description: string;
  createdAt: string | Date;
  orderId?: number;
  status: "DONE" | "INPROGRESS" | "TODO";
  constructor(
    _status?,
    _id = "",
    _orderId = 0,
    _title = "",
    _description = ""
  ) {
    this.id = _id;
    this.title = _title;
    this.createdAt = new Date();
    this.description = _description;
    this.orderId = _orderId;
    this.status = _status || "TODO";
  }
}
