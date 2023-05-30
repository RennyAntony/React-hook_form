import React from 'react';
import {useForm} from "react-hook-form"
import './App.css';

function App() {
  const{register,handleSubmit,formState:{errors},}=useForm();


const onSubmit = (data) => {
  console.log(data);
}
return(
  <div class="hi">
  <h1>React Hook Form </h1>
  <div class="form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea type="text" id="name" {...register("name",{required:true})} placeholder="Username" />
      {errors.name && <span> Username is required</span>}
      <textarea type="email" id="email" {...register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/>6,})} placeholder="Email"/>
      {errors.email && <span>Please enter a valid email address</span>}
      <textarea type="password" id= "password" {...register("password",{required:true})} placeholder="Password"/>
      {errors.password && <span>Please enter a valid password</span>}
      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
 )
}
export default App;
