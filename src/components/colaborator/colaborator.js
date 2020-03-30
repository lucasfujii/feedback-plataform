import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './typeDef';
import { FormModal, FormHeader } from '../form';

import Progress from '../progress';

import Table from '../table';

const Collaborator = ({ id, onClose }) => {

    const { loading, data = {} } = useQuery(Query.GET_COLLABORATOR_DETAILS, { fetchPolicy: 'no-cache', variables: { id } });
    const { getCollaborator } = data;

    return (
        <FormModal onClose={onClose}>
            <Progress show={loading} />
            <FormHeader onClose={onClose}>Informações gerais do Colaborador</FormHeader>

            <Table
                columns={[
                    { title: 'Nome', field: 'name' },
                    { title: 'Empresa', field: 'company' },
                    { title: 'Cargo do Colaborador', field: 'role'},
                    { title: 'Data de Criação', field: 'createdAt' },
                    { title: 'Caminho da Foto', field: 'avatar'}
                ]}
                data={getCollaborator}
            />
        </FormModal>
    );
};

export default Collaborator;