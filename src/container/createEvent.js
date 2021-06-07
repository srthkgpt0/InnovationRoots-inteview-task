import { Button, DatePicker, Form, Input, message } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import APIrequest from '../services/ApiRequest'
import '../styles/dashboard.css'
import ApiEndPoints from '../utilities/ApiEndPoints'
function CreateEvent() {
  const [form] = Form.useForm()
  const userData = useSelector((state) => state.auth.userData)
  // console.log(userData, 'userData')
  // useEffect(() => {}, [userData])
  const onFinish = async (values) => {
    console.log(values.startDate.format('DD/MM/YYYY'))
    values.startDate = values.startDate.format('DD/MM/YYYY')
    values.endDate = values.endDate.format('DD/MM/YYYY')
    const payload = {
      ...ApiEndPoints.createEvent,
      bodyData: {
        ...values
      }
    }
    const res = await APIrequest(payload)
    if (res.status) {
      message.success('Successfully Created Event', 2)
      form.resetFields()
    }
  }
  return (
    <>
      <main className='mainContent'>
        <h2>Create Event</h2>
        <Form form={form} onFinish={onFinish}>
          <label>Event Title</label>
          <Form.Item name='eventName'>
            <Input type='text' />
          </Form.Item>
          <div className='dates'>
            <div>
              <label>Event Start Date</label>
              <Form.Item name='startDate'>
                <DatePicker format='DD/MM/YYYY' />
              </Form.Item>
            </div>
            <div>
              <label>Event End Date</label>
              <Form.Item name='endDate'>
                <DatePicker format='DD/MM/YYYY' />
              </Form.Item>
            </div>
          </div>
          <label>Event Description</label>
          <Form.Item name='description'>
            <Input.TextArea type='text' />
          </Form.Item>
          <div className='row'>
            <div className='input'>
              <Button htmlType='submit'>Create Event</Button>
            </div>
          </div>
        </Form>
      </main>
    </>
  )
}

export default CreateEvent
