/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';

export default function BarraNavegacao({ tema, botoes, seletorView }) {
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

        return () => {
            elems.forEach(elem => {
                const instance = M.Sidenav.getInstance(elem);
                if (instance) instance.destroy();
            });
        };
    }, []);

    const gerarListaBotoes = () => {
        if (botoes.length <= 0) return null;

        return botoes.map(valor => (
            <li key={valor}>
                <a onClick={(e) => seletorView(valor, e)}>{valor}</a>
            </li>
        ));
    };

    const estilo = `${tema}`;

    return (
        <>
            <nav className={estilo}>
                <div className="nav-wrapper teal darken-4">
                    <a href="#" className="brand-logo ms-3">WB</a>
                    <a href="#" data-target="mobile-menu" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    );
}
