import React, { useState, useEffect } from "react";
import BarraNavegacao from "./barraNavegacao";
import Lista from "./lista";
import Pag404 from "./pag404";
import "./roteador.css";
import FormularioCadastro from "./FormularioCadastro";
import MainContainer from "./MainContainer";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Grafico from "./Grafico";
import Comparativo from "./Comparativo";
import './roteador.css'

export default function Roteador() {
    const [tela, setTela] = useState("Clientes");

    useEffect(() => {
        M.FormSelect.init(document.querySelectorAll("select"));

        return () => {
            const selects = document.querySelectorAll("select");
            selects.forEach(select => {
                const instance = M.FormSelect.getInstance(select);
                if (instance) instance.destroy();
            });
        };
    }, [tela]);

    const selecionarView = (novaTela, evento) => {
        evento.preventDefault();

        const selects = document.querySelectorAll("select");
        selects.forEach(select => {
            const instance = M.FormSelect.getInstance(select);
            if (instance) instance.destroy();
        });

        setTela(novaTela);
    };

    const barraNavegacao = (
        <BarraNavegacao
            seletorView={selecionarView}
            tema="teal lighten-4"
            botoes={["Clientes", "Produtos", "Serviços", "Consumo", "Análise"]}
        />
    );

    if (tela === "Clientes") {
        return (
            <>
                {barraNavegacao}
                <MainContainer title="Gerenciar clientes">
                    <FormularioCadastro tema="teal lighten-4">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">nome</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">sobrenome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">telefone</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">e-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input id="cpf" type="text" className="validate" />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input id="data_nascimento" type="date" className="validate" />
                                <label htmlFor="data_nascimento">Data de nascimento</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="data_nascimento ml-7">Selecionar gênero</label>
                            <div className="input-field col s12">
                                <p>
                                    <label>
                                        <input type="radio" name="gender" />
                                        <span>Masculino</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio" name="gender" />
                                        <span>Feminino</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio" name="gender" />
                                        <span>Outro</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </FormularioCadastro>
                    <div className="flex flex-col lg:flex-row w-full justify-between">
                        <div className="lg:w-[49%]">
                            <Lista
                                tema="teal darken-1"
                                titulo="Lista de clientes"
                                itens={[
                                    "Cliente 1",
                                    "Cliente 2",
                                    "Cliente 3",
                                    "Cliente 4",
                                    "Cliente 5",
                                    "Cliente 6",
                                    "Cliente 7",
                                    "Cliente 8",
                                    "Cliente 9",
                                    "Cliente 10",
                                    "Cliente 11",
                                    "Cliente 12",
                                    "Cliente 13",
                                ]}
                            />
                        </div>
                        <div className="lg:w-[49%] lg:mt-[42px] mt-2">
                            <Grafico dataKey="clientes" />
                        </div>
                    </div>
                </MainContainer>
            </>
        );
    } else if (tela === "Produtos") {
        return (
            <>
                {barraNavegacao}
                <MainContainer title="Gerenciar produtos">
                    <FormularioCadastro tema="teal lighten-4">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">nome</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input id="product-price" type="number" className="validate" />
                                <label htmlFor="product-price">preço</label>
                            </div>
                        </div>
                    </FormularioCadastro>
                    <div className="flex flex-col lg:flex-row w-full justify-between">
                        <div className="lg:w-[49%]">
                            <Lista
                                tema="teal darken-1"
                                titulo="Lista de produtos"
                                itens={[
                                    "Produto 1",
                                    "Produto 2",
                                    "Produto 3",
                                    "Produto 4",
                                    "Produto 5",
                                    "Produto 6",
                                    "Produto 7",
                                    "Produto 8",
                                    "Produto 9",
                                    "Produto 10",
                                    "Produto 11",
                                    "Produto 12",
                                    "Produto 13",
                                ]}
                            />
                        </div>
                        <div className="lg:w-[49%] lg:mt-[42px] mt-2">
                            <Grafico dataKey="produtos" />
                        </div>
                    </div>
                </MainContainer>
            </>
        );
    } else if (tela === "Serviços") {
        return (
            <>
                {barraNavegacao}
                <MainContainer title="Gerenciar serviços">
                    <FormularioCadastro tema="teal lighten-4">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">nome</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <input id="service-price" type="number" className="validate" />
                                <label htmlFor="service-price">preço</label>
                            </div>
                        </div>
                    </FormularioCadastro>
                    <div className="flex flex-col lg:flex-row w-full justify-between">
                        <div className="lg:w-[49%]">
                            <Lista
                                tema="teal darken-1"
                                titulo="Lista de serviços"
                                itens={[
                                    "Serviço 1",
                                    "Serviço 2",
                                    "Serviço 3",
                                    "Serviço 4",
                                    "Serviço 5",
                                    "Serviço 6",
                                    "Serviço 7",
                                    "Serviço 8",
                                    "Serviço 9",
                                    "Serviço 10",
                                    "Serviço 11",
                                    "Serviço 12",
                                    "Serviço 13",
                                ]}
                            />
                        </div>
                        <div className="lg:w-[49%] lg:mt-[42px] mt-2">
                            <Grafico dataKey="servicos" />
                        </div>
                    </div>
                </MainContainer>
            </>
        );
    } else if (tela === "Consumo") {
        return (
            <>
                {barraNavegacao}
                <MainContainer title="Gerenciar consumo">
                    <FormularioCadastro tema="teal lighten-4">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <select>
                                    <option value="" disabled selected>
                                        Selecionar cliente
                                    </option>
                                    <option value="1">Cliente 1</option>
                                    <option value="2">Cliente 2</option>
                                    <option value="3">Cliente 3</option>
                                </select>
                                <label>Selecione um cliente</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <select>
                                    <option value="" disabled selected>
                                        Selecionar produto
                                    </option>
                                    <option value="1">Produto 1</option>
                                    <option value="2">Produto 2</option>
                                    <option value="3">Produto 3</option>
                                </select>
                                <label>Selecione um produto</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <select>
                                    <option value="" disabled selected>
                                        Selecionar serviço
                                    </option>
                                    <option value="1">Serviço 1</option>
                                    <option value="2">Serviço 2</option>
                                    <option value="3">Serviço 3</option>
                                </select>
                                <label>Selecione um serviço</label>
                            </div>
                        </div>
                    </FormularioCadastro>
                    <div className="flex flex-col lg:flex-row w-full justify-between">
                        <div className="lg:w-[49%]">
                            <Lista
                                tema="teal darken-1"
                                titulo="Lista de clientes"
                                itens={[
                                    "Cliente 1",
                                    "Cliente 2",
                                    "Cliente 3",
                                    "Cliente 4",
                                    "Cliente 5",
                                    "Cliente 6",
                                    "Cliente 7",
                                    "Cliente 8",
                                    "Cliente 9",
                                    "Cliente 10",
                                    "Cliente 11",
                                    "Cliente 12",
                                    "Cliente 13",
                                ]}
                            />
                        </div>
                        <div className="lg:w-[49%] lg:mt-0 mt-2">
                            <Lista
                                tema="teal darken-1"
                                titulo="Lista de consumo"
                                itens={[
                                    "Consumo 1",
                                    "Consumo 2",
                                    "Consumo 3",
                                    "Consumo 4",
                                    "Consumo 5",
                                    "Consumo 6",
                                    "Consumo 7",
                                    "Consumo 8",
                                    "Consumo 9",
                                    "Consumo 10",
                                    "Consumo 11",
                                    "Consumo 12",
                                    "Consumo 13",
                                ]}
                            />
                        </div>
                    </div>
                </MainContainer>
            </>
        );
    } else if (tela === "Análise") {
        return (
            <>
                {barraNavegacao}
                <MainContainer title="Análise">
                    <div className="flex flex-col lg:flex-row justify-between mt-6">
                        <div className="lg:w-[49%]">
                            <Comparativo tipo="vendas"/>
                        </div>
                        <div className="lg:w-[49%]">
                            <Grafico dataKey="vendas"/>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between mt-6">
                        <div className="lg:w-[49%]">
                            <Lista tema="teal darken-1" titulo="Top 10 clientes por consumo" itens={[
                                        "Cliente 1", 
                                        "Cliente 2", 
                                        "Cliente 3", 
                                        "Cliente 4",
                                        "Cliente 5",
                                        "Cliente 6",
                                        "Cliente 7",
                                        "Cliente 8",
                                        "Cliente 9",
                                        "Cliente 10",
                            ]}/>
                        </div>
                        <div className="lg:w-[49%]">
                            <Lista tema="teal darken-1" titulo="Top 10 clientes que menos consumiram" itens={[
                                        "Cliente 1", 
                                        "Cliente 2", 
                                        "Cliente 3", 
                                        "Cliente 4",
                                        "Cliente 5",
                                        "Cliente 6",
                                        "Cliente 7",
                                        "Cliente 8",
                                        "Cliente 9",
                                        "Cliente 10",
                            ]}/>
                        </div>
                    </div>

                    <Lista tema="teal darken-1" titulo="Top 5 clientes que mais consumiram por valor" itens={[
                        "Cliente 1", 
                        "Cliente 2", 
                        "Cliente 3", 
                        "Cliente 4",
                        "Cliente 5",
                    ]}/>
                </MainContainer>
            </>
        );
    } else {
        return (
            <>
                {barraNavegacao}
                <Pag404 tema="teal lighten-4" />
            </>
        );
    }
}
