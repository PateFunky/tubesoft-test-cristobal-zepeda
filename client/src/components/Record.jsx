import {Table} from 'antd'

export const Record = () => {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title:'Records',
            dataIndex: 'record',
            key: 'record'
        }
    ]

    return (
        <div>
              <Table
                //dataSource={}
                columns={columns}
                pagination={{ position: ['bottomCenter'] }}
                rowKey="id"
            />
        </div>
    )
}
