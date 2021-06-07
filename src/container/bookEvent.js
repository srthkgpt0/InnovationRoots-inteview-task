import React, { useEffect, useState } from 'react'
import { Table, Space, Button, message } from 'antd'
import '../styles/bookEvent.css'
import ApiEndPoints from '../utilities/ApiEndPoints'
import APIrequest from '../services/ApiRequest'
import { useSelector } from 'react-redux'
function BookEvent() {
  const [eventList, setEventList] = useState([])
  const userData = useSelector((state) => state.auth.userData)
  useEffect(() => {
    getEventList()
  }, [])
  const getEventList = async () => {
    try {
      const payload = {
        ...ApiEndPoints.getEventList
      }
      const res = await APIrequest(payload)
      console.log(res.response)
      setEventList(res.response)
    } catch (error) {
      message.error(error, 3)
    }
  }
  const handleBookEvent = async (record) => {
    try {
      const payload = {
        ...ApiEndPoints.bookEvent(record._id),
        bodyData: {
          name: userData.name
        }
      }
      const res = await APIrequest(payload)
      message.success('You have successfully booked for the event', 2)
    } catch (error) {
      message.error(error, 2)
    }
  }
  const columns = [
    {
      title: 'Event Title',
      dataIndex: 'eventName',
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
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer']
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser']
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher']
  //   }
  // ]
  return (
    <div className='mainContent'>
      <h2>Book Event</h2>
      <Table columns={columns} dataSource={eventList} />
    </div>
  )
}

export default BookEvent
