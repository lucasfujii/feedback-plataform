import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation } from './typeDef';
import { FormModal, FormHeader, Form } from '../form';
import { InputNumber } from '../form/inputs';

import * as R from 'ramda';

import Progress from '../progress';

const IncrementLike = ({ id, collaboratorId, onClose }) => {

    const [incrementLikeForFeedback, { loading: mutationLoading }] = useMutation(Mutation.INCREMENT_LIKE_FOR_FEEDBACK);
    if(R.isNil(id) || R.isNil(collaboratorId)) return;
    
    const initialState = {
        'like': ''
     };

    const save = (formFields) => {
        incrementLikeForFeedback({ variables: { collaboratorId, feedbackId: id, input: formFields } });;
        onClose();
    };

    return (
        <FormModal onClose={onClose}>
            <Progress show={mutationLoading} />

            <FormHeader onClose={onClose}>Incrementar quantidade de Likes</FormHeader>

            <Form onSave={save} initialState={initialState}>

                <InputNumber name='like' label='Likes' />

            </Form>
        </FormModal>
    );
};

export default IncrementLike;
