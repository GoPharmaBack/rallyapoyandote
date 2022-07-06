import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
function Formulario() {
  const url = 'https://mern-api-mmgroup-production.up.railway.app/api/submit';
  const [data, dataSet] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    }).then((res) => {
      setMessage(res.data.message);
      console.log(res.data);
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    dataSet(newdata);
  }
  return (
    <>
 <div className='form-section'>
        <div className='contenedor'>
         
          {!message ? (
            <form onSubmit={(e) => submit(e)}>
              <div className='group-form'>
                <input
                  onChange={(e) => handle(e)}
                  type='text'
                  value={data.name}
                  name='name'
                  id='name'
                  placeholder='Nombre'
                  required
                />
              </div>
              <div className='group-form'>
                <input
                  onChange={(e) => handle(e)}
                  value={data.email}
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Email'
                />
              </div>
              <div className='group-form'>
                <input
                  required
                  onChange={(e) => handle(e)}
                  value={data.phone}
                  type='phone'
                  name='phone'
                  id='phone'
                  placeholder='Teléfono'
                />
              </div>
              <div className='group-form'>
                <textarea
                  required
                  onChange={(e) => handle(e)}
                  value={data.message}
                  name='message'
                  id='message'
                  cols='20'
                  rows='7'
                  placeholder='Por favor, escriba su mensaje'
                />
              </div>
              <button className='btn-submit' type='submit'>
                Enviar
              </button>
            </form>
          ) : (
            <div className='mensaje'>
              <h2>
                Your message has been sent successfully. We will communicate
                soon
              </h2>
              <h2>
                Tu mensaje ha sido enviado correctamente. Nos comunicaremos
                pronto
              </h2>
            </div>
          )}
        </div>
      
      </div>
    </>
  )
}

export default Formulario