import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function GraficoRecharts({ dataKey }) {
    const [data] = useState([
        { name: 'Janeiro', vendas: 4000, clientes: 2400, produtos: 120, servicos: 85 },
        { name: 'Fevereiro', vendas: 3000, clientes: 1398, produtos: 90, servicos: 75 },
        { name: 'Março', vendas: 2000, clientes: 9800, produtos: 150, servicos: 95 },
        { name: 'Abril', vendas: 2780, clientes: 3908, produtos: 70, servicos: 60 },
        { name: 'Maio', vendas: 1890, clientes: 4800, produtos: 110, servicos: 80 },
    ]);

    return (
        <div>
            <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey={dataKey} fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
