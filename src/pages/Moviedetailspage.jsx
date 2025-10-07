import { useParams,Link } from "react-router-dom"
import { useEffect, useState } from "react";

export default function MovieDetailsPage() {

    const [Apidata, setApidata] = useState(null);
    const [error, seterror] = useState("");
    const { moviename } = useParams();

    async function fetchdata() {
        try {
            const res = await fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=6dc6d0ca`);
            const data = await res.json();
            setApidata(data);

        } catch (err) {
            seterror(err)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [moviename])


    return (
        <div>
            <h1>This is Movie Details Page</h1>
            {Apidata ? (
                <div>
                    <ul style={
                        {
                            border: "2px solid whitesmoke",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            listStyleType: "none",
                            padding: "10px"
                        }}>
                        <li><h2></h2><img src={Apidata.Poster} alt={Apidata.Title} style={{ width: "200px", borderRadius: "15px" }} /></li>
                        <li><h2>Movie Name:</h2> <i>{Apidata.Title}</i></li>
                        <li><h2>Released:</h2> <i>{Apidata.Released}</i></li>
                        <li><h2>Genre:</h2> <i>{Apidata.Genre}</i></li>
                        <li><h2>Runtime:</h2> <i>{Apidata.Runtime}</i></li>
                        <li><h2>Awards:</h2> <i>{Apidata.Awards}</i></li>
                        <li><h2>ImdbRating:</h2> <i>{Apidata.imdbRating}</i></li>
                    </ul><br />
                    <button><Link to='/MovieSearchApp/MovieSearchPage' >MovieSearchPage</Link></button><br />
                    <button><Link to='/MovieSearchApp'>HomePage</Link></button>      
                </div>
            ) : (
                <div>
                    {error ? (
                        <i>{error}</i>
                    ) : (
                        <h2>Loading Data...</h2>
                    )}
                </div>
            )}
        </div>

    )
}