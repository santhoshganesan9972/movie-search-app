import { useState } from "react";
import { Link } from "react-router-dom";
export default function MovieSearchPage() {

    const [Userinput, setUserinput] = useState("");
    const [apidata, setapidata] = useState(null);
    const [error, seterror] = useState("");

    async function fetchdata() {
        try {
            const res = await fetch(`http://www.omdbapi.com/?t=${Userinput}&apikey=6dc6d0ca`);
            const data = await res.json();
            setapidata(data);
            seterror("");
        } catch (error) {
            seterror(error);
        }
    }
    return (
        <>
            <div>
                <h1>This is Movie Search Page</h1>
                {apidata ? (
                    <div>
                        <h2><i>{apidata.Title}</i></h2>
                        <nav style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to={`/MovieSearchApp/MovieDetailspage/:${apidata.Title}`}>
                                <img src={apidata.Poster} alt={apidata.Title} />
                            </Link>
                        </nav>
                        <marker>Click The Image To See The Movie Details</marker>
                    </div>
                ) : (
                    <div>
                        <input type="text" name="moviename"
                            placeholder="Enter a Movie Name"
                            value={Userinput}
                            onChange={(e) => setUserinput(e.target.value)} />

                        <button onClick={fetchdata}>Search</button>

                        <br /><br />
                        <center>
                             <button><Link to='/MovieSearchApp'>HomePage</Link></button> 
                        </center>
                    </div>
                )}
            </div>
        </>

    )
}