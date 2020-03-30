import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation } from './typeDef';
import { FormModal, FormHeader, Form } from '../form';
import { InputText, InputNumber } from '../form/inputs';

import Progress from '../progress';

const AddFeedback = ({ id, onClose }) => {

    const [createFeedback, { loading: mutationLoading }] = useMutation(Mutation.CREATE_FEEDBACK);

    const collaboratorId = id;

    const initialState = {
       'collaboratorId': collaboratorId,
       'message': '',
       'like': ''
    };
    
    const save = (formFields) => {
        createFeedback({ variables: { collaboratorId, input: formFields } });;
        onClose();
    };

    return (
        <FormModal onClose={onClose}>
            <Progress show={mutationLoading} />

            <FormHeader onClose={onClose}>Adicionar novo Feedback</FormHeader>

            <Form onSave={save} initialState={initialState}>

                <InputText name='message' label='Digite seu Feedback aqui' fullWidth />

                <InputNumber name='like' label='Likes' />

            </Form>
        </FormModal>
    );
};

export default AddFeedback;
