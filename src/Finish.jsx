// eslint-disable-next-line react/prop-types
function Finish({score,dispatch})
{
    const percent = ((score/280)*100).toFixed(2);
    return(
        <>
            <div className="bg-cyan-500 p-4 text-white rounded-full mt-10 text-2xl">
            You scored {score} out of 280 ({percent})%
            </div>
            <button className="p-4 text-white text-xl bg-gray-600 rounded-full w-40 hover:bg-gray-800 mt-10 float-right"
            onClick={()=>dispatch({type:"start"})}> Restart Quiz </button>
        </>
    )
}
export default Finish;