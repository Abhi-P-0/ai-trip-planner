import './App.css';
import AddTrip from './components/AddTripForm';
import TripList from './components/TripList';
import { useCollection, useQuery } from '@squidcloud/react';
import { Trip } from './types';

function App() {
  const collection = useCollection<Trip>("trips");
  const trips = useQuery(collection.query());

  const findTrip = (id: string) => {
    return trips.data.find((trip) => trip.data.id === id)
  };

  const onDelete = (id: string) => {
    const trip = findTrip(id);

    if (trip) trip.delete();
  };
  
  const onAddNote = (tripID: string, note: string) => {
    const trip = findTrip(tripID);

    if (!trip) return;

    const notes = trip.data.notes;
    notes.push(note);

    trip.update({
      notes: notes
    });

  };

  const onDeleteNote = (tripID: string, noteIndex: number) => {
    const trip = findTrip(tripID);

    if (!trip) return;

    const notes = trip.data.notes;

    trip.update({
      notes: notes.filter((_, index) => index !== noteIndex)
    });
  };

  return (
    <div className='card'>
    <AddTrip />

    <TripList 
      trips={trips.data.map((trip) => trip.data)}
      onDelete={onDelete}
      onAddNote={onAddNote}
      onDeleteNote={onDeleteNote}
    
    />
    </div>
  );
}

export default App;
