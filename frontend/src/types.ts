export type Trip = {
    startDate: Date;
    endDate: Date;
    country: string;
    notes: string[];
    id: string;
};

export type Props = {
    trip: Trip;
    onDelete: (id: string) => void;
    onAddNote: (tripdID: string, note: string) => void;
    onDeleteNote: (tripID: string, noteIndex: number) => void;
    index: number;
};