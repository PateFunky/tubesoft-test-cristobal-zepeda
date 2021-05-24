import { Dispatch } from 'react'
import { message } from 'antd';

export const GET_RECORDS = 'GET_RECORDS'
export const ADD_RECORD = 'ADD_RECORD'


const errorMsg = (msg, time = 3) => {
    message.error(msg, time);
};

const success = (mensaje) => {
    message.success({
        content: mensaje,
        className: "custom-class",
        style: {
            marginTop: "20vh",
        },
    });
};








const getRecords = (data) => ({
    type:GET_RECORDS,
    payload: data
})

const addRecord = (data) => ({
    type:ADD_RECORD,
    payload: data
})