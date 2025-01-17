/* eslint-disable react/prop-types */
function Question({question,dispatch,answer,marked,index,score})
{ 
    return(
        <div className="mt-4 text-white">
            <progress max={15} value={index} className="w-96 rounded-lg"/>
            <div className="flex justify-between">
                <p className="text-xl text-left">Question : <strong>{index+1}</strong>/15</p>
                <p className="text-xl text-right">Score : <strong>{score}</strong>/280</p>
            </div>
            <h1 className=" text-3xl font-bold mt-4">{question.question}</h1>
            <div className="grid gap-2 mt-4 place-self-center">
                {question.options.map((o,i)=>
                <button key={i} className={`rounded-full min-w-96 mt-1 text-2xl p-4
                hover:cursor-pointer ${!marked?"hover:bg-gray-800":""} ${i==answer?"translate-x-5":"-translate-x-5"} 
                font-semibold place-content-center border border-r-2 border-gray-500
                 ${marked&&i==question.correctOption?"bg-cyan-600":marked?"bg-orange-400":"bg-gray-600"}`}
                onClick={()=>dispatch({type:"newAnswer",payload:i})}
                disabled={marked}>{o}</button>)}
            </div>
            {marked&&<Next dispatch={dispatch}/>}
        </div>
    )
}

function Next({dispatch})
{
    return(
        <button className="p-4 text-white text-xl bg-gray-600 rounded-full float-right w-40 hover:bg-gray-800"
        onClick={()=>dispatch({type:"next"})}>Next</button>
    )
}
export default Question