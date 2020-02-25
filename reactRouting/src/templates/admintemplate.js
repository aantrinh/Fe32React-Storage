import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom'; //redirect la the 


const AdminLayout = (props) => {
    return (
        <Fragment>
            <div> NAVBAR ADMIN</div>
            {props.children}
        </Fragment>
    );
};

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(porpsComponent) => {
                // Cơ chế bảo vệ web
                if (localStorage.getItem("userAdmin")) {
                    return (
                        <AdminLayout>
                            <Component {...porpsComponent} />
                        </AdminLayout>
                    )
                } else {
                    return <Redirect to="/admin" />
                }
            }
            }
        />
    );
}
