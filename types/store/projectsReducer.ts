export interface ProjectsInterface {
  projects: ProjectInterface[];
}

export interface ProjectInterfaceDTO {
  title: string;
  workedTime: number;
}

export interface ProjectInterface extends ProjectInterfaceDTO {
  _id: string;
}
