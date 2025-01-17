import react_img from'./assets/logo192.png'
function Header()
{
    return(
        <header className="flex gap-10 justify-center">
            <img src={react_img} alt='react-logo'/>
            <h1 className="text-white text-8xl text-bold font-sans p-8"> The React Quiz</h1>
        </header>
    )
}
export default Header