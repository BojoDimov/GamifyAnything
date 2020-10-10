export interface Entity {
  id: string;
  label: string;
  description?: string;
}

export interface FormEntity extends Entity {
  value?: any;
  children?: FormEntity[];
}