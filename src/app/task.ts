export class Task {
  name: string;
  uuid: string;
  progress: number;
  submitted_by: string;
  submitted_at: string;
  submitted_task: any;
  status: TaskStatus;
  results: any;
  priority: number;

  // constructor(name, uuid, progress, submitted_by, submitted_at, submitted_task, status, results, priority) {
  //   this.name = name;
  //   this.uuid = uuid;
  //   this.progress = progress;
  //   this.submitted_by = submitted_by;
  //   this.submitted_at = submitted_at;
  //   this.submitted_task = submitted_task;
  //   this.status = status;
  //   this.results = results;
  //   this.priority = priority;
  // }
}

export enum TaskStatus {
  PENDING = "PENDING",
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  RETRY = "RETRY",
  REVOKED = "REVOKED"
}
