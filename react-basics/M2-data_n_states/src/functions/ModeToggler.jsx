import { useState } from 'react';

function ModeToggler() {
    const [darkModeOn, setDarkModeOn] = useState(false);
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={() => {
                setDarkModeOn(!darkModeOn);
                console.log(!darkModeOn);
                }}>Toggle Mode</button>
            
        </div>
        )
}
export default ModeToggler;