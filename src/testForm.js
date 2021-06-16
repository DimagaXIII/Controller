import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
// import InputMask from 'react-input-mask'
import { useForm, useWatch } from 'react-hook-form'
import focusFieldBy from 'react-hook-form/dist/logic/focusFieldBy'

import './index.css'

const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValidating },
		control,
	} = useForm(/* {
		defaultValues: {
			firstName: 'LoX',
			tel: '',
			email: '',
			isDeveloper: false,
		}, 
	}*/)
	const onSubmit = data => {
		//console.log(data)
	}

	useEffect(() => {
		focusFieldBy('addreses.firstAddress')
	}, [])

	console.log(useWatch({ control }))

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='addreses.firstAddress'>First Name</label>
			<input
				// readOnly
				{...register('addreses.firstAddress', {
					required: 'First name is required',
				})}
				placeholder='first name'
			/>
			{errors.addreses?.firstAddress && errors.addreses.firstAddress.message}

			<label htmlFor='addreses.secondAddress'>Last Name</label>
			<input
				// readOnly
				{...register('addreses.secondAddress', {
					required: 'Last name is required',
				})}
				placeholder='first name'
			/>
			{errors.addreses?.secondAddress && errors.addreses.secondAddress.message}

			<label htmlFor='tel'>Tel: </label>
			{/* <InputMask mask='99/99/9999' value={'Some'} onChange={console.log('ff')}> */}
			<input
				{...register('tel', {
					required: 'Tel is required',
					maxLength: 10,
					// pattern: {
					// 	//value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$ /,
					// 	value: / ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$ /,
					// 	message: 'Error',
					// },
				})}
				placeholder='tel'
				type='text'
			/>
			{/* </InputMask> */}
			{errors.tel && errors.tel?.message}
			{errors.tel?.maxLength && 'maxLength'}
			{console.log(errors, 'errors')}

			<label htmlFor='email'>Email</label>
			<input
				{...register('addreses.thirtyAddress', { required: true })}
				placeholder='email@hotmail.com'
				type='email'
			/>

			<label>Is developer?</label>
			<input {...register('isDeveloper')} type='checkbox' />

			<input type='submit' />
		</form>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
