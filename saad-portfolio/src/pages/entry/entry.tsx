import { Link } from "react-router-dom"

const Entry = () => {
    return (
        <div>
            <Link to="/loading">
                <button>Go to loading page</button>
            </Link>
        </div>
    );
}

export default Entry;