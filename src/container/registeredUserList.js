import React, { useEffect, useState } from 'react'
import { Table, Tag, Space } from 'antd'
import '../styles/registeredUserList.css'
import APIrequest from '../services/ApiRequest'
import ApiEndPoints from '../utilities/ApiEndPoints'
function RegisteredUserList() {
  const [data, setData] = useState([])
  useEffect(() => {
    getRegisteredUserList()
  }, [])
  const getRegisteredUserList = async () => {
    try {
      const payload = {
        ...ApiEndPoints.getRegisteredUserList
      }
      const res = await APIrequest(payload)
      console.log(res)
      setData(res.response)
    } catch (error) {}
  }
  const columns = [
    {
      title: 'Event Name',
      dataIndex: 'eventName',
      key: 'name'
    },

    {
      title: 'Users Registered',
      key: 'user',
      dataIndex: 'user',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.name.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    }
  ]

  return (
    <div className='mainContent'>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default RegisteredUserList
