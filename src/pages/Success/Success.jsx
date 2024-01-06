/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import Button from "src/component/Button/Button"
import SuccessIcon from "src/assets/images/icon-success.svg"

const Success = (props) => {

  const { handleClick } = props
  const { handleSubmit } = useForm()

  const onSubmit = () => handleClick();

  return (
    <>
        <div 
            className="max-[640px]:h-screen flex flex-col items-start justify-around w-10/12 mx-auto sm:flex sm:h-3/5 sm:bg-white sm:items-center sm:w-96 sm:p-10 sm:rounded-2xl"
        >
            <div className="thanks__content">
                <img src={SuccessIcon} alt="" className="my-5 w-12"/>
                <h1 className="text-3xl sm:text-4xl font-bold my-5">Thanks for subscribing!</h1>
                <p className="text-sm leading-6 sm:my-5 sm:text-xs">A confirmation email has been sent to <a href="" className="text-[#242742] font-bold">ash@loremcompany.com</a>. 
                Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className="w-full">
              <Button variant="mt-5" handleClick={handleClick}>Dismiss message</Button>
            </form>
        </div>
    </>
  )
}

/* 



  

  

*/

export default Success