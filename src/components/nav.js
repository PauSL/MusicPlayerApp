import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";




const Nav = ({setLibraryStatus, libraryStatus}) => {

    return(

        <nav>
            <h2>Player</h2>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>

    )
}

export default Nav;