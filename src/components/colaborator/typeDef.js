import gql from 'graphql-tag';

export const Query = {
  LIST: gql`
  {
    getCollaborators{
      id
      createdAt
      name
      avatar
      company
      role
    }
  }
  `,
  GET_COLLABORATOR_DETAILS: gql`
    query getCollaboratorDetails($id: Int!) {
      getCollaborator(collaboratorId: $id) {
        id
        createdAt
        name
        avatar
        company
        role
      }
    }
  `,
  GET_COLLABORATOR_FEEDBACKS: gql`
    query getCollaboratorFeedbacks($id: Int!) {
      getFeedbackForCollaborator(collaboratorId: $id){
        id
        collaboratorId
        createdAt
        message
        like
      }
    }
  `,
};

export const Mutation = {
  CREATE_FEEDBACK: gql`
    mutation createFeedback($collaboratorId: Int!, $input: InputFeedback!) {
      createFeedback(collaboratorId: $collaboratorId, input: $input){
        collaboratorId
        createdAt
        message
        like
      }
    }
  `,
  INCREMENT_LIKE_FOR_FEEDBACK: gql`
    mutation incrementLikeForFeedback($collaboratorId: Int!, $feedbackId: Int!, $input: InputFeedback!) {
      incrementLikeForFeedback(collaboratorId: $collaboratorId, feedbackId: $feedbackId, input: $input){
        id
        like
      } 
    }
  `,
  DELETE_FEEDBACK: gql`
    mutation deleteFeedback($collaboratorId: Int!, $feedbackId: Int!, $dateFeedback: String){
       deleteFeedback(collaboratorId: $collaboratorId, feedbackId: $feedbackId, dateFeedback: $dateFeedback){
         id
       }
    }
  `,
};