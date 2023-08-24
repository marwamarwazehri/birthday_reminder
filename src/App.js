import './App.css';
import {useEffect, useState} from 'react';
import List from './List';


const getLocalStorage = () => {
  let list = localStorage.getItem('data');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('data')));
  } else {
    return [];
  }
};

function App() {
  const [name,setName]=useState('');
  const [date,setDate]=useState('');
  const [image,setImage]=useState('');
  const [data,setData]=useState(getLocalStorage());
  const [alert,setAlert]=useState({show:false});
  

  const onHandleAdd=()=>{
    setData([...data,{name,date,image}]);
    setName('');
    setDate('');
    setImage('');
    onHandleAlert({type:'insert',text:'person is inserted'})
  }

  const onHandleAlert=({type,text})=>{
    setAlert({show:true,type,text})
   setTimeout(() => {
    setAlert({show:false})
   }, 3000);
  }


   useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  



  const removeperson = (personName) => {
    const newData= data.filter((people) => people.name!==personName)
   setData(newData);
  }

  return (
    <div className='birthday_container'>
      <div className='birthday_container-form'>
        <form>
          <label>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
             
             <label>Date</label>
            <input type='text' value={date} onChange={(e)=>setDate(e.target.value)}/>

             <label>Image</label>
            <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
           </form>
            <button type='button' onClick={onHandleAdd}>Add</button>
      </div>

     
      <div className='birthday_container-people'>
     
     {alert.show && <div className={`message-${alert.type}`}>
      <p>{alert.text}</p>
      </div>}
      
        <div className='birthday_container-people-number'>
            <h1>{data.length}  People are in the List</h1>
        </div>
        <div className='birthday_container-people-list'>
           <List data={data} removeperson={removeperson} onHandleAlert={onHandleAlert}/>
        </div>
        <div className='birthday_container-people-button'>
          <button type='button' onClick={()=>setData([])}>Clear All</button>
        </div>
      
      </div>
      
    </div>
  );
  }


export default App;
