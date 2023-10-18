import styled from "styled-components";
import {Form,ErrorMessage } from 'formik';

export const FormContainer = styled.div`
border: 1px solid #008B8B;
border-radius: 5px;
width: 250px;
display: flex;
justify-content: center;
padding-bottom: 10px;
margin-bottom: 10px;
margin-top: 10px;
`

export const AddForm = styled(Form)`
display: flex;
flex-direction: column;
width: 200px;
`

export const FormLable  = styled.label`
    display: flex;
flex-direction: column;
margin-bottom: 20px;
gap: 5px;
`

export const ErrMsg = styled(ErrorMessage)`
    color: brown;
`