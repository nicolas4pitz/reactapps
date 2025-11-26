import {useForm} from 'react-hook-form'
import './App.css'
import { useState } from 'react'

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data)
    console.log(data)
  }

  return (
    <>
      <div className='container'>
        <pre>
          {JSON.stringify(userInfo, undefined, 2)}
        </pre>
        <form onSubmit={ handleSubmit(onSubmit)}>
          <h1>Registration Form</h1>
          <div className='ui divider'></div>
          <div className='ui form'>
            <div className='field'>
              <label htmlFor="Username">Username</label> 
              <input type="text" name="username" id="" placeholder='Username' {...register("username", {required: "Username é obrigatório"})}/>
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className='field'>
              <label htmlFor="Email">Email</label> 
              <input type="email" name="email" id="" placeholder='Email' {...register("email", {required: "Email é obrigatório"})}/>
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className='field'>
              <label htmlFor="Password">Password</label> 
              <input type="password" name="password" id="" placeholder='Password' {...register("password", {minLength: {value: 6, message: "Minimo de 6 caracteres"} })}/>
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button className='fluid ui button blue'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
