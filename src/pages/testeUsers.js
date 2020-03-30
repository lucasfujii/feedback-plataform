import React from 'react';
import axios from 'axios';
import Head from 'next/head';

import Link from 'next/link'; 

const User = ({users}) => (
    <div>
        <Head>
            <title>Colaboradores</title>
        </Head>
        <ul> 
        { users.map(user => (
            <li> {user.name}, {user.company}, {user.role} </li>
        ))}
        </ul>
       <Link href='/'>
         <a>Voltar</a>
       </Link> 
    </div>
);

User.getInitialProps = async () => {
    const response = await axios.get(
        'http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator'
    );
    return { users: response.data };
}

export default User;