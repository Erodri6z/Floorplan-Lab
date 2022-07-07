import Bath from './floorplan/Bath';
import BedRoom from './floorplan/Bedroom';
import './App.css';
import Kitchen from './floorplan/kitchen';
import LivingRoom from './floorplan/LivingRoom';
import Oven from './floorplan/Oven';
import Sink from './floorplan/Sink';

function App() {
  return (
    <div>
      <BedRoom bedRoomNum={1} />
      <div>
        <Kitchen />
        <div>
        <Oven />
        <Sink />
        </div>
      </div>
      <Bath />
      <BedRoom bedRoomNum={2}/>
      <LivingRoom />
      <Bath />
      <BedRoom bedRoomNum={3} />
      
    </div>
  );
}

export default App;
