import schoologo from "../../assets/starlitelogo-removebg.png"
import { Link } from "react-router-dom"
import "./Errorpage.css"

function Errorpage(){
    return(
        <section className="errorpage">
            <img src={schoologo} width="100"/>
            <h2>Oops! That was not supposed to happen.</h2>
            <p>You may just be experiencing a network failure, or the page does not exist at all. Refresh the page again or return to the home page.</p>
            <Link to="/"><button>return to home page</button></Link>

        </section>
    )
}

export default Errorpage