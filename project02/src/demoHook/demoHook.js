import React, { useState, useEffect } from 'react'

const DemoHook = () => {
    const [count, setCount] = useState(0);
    const [isAgree, setIsAgree] = useState(false);

    const increaseCount = () => {
        if (isAgree) {
            setCount(count + 1);
        }
        // setCount(count + 1);
    }
    const agreeToChangeCount = () => {
        setIsAgree(true);
    }

    // useEffect đại diện cho cả 3 lifecycle trong classComponent là: componentDidMount,componentDidUpdate, componentWillUnMount
    // useEffect(() => {
    //     console.log('useEffect just run in the first time!!!')
    // }, [])


    useEffect (() => {
        console.log('useEffect just run in the first time!!!')
    },[])

    useEffect (() => {
        console.log('useEffect run!')
    })
//  giong vs componentDidMount
    useEffect (() => {
        // dung de fetch data
        console.log('useEffect just run when isagree change!')
    },[isAgree])

    return (
        <div>
            <h1>DemoHook</h1>
            <button className="btn btn-success" onClick={increaseCount}>Count</button>
            <button className="btn btn-danger" onClick={agreeToChangeCount}>Agree to change Count</button>
            <h1 className="display-4">Count: {count}</h1>
        </div>
    )
}

export default DemoHook;