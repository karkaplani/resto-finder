import {useForm} from 'react-hook-form'
import Tooltip from './Tooltip/Tooltip'

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
          <input type="text" name='name' placeholder='Keywords' {...register('name', {required: true})}/> <br /> 
          {errors.name && <Tooltip/>}

          <input type="text" name='postal-code' placeholder='Postal Code' {...register('zipCode', {required: true})}/> <br />
          {errors.zipCode && <Tooltip/>}

          <input type="number" name='radius' placeholder='Radius' {...register('radius', {required: false})}/> <br />
          {errors.radius && <Tooltip/>}

          <input className='button' type="submit" name='submit' value='Feed me!'/>

        </form>
        </>
    )
}

export default Form
