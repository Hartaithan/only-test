export interface IAlertState {
  isOpen: boolean;
  message: string | null;
}

export interface IResponse {
  status: string;
  message: string;
}

export interface IAlertProps {
  message: string | null;
}
