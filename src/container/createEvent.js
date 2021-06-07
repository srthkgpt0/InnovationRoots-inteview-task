import { Button, Form, Input, message } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import APIrequest from '../services/ApiRequest'
import '../styles/dashboard.css'
import ApiEndPoints from '../utilities/ApiEndPoints'
function CreateEvent() {
  const [form] = Form.useForm()
  const userData = useSelector((state) => state.auth.userData)
  useEffect(() => {
    form.setFieldsValue({
      ...userData
    })
  }, [userData])
  const onFinish = async (values) => {
    const payload = {
      ...ApiEndPoints.updateUser,
      bodyData: {
        ...values
      }
    }
    const res = await APIrequest(payload)
    if (res.status) {
      message.success('Successfully Updated', 2)
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

          <label>Event Start Date</label>
          <Form.Item name='startDate'>
            <Input type='date' />
          </Form.Item>

          <label>Event End Date</label>
          <Form.Item name='endDate'>
            <Input type='date' />
          </Form.Item>
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
