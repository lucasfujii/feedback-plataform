import React from 'react';
import Link from 'next/link'; 
import Head from 'next/head';

const Home = () => (
    <div className="container">
        <link href="/App.css" rel="stylesheet" />
        <Head>  
            <title>Home</title>
        </Head>

        <div className="content">
            <h1>Feedback Plataform</h1>
              <br></br>
                <p>
                 Visualize e envie <strong>Feedback's</strong><br></br>
                  para os colaboradores da sua empresa, ajudando-os a <strong>melhorar</strong>.
                </p>
            <Link href='/colaborator'>Colaboradores da Empresa</Link>
        </div>
    </div>
);

export default Home;