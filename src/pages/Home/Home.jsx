/* eslint-disable react/prop-types */
import Button from "src/component/Button/Button"

const Home = (props) => {

    const { handleClick } = props

    return (
        <main className="bg-white flex flex-col justify-between sm:flex sm:items-center sm:flex-row-reverse sm:w-1/2 sm:mx-auto sm:rounded-2xl">
            <div className="banner__img sm:p-5">
                <picture>
                    <source media="(min-width: 600px)" srcSet="src/assets/images/illustration-sign-up-desktop.svg"/>
                    <img src="src/assets/images/illustration-sign-up-mobile.svg" alt="" className="w-full h-1/4"/>
                </picture>
            </div>
            <div className="newsletter__sign-up p-5 sm:p-10">
                <h1 className="my-3 text-3xl sm:text-5xl sm:my-5 font-bold">Stay updated!</h1>
                <p className="mb-3 text-sm sm:my-5">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li className="my-3 text-sm flex items-start"><img src="src/assets/images/icon-list.svg" alt="" className="inline mr-4 w-4" /> <span>Product discovery and building what matters</span></li>
                    <li className="my-3 text-sm flex items-start"><img src="src/assets/images/icon-list.svg" alt="" className="inline mr-4 w-4" /> <span>Measuring to ensure updates are a success</span></li>
                    <li className="my-3 text-sm flex items-start"><img src="src/assets/images/icon-list.svg" alt="" className="inline mr-4 w-4" /> <span>And much more!</span></li>
                </ul>
                <form className="my-5">
                    <label htmlFor="email" className="flex justify-between">
                        <span className="text-xs font-bold">Email address</span>
                        <span className="invisible">error</span>
                    </label>
                    <input type="text" placeholder="email@company.com" className="border w-full p-3 rounded mb-4"/>
                    <Button handleClick={handleClick}>Subscribe to monthly newsletter</Button>
                </form>
            </div>
        </main>
    )
}

export default Home