import React from 'react'

function About() {
    return (
            <React.Fragment> {/* used  when you don't NEED a <div>, like when you don't need an element in the dom */}
                <h1>About</h1>
                <p>This a ToDo ListAPP. v1.000.  My React Crash Lessions</p>
            </React.Fragment>  
            //  It's like a Ghost-Element:  It doesn't dhow up in the dom
    )
}
export default About;
