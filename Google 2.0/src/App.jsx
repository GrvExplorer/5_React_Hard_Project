import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Router from '../components/Router'
import { useState } from 'react';
function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  return <>
<div className={darkTheme ? 'dark' : ''}>

<div className="bg-gray-100 dark:bg-gray-900">
  <Navbar /> 
</div>

</div>
  
  </>;
}

export default App;
