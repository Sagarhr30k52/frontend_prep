import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
  const param = useParams();
  return (
    <div>Chat {param.uniqueId}</div>
  )
}

export default Chat