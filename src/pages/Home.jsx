import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <h1>MOVIE SEARCH WEB APPLICATION</h1>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to='/MovieSearchApp/MovieSearchPage' >MovieSearchPage</Link><br />
            </nav>
        </div>
    )
}