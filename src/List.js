import React from 'react'
import './List.css';

const List = ({data,removeperson,onHandleAlert}) => {


  return (
    <div className='list_container'>
    {data.map((person)=>{
      return (<div className='list_container-person'>
        <div className='list_container-person-img'>
          <img src={person.image} alt='image'/>
          </div>
          <div className='list_container-person-content'>
            <h4>{person.name}</h4>
            <p>{person.date}</p>
          </div>
          <div className='list_container-person-clear'>
            <button type='button' onClick={()=>{
    removeperson(person.name);
    onHandleAlert({type:'delete',text:'person is deleted'});

  } }> Delete</button>
          </div>
      </div>)
    })}
      
    </div>
  ) 
}

export default List
