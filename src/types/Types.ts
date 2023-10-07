export interface TicketData {
  arrival: string;
  departure: string;
  startDate: Date | null;
  backDate?: Date | null;
}
export interface AutoCitiesProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}
export interface TicketItemProps {
  ticketsInfo: {
    arrival: string;
    departure: string;
    startDate: Date | null;
    backDate?: Date | null;
  };
}
