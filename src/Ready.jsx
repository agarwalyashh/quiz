/* eslint-disable react/prop-types */
function Ready({numQ})
{
    
    return(
        <div className="text-white mt-10 grid gap-8">
            <h1 className="text-7xl font-semibold">Welcome to The React Quiz!</h1>
            <h2 className="text-3xl font-semibold">{numQ} questions to test your React Mastery</h2>
            <button className="bg-gray-600 p-4 rounded-md w-36 place-self-center text-xl hover:bg-gray-900">Let&apos;s Start</button>
        </div>
    )
}
export default Ready