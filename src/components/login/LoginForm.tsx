import React from 'react'
import '../../../styles/LoginForm.css'

type Props = {
  title: string
}

const LoginForm: React.FC<Props> = (props) => {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <form className="flex flex-rows p-2 bg-red-500 text-white font-bold">
        <input
          type="text"
          placeholder="email"
          className="email"
        />
        <input
          type="password"
          placeholder="password"
          className="password"
        />
        <input
          type="submit"
          value="send"
          className="submit"
        />
      </form>
    </div>
  )
}

export default LoginForm
