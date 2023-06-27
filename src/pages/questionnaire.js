import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React, { useState } from 'react'

const RadioOption = ({id, name, value, option}) => {
  return (
    <div className=''>
      <input className='w-5 h-5 mb-2 border bg-blue-500' type="radio" id={id} name={name} value={value} />
      <label className='mr-10 ml-1 text-dark dark:text-light text-lg' for={id}>{option}</label>
    </div>
  )
}
const RadioQuestion = ({name, question, options, binding}) => {
  return (
    <div className='flex flex-col my-5 mb-28'>
      <h1 className='text-2xl flex flex-wrap'>{question}{binding ? (<p className='text-primary dark:text-primaryDark ml-3'>*</p>) : (null) }</h1>
      <div className='mt-10 flex flex-wrap items-center justify-between'>
        {
          options.map((option, index) => (
            <RadioOption key={index} id={index} name={name} value={option} option={option} />
          ))
        }
      </div>
    </div>
  )
}
const TextQuestion = ({name, question, type, placeholder, length, binding}) => {
  let pattern = type === 'numeric' ? '[0-9]+' : type === 'text' ? '[A-Za-z\s]+' : type === 'alphanumeric' ? '[A-Za-z0-9]+' : null
  let inputM = type === 'numeric' ? 'numeric' : type === 'text' ? 'text' : type === 'alphanumeric' ? 'text' : null
  let message = type === 'numeric' ? 'Please enter a numeric value' : type === 'text' ? 'Please enter text only' : type === 'alphanumeric' ? 'Please enter alphanumeric characters only' : null
  return (
    <div className='flex flex-col my-5 mb-28'>
      <h1 className='text-2xl flex flex-wrap'>{question}{binding ? (<p className='text-primary dark:text-primaryDark ml-3'>*</p>) : (null) }</h1>
      <div>
        <input 
          className='w-full mt-10 p-2 border bg-light dark:bg-dark border-gray-500 rounded-md focus:outline-none focus:border-primary dark:focus:border-primaryDark text-lg' 
          placeholder={placeholder} 
          type='text'
          inputMode={inputM}
          name={name}
          maxLength={length}
          pattern={pattern}
          title={message}
          autoComplete='off'
          required={binding}
        />
      </div>
    </div>
  )
}
const DateQuestion = ({name, question,binding}) => {
  return(
    <div className='flex flex-col my-5 mb-28'>
      <h1 className='text-2xl flex flex-wrap'>{question}{binding ? (<p className='text-primary dark:text-primaryDark ml-3'>*</p>) : (null) }</h1>
      <div>
        <input 
          className='w-full mt-10 p-2 border bg-light dark:bg-dark border-gray-500 rounded-md focus:outline-none focus:border-primary dark:focus:border-primaryDark text-lg date'
          type='date'
          name={name}
        />
      </div>
    </div>
  )
}


const questionnaire = () => {
  return (
    <>
      <Head>
        <title>Devi7uke | Questionnaire Page</title>
      </Head>
      {/*<TransitionEffect />*/}
      <main className='!text-dark dark:!text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Cuestionario de egresados' className='!text-6xl mb-16 lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8'/>
          <div className='flex justify-center items-center'>
            <form className='p-16 w-3/4 my-24 dark:bg-dark bg-light rounded-xl border border-solid border-dark/50 dark:border-light/50 border-r-4 border-b-4'>
              <TextQuestion name='Matricula' question='Ingresa tu matricula' placeholder='172817' length={6} type='numeric' binding={true}/>
              <RadioQuestion name='ColorFav' question='¿Cual es tu color favorito?' options={['Rojo','Azul','Verde']} binding={true} />
              <RadioQuestion name='ComidaFav' question='¿Cual es tu comida favorita?' options={['Pizza','Patatas','Tacos']} />
              <DateQuestion name='FechaEgreso' question='¿Cual es la fehca en que dejaste de asistor a la universidad?' binding={true}/>
              <input className='rounded-lg bg-dark text-light dark:text-dark dark:bg-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base' type="submit" value="Submit"/>
            </form>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default questionnaire

/*
const RadioOption = ({id, name, value, option}) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleClick = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div class="flex items-center mb-4">
      <input type="radio" id={id} name={name} value={value} className='hidden' />
      <label for={id} class="flex items-center cursor-pointer">
        <span class={`w-4 h-4 inline-block mr-2 rounded-full border border-gray-300 ${isChecked ? "bg-dark": "bg-light"}`} onClick={handleClick}></span>
        <span class="text-gray-700">{option}</span>
      </label>
    </div>
  ) 
}
*/