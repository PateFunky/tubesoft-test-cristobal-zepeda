import {Table} from 'antd'
import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllRecords } from '../actions';
import './Record.css';


export const Record = () => {


    const records = useSelector(state => state.records)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllRecords())
    },[])
    

    

    const columns = [
        {
            title:'Lasts Records',
            dataIndex: 'record',
            key: 'record',
            align: 'center',
            width: '0%'
        }
    ]

    return (
        <div className='recordDivP'>
            <div className='recordDiv'>
              <Table
                width='auto'
                size="small"
                dataSource={records}
                columns={columns}
                pagination={{ position: ['bottomCenter'],pageSize: 5 }}
                rowKey="id"
            />
            </div>
        </div>
    )
}
