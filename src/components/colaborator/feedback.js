import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Query, Mutation } from './typeDef';
import { FormModal, FormHeader } from '../form';

import * as R from 'ramda';

import AddFeedback from './addFeedback';
import IncrementLike from './incrementLike';
import Dialog from '../dialog';
import Progress from '../progress';

import Table from '../table';

const Feedback = ({ id, onClose }) => {

    const [deleteFeedback, { error: mutationErrorCancel }] = useMutation(Mutation.DELETE_FEEDBACK);

    const { refetch, loading, data = {} } = useQuery(Query.GET_COLLABORATOR_FEEDBACKS, { fetchPolicy: 'no-cache', variables: { id } });
    const { getFeedbackForCollaborator } = data;

    const [ add, setAdd ] = useState(null); 
    const [ increment, setIncrement ] = useState(null); 
    const [ confirmDelete, setConfirmDelete ] = useState(null);

    const closeAdd = R.pipe(() => setAdd(null), refetch); 
    const closeIncrement = R.pipe(() => setIncrement(null), refetch);
    const closeConfirmDelete =  R.pipe(() => setConfirmDelete(null), refetch);

    const deleteFeedbackAction = () => {
       deleteFeedback({ variables: { collaboratorId: id, feedbackId: confirmDelete.id, dateFeedback: confirmDelete.createdAt } });
       if (mutationErrorCancel) return;
       return closeConfirmDelete();
    };

    return (
        <FormModal onClose={onClose}>
            <Progress show={loading} />
            <FormHeader onClose={onClose}>Feedbacks do Usuário</FormHeader>

            <Table
                options={{ pageSize: 20 }}
                columns={[
                    { title: 'Feedback', field: 'message' },
                    { title: 'Data de registro', field: 'createdAt' },
                    { title: 'Quantidade de Likes', field: 'like'}
                ]}
                data={getFeedbackForCollaborator}
                actions={[
                    {
                        isFreeAction: true,
                        icon: 'addIcon',
                        tooltip: 'Novo Feedback',
                        onClick: () => setAdd(id)
                    },
                    {
                        icon: 'exposurePlus1Icon',
                        tooltip: 'Incrementar Likes',
                        onClick: (event, rowData ) => setIncrement(rowData.id)
                    },
                    {
                        icon: 'cancelIcon',
                        tooltip: 'Deletar Feedback',
                        onClick: (event, { id, createdAt }) => setConfirmDelete({id, createdAt})
                    },    
                ]}
            />

            { add && <AddFeedback id={add} onClose={closeAdd} />}
            { increment && <IncrementLike id={increment} collaboratorId={id} onClose={closeIncrement} />}
            { confirmDelete && <Dialog onCancel={onClose} onConfirm={deleteFeedbackAction} title={`Deseja excluir o Feedback? Só poderão ser excluídos os Feedback's criados a menos de 5 minutos!`} cancelText='Não' confirmText='Sim'></Dialog>}

        </FormModal>    
    );
};

export default Feedback;