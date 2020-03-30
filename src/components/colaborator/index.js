
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../layout';
import Progress from '../progress';
import Table from '../table';

import * as R from 'ramda';

import Collaborator from './colaborator';
import Feedback from './feedback';
import { Query } from './typeDef';

import PageHeader from '../pageHeader';
import Link from 'next/link'; 
import Head from 'next/head';

export default () => {

    const { refetch, loading, data = {} } = useQuery(Query.LIST, {fetchPolicy: 'no-cache'});
    const { getCollaborators } = data;

    const [ collaborator, setCollaborator ] = useState(null);
    const [ feedback, setFeedback ] = useState(null);

    const closeCollaborator = R.pipe(() => setCollaborator(null), refetch);
    const closeFeedback = R.pipe(() => setFeedback(null), refetch);

    return (
      <Layout>
        <Progress show={loading} />
        <Head>
          <title>Colaboradores</title>
        </Head>
        <PageHeader title={'Listagem de Colaboradores'}>
          <Link color="inherit" href="/colaborator/">Colaboradores</Link>
        </PageHeader>
      
        <Table
          columns={[
            { title: 'Nome', field: 'name' },
            { title: 'Empresa', field: 'company' },
            { title: 'Cargo do Colaborador', field: 'role'}
          ]}
          data={getCollaborators}
          actions={[
            {
              icon: 'listIcon',
              tooltip: 'Informações do Colaborador',
              onClick: (event, rowData) =>  setCollaborator(rowData.id)
            },
            {
              icon: 'messageIcon',
              tooltip: 'Feedbacks do Colaborador',
              onClick: (event, rowData) =>  setFeedback(rowData.id)
            },
          ]}
        />

        { collaborator && <Collaborator id={collaborator} onClose={closeCollaborator} />}   
        { feedback && <Feedback id={feedback} onClose={closeFeedback} />}

      </Layout>
  );
};