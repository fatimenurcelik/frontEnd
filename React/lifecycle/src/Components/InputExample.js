import {useState} from 'react'

function InputExample() {
  const [form, setForm] = useState({nameee: " enter your name " , surname: " enter your surname"})  

  const onChangeInput = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <div className='container'>
        <br/><br/><br/><br/>
        Name 
        <br/>
        <input name="nameee" value= {form.nameee} onChange={onChangeInput}/> <br/><br/>
        Surname 
        <br/>
        <input name="surname" value= {form.surname} onChange={onChangeInput}/> <br/><br/><br/><br/>
        {form.nameee} {form.surname}
    </div>
  )
}

export default InputExample