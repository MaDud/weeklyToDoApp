import React, {useEffect} from 'react';

const Test = ({name}) => {
    useEffect(() => {
        console.log(`${name}`)
    },[name])

    return (
        <div>
           {name}
        </div>
    )

}

export default Test