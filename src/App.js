
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/about';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [mode, setMode]=useState('light')
  const [alert, setAlert]=useState(null)

  const showAlert =(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null)
},1500)
  }
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled','success')
      document.title="TextUtils Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
      document.title="TextUtils Light Mode"
    }
  }
  return (
  <>
  

<Navbar title='TextTutile' mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert}/>

<div className="container my-3">
<Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
        
          </Link>
      </nav>
      <Routes>
        <Route path="/" element={ <TextForm   showAlert ={ showAlert} heading='Try TextUtils - Word Counter' mode={mode}/>} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
        {/* <TextForm   showAlert ={ showAlert} heading='Enter The Text To Analyze Below' mode={mode}/> */}
          {/* <About/> */}
</div>

  </>

  );
}


export default App;
