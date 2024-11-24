/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

export default function MainContainer({ children, title }) {
    return (
        <div className="w-[95%] mx-auto mt-6">
            <h2 className="text-5xl font-bold mb-4">{title}</h2>
            {children}
        </div>
    );
}
