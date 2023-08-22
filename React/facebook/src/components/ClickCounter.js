import React, { useState } from 'react';
 function ClickCounter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count++)}>
                <p>
                    Clicked: {count}
                </p>

            </button>
        </div>

    );
 }
 export default ClickCounter