// App.js
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='min-vh-100'>
        APP
        <Outlet />
      </div>
    </>
  );
}

export default App;
