import Pagination from './components/Pagination';

function App() {
  return (
    <div>
      <Pagination 
        totalItems={100}
        itemsPerPage={10}
      />
    </div>
  );
}

export default App;
