import { useEffect, useReducer} from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Loading from './Loading'
import Error from './Error'
import Ready from './Ready'
import Question from './Question'
import Finish from './Finish'

const initialState = {
  questions:[],
  status: 'loading',
  index:0,
  answer: null,
  marked:false,
  score:0
}


function reducer(state,action)
{
  switch(action.type){
    case "dataReceived":
      return {...state,questions:action.payload,status:'ready'}
    case "dataFailed":
      return {...state,status:'error'}
    case "start":
      return {...state,status:'active',score:0,index:0,marked:false,answer:null}
    case "newAnswer":
      { 
        const curr_q=state.questions[state.index];
        return {...state,answer:action.payload,marked:true,score:action.payload==curr_q.correctOption?state.score+curr_q.points:state.score}
      }
    case "next":
      {
        const idx=state.index
        if(idx<14)
        return{...state,marked:false,index:idx+1,answer:null}
        else return{...state,status:'finish'}
      }
    default:
      throw new Error("Unknown Action")
  }
}

function App() {

  const [state,dispatch]=useReducer(reducer,initialState)
  const {questions,status,index,answer,marked,score}=state

  const n = questions.length;

  useEffect(function(){
    async function fetchQuestions(){
      try{
        const res = await fetch('http://localhost:8000/questions')
        if(!res.ok)
          throw new Error("Something went wrong")
      const data = await res.json()
      dispatch({type:"dataReceived",payload:data})
      }
      catch(err)
      {
        console.log(err);
        dispatch({type:"dataFailed"})
      }
    }
    fetchQuestions() 
  },[])

  return (
    <>
      <Header/>
      <Content>
        {status=='loading'&&<Loading/>}
        {status=='error'&&<Error/>}
        {status=='ready'&&<Ready numQ={n} dispatch={dispatch}/>}
        {status=='active'&&<Question question={questions[index]} dispatch={dispatch} answer={answer} marked={marked} index={index} score={score}/>}
        {status=='finish'&&<Finish score={score} dispatch={dispatch}/>}
      </Content>
    </>
  )
}

export default App
