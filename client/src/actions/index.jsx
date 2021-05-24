import { message } from 'antd';
import axios from 'axios';

export const GET_RECORDS = 'GET_RECORDS'
export const ADD_RECORD = 'ADD_RECORD'


const errorMsg = (msg, time = 3) => {
    message.error(msg, time);
};


export const getAllRecords=()=>{
    return async(dispatch)=>{
        try{
            let records = await axios.get(
                'http://localhost:3001/'
            );
            dispatch(getRecords(records.data))
        }catch(err){
            console.log(err)
            errorMsg('Internal server error. Try again')
        }
    }
}

export const addRecords = (newData)=>{
    return async (dispatch)=>{
        try{
            let add = await axios.post('http://localhost:3001/',newData)
            dispatch(addRecord(add.data));
        }catch(err){
            console.log(err)
            errorMsg('Internal server error. Try again')
        }
    }
}





const getRecords = (data) => ({
    type:GET_RECORDS,
    payload: data
})

const addRecord = (data) => ({
    type:ADD_RECORD,
    payload: data
})