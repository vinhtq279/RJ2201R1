import React from 'react';

function Test(){
    const Toggler = ({ toggle, onToggle }) => {
        React.useEffect(() => {
          console.log('I run on every render: mount + update.');
        });
    };
    return (
        <div>
        <button type="button" onClick={onToggle}>
            Toggle
        </button>
    
        {toggle && <div>Hello React</div>}
        </div>
    );
}

export default Test;