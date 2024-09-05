import './App.css';
import AddTrip from './components/AddTripForm';
import TripList from './components/TripList';
import { useCollection, useQuery } from '@squidcloud/react';
import { Trip } from './types';

function App() {
  const collection = useCollection<Trip>("trips");
  const trips = useQuery(collection.query());

  const onDelete = (id: string) => {};
  const onAddNote = (tripID: string, note: string) => {};
  const onDeleteNote = (tripID: string, noteIndex: number) => {};

  return <>
    <AddTrip />

    <TripList trips={trips.data.map((trip) => trip.data)}/>
  </>
}

export default App;
