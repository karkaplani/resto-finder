import {useForm} from 'react-hook-form'
import './input.css'

/**
 * Form component to pass the data to get results from the API.
 * react-hook-form library is used to automatically handle the
 * submission and the errors. 
 * @author Apo Ilgun
 */
const Form = ({getData}) => {

    const {register, handleSubmit, formState: { errors} } = useForm() 

    return (
        <> 
        <form className='form' onSubmit={handleSubmit((data) => {getData(data)})}>

          <span class="input">
            <input type="text" name='name' placeholder='Keywords' {...register('name', {required: true})}/> 
            {errors.name && console.log('anan')}
              <span></span>	
          </span>

          <span class="input">
            <input type="text" name='postal-code' placeholder="Postal Code" {...register('zipCode', {required: false})}/>
            <span></span>	
          </span>

          <span class="input">
            <input type="number" name='radius' placeholder="Radius" {...register('radsius', {required: false})}/>
            <span></span>	
          </span>

          <div className='wrap'>
          <input className='button' type="submit" name='submit' value='Feed me!'/>
          </div>

        </form>
        </>
    )
}

export default Form
