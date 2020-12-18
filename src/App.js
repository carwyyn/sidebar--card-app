import Graph1 from './components/Graph1';
import Card from './components/Card';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex flex-row flex-nowrap h-screen">

      <Sidebar />

      <div className="m-6 space-y-6 overflow-y-auto flex-grow">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />


      </div>




    </div>
  );
}

export default App;
