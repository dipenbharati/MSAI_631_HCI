import React,{useEffect, useState} from 'react'
import { listUserSessions } from '../services/UserSessionsService'
import './ListUserSessions.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddSession  from './AddSession';

const ListUserSession = () => {
    const [sessions, setUserSessions] = useState([])

    useEffect(() => {
        listUserSessions().then((response) => {
            setUserSessions(response.data)
            console.log("Response Data ", response)
        }).catch(error => {
            console.error(error);
        })
    },[])

  return (
    <div class="grid">
      <div class="container">
      <h2 className='text-center'> Current Sessions </h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Session Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Remaining Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    sessions.map(session =>
                        <tr key={session.id}>
                                <td>{session.firstName}</td>
                                <td>{session.lastName}</td>
                                <td>{session.email}</td>
                                <td>{session.email}</td>
                        </tr>)
                }
            </tbody>
        </table>
      </div>


      <div class="container">
      <h2 className='text-center'> Devices </h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Session Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Remaining Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    sessions.map(session =>
                        <tr key={session.id}>
                                <td>{session.firstName}</td>
                                <td>{session.lastName}</td>
                                <td>{session.email}</td>
                                <td>{session.email}</td>
                        </tr>)
                }
            </tbody>
        </table>
      </div>
  
      <div class="container">
        <h2>Blocklist</h2>
        <p>This is the content of the third container.</p>
      </div>
  
      <div class="container">
        <h2>Container 4</h2>
        <p>This is the content of the fourth container.</p>
      </div>
    </div>
  )
}
export default ListUserSession