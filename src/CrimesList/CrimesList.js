import React from 'react'

//this is a pure function takes in some input puts out output 

const CrimesList = (props) => {

    const crimesList = props.crimes.map((crime, i) => {
        return (<li key={i}>{crime.description}
        <button onClick={props.deleteCrime.bind(this, i)}>Delete</button>
        </li>
        )
    })
    return(

        <div>
            <h4>CrimesList</h4>
            <ul>
                {crimesList}
            </ul>

        </div>
    )


}

export default CrimesList