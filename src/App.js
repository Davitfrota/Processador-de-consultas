
import { useEffect, useState, useRef } from "react"



import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast'

import { InputTextarea } from 'primereact/inputtextarea';
        

        
import "primereact/resources/themes/lara-light-indigo/theme.css";      
import "primereact/resources/primereact.min.css"; 

import 'primeicons/primeicons.css';
        
                                    
        
        
        
export default function App() {
  const [input,setInput] = useState("")
  const [value, setValue] = useState('');


  const toast = useRef(null);

    function handleReload() {
      window.location.reload();
    }


const ContainerStyle = {
    backgroundColor: 'salmon',
    display: "flex",
    flexDirection:'column', 
    justifyContent:'center', 
    alignItems:'center',
    width: '100vw',
    height: '100vh',

  };
const ContainerCardStyle = {
    backgroundColor:'white',
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '15px',
    padding: '20px',

  };
  const TitleStyle = {
    display: "flex",
    flexDirection:'column', 
    justifyContent:'center', 
    alignItems:'center',

  };
   

  return (
      <div style={ContainerStyle}>
        <h1>Processador de Consultas</h1>
          <div style={ContainerCardStyle}>
            <div>
              <InputText placeholder="Name..." value={input} onChange={(e) => setInput(e.target.value)} />
              <Button style={{marginLeft:'10px'}} label="?" icon="pi pi-check" />
            </div>
            <div style={{ width: '100%', height:'100%' }}>
            <Toast ref={toast} />
            <InputTextarea style={{marginTop: 10, width:'100%'}} autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
          </div>
        </div> 
      </div>
  )
  
}
