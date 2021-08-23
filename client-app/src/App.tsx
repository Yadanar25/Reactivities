import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {

  //for handling State
  //(Note : whenever State change, it always rerender the app)
  const [activities, setActivities] = useState([])

  //for connecting API
  //if the state is change, it will always rerender and will be in infinite loop
  //so add ", []" in the end
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);  
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
      <Header as= 'h1' icon='users' content='Reactivities' />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
