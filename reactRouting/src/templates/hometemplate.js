import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../component/navbar';

const HomeLayout = (props) => {
    return (
        <Fragment>
            <Navbar />
            {props.children}
        </Fragment>
    );
};

export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props} //...props chua cac component ben trang app.js tru cai Component
            render={(porpsComponent) => (
                <HomeLayout>
                    <Component {...porpsComponent} />
                </HomeLayout>
            )}
        />
    )
};
