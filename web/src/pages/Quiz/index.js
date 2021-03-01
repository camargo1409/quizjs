import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api'
import Modal from '../../components/modal'
import "./style.css"

function Quiz() {
  const[page,setPage] = useState(1)
  const[question,setQuestion] = useState({})
  const[alternatives,setAlternatives] = useState([])
  const[answer,setAnswer] = useState()
  const[showModal,setShowModal] = useState(false)
  const[message,setMessage] = useState('')
  const history = useHistory()

  useEffect(()=>{
    async function loadQuestion(){
        const {data} = await api.get("/roundQuestion",{
            params:{
                roundId:localStorage.getItem('roundId'),
                page:page
            }
        })
        
        setQuestion(data[0])
        setAlternatives(data[0].alternatives)
    }
    loadQuestion()
  },[page])


  function handleAnswer(e){
    setAnswer(e.target.value)
  }

  async function handleSubmit(e){
      e.preventDefault()
      
      const res = await api.post('/answer',{
          answer,
          roundId:localStorage.getItem('roundId')
      })
      setMessage(res.data.msg)
      setShowModal(true)
      if(page === 5){
          history.push('/')
      }else{
          setPage(page+1)
      }
  }

  function closeModal(){
      setShowModal(false)
  }
  return (
    <> 
    <Modal show={showModal} closeModal={closeModal}>
        <h3>{message}</h3>
         
    </Modal> 
    <div className="Quiz">
        <div className="panel">
        <h3>{question.statement}</h3>
            <form onSubmit={handleSubmit}>
                {alternatives.map(alternative =>(

                <div key={alternative.id} className="alternative">
                    <input type="radio" name="answer" id="" onChange={handleAnswer} value={alternative.id} />
                    <label htmlFor="">{alternative.text}</label>
                </div>
                ))}
                

                <button type="submit">Próxima</button>
            </form>
        </div>
    </div>
    </>
  );
}

export default Quiz;
