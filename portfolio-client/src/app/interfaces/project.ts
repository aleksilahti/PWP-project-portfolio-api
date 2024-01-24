export enum Status {
    active = "Active",
    on_hold = "On hold",
    inactive = "Inactive",
    archived = "Finished"
}

export interface Project {
    name: string;
    status: Status;
    id: string;
    short_description: string;
    long_description?: string;
    imageUrl?: string;
    startDate?: Date;
    endDate?: Date | undefined;
    tags?: string[]
  }