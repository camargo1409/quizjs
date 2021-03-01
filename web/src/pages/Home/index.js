import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css'

function Home() {
    const [username,setUsername] = useState('')
    const [rounds,setRounds] = useState([])
    const history = useHistory()
    
    async function handleSubmit(e){
        e.preventDefault()
        const {data} = await api.post('/round',{
            username
        })
        localStorage.setItem("roundId",data)
        history.push('/quiz')
    }

    useEffect(()=>{
        async function loadRounds(){
            const {data} = await api.get('/round')
            
            setRounds(data)
        }

        loadRounds()
    },[])
    return (
      <div className="Home">
          <div className="main">
            <h1>QUIZJS</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)} 
                type="text" 
                placeholder="Enter your username" />

                <button type="submit">PLAY !</button>
            </form>
          </div>
          <div className="ranking">
              {rounds.length > 0 && (
                  <>
                  <h2>Ranking</h2>
                  <table>
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>USERNAME</th>
                              <th>SCORE</th>
                          </tr>
                      </thead>
                      <tbody>
                          
                          {rounds.map(round => (
                            <tr key={round.id}>
                                <td>{round.id}</td>
                                <td>{round.username}</td>
                                <td>{round.score}</td>
                            </tr>
                          ))}
                        
                      </tbody>
                  </table>
                  </>
              )}
              
          </div>
      </div>
    );
  }
  
export default Home;