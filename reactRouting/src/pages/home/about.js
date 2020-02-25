import React from 'react';
import { Button } from '@material-ui/core';
import style from '../../style';
import { useEffect } from 'react';


export default function About() {

    const classes = style();

    useEffect(() => {
        console.log(useEffect);
        // setTimeout(()=>{
        //     console.log('hello')
        // }, 1000);
        let intrerval = setInterval(() => {
            console.log('hello')
        }, 1000);

        // tương tự như componentWillUnmount nếu như dùng classclass
        return () => {
            clearInterval(intrerval);
        }
    })

    return (
        <div className={classes.content}>
            <h1>Button Demo</h1>
            <span>This is Demo</span>
            <Button variant="contained" color="secondary">
                Primary
            </Button>
        </div>
    )
}
