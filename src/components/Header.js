import React from 'react';


const Header = ({ handleToggleDarkMode }) => {
    return(
        <div className="header">
            <h1> Notes App by Kaan</h1>
            <button 
                onClick={()=> 
                    handleToggleDarkMode(
                        (previousDarkmode)=> !previousDarkmode
                    )
                } 
                className="save">Toggle Mode 
            </button>

        </div>
    )
}

export default Header;