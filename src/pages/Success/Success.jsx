import Button from "src/component/Button/Button"

const Success = () => {
  return (
    <>
        <div className="success__page h-screen flex flex-col items-start justify-around w-10/12 mx-auto">
                <div className="thanks__content">
                <img src="src/assets/images/icon-success.svg" alt="" className="my-5"/>
                <h1 className="text-3xl font-bold my-5">Thanks for subscribing!</h1>
                <p className="text-sm leading-6">A confirmation email has been sent to <a href="" className="text-[#242742] font-bold">ash@loremcompany.com</a>. 
                Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <Button variant="">Dismiss message</Button>
        </div>
    </>
  )
}

/* 



  

  

*/

export default Success