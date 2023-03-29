import './App.css';
import AccordionClass from './accordClass'
import AccordionFunc from './accordFunc'
import AccordionNewFunc from './newFunc'
import {Route, Link, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='main'>
      <h1>Country Data</h1>
      <div>
        <ul >
          <li> <Link className='link' to="/class">Country Data(Class Component)</Link> </li>
          <li> <Link className='link' to="/function">Country Data (Function Component)</Link> </li>
          <li> <Link className='link' to="/newfunction/1">Country Data (Capital, Land Area)</Link> </li>
        </ul>
      </div>
      <Routes>
        <Route path='/class' element={<AccordionClass />} />
        <Route path='/function' element={<AccordionFunc />} />
        <Route path='/newfunction/:page' element={<AccordionNewFunc />} />
      </Routes>
    </div>
  );
}

export default App;
