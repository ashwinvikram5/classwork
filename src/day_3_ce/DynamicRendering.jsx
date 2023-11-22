import React, { useState } from 'react';

const DynamicRendering = () => {

    const [btnTxt, setBtnTxt] = useState('Show');
    const [showData, setShowData] = useState(false);

    const handleEvent = () => {
        if (btnTxt === 'Show') {
            setBtnTxt('Hide');
            setShowData(true)
        }
        else {
            setBtnTxt('Show');
            setShowData(false);
        }
    }

    return (
        <div>
            {showData ? <p>"Hi! How are You!!!"</p> : <p></p>}
            <button onClick={handleEvent}>{btnTxt} Component</button>
        </div>
    )
}

export default DynamicRendering;