import React from 'react'
import { Table, Tag, Space, Button } from 'antd'
import '../styles/bookEvent.css'
function BookEvent() {
  const handleBookEvent = (record) => {
    console.log(record)
  }
  const columns = [
    {
      title: 'Event Title',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate'
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate'
    },
    {
      title: 'Event Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size='middle'>
          <Button onClick={() => handleBookEvent(record)}>Book Event</Button>
        </Space>
      )
    }
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
  return (
    <div className='mainContent'>
      <h2>Book Event</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default BookEvent
