import React from "react";

export default function FormularioCadastro({ tema, children }) {
    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="row">
            <form className="col s12">
                {children}

                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
