const Home = () => {
  return (
    <main>
        <div className="banner__img">
            <picture>
                <source media="(min-width: 600px)" srcSet="src/assets/images/illustration-sign-up-desktop.svg"/>
                <img src="src/assets/images/illustration-sign-up-mobile.svg" alt="" className="w-full"/>
            </picture>
        </div>
        <div className="newsletter__sign-up">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li><img src="src/assets/images/icon-list.svg" alt="" /> Product discovery and building what matters</li>
                <li><img src="src/assets/images/icon-list.svg" alt="" /> Measuring to ensure updates are a success</li>
                <li><img src="src/assets/images/icon-list.svg" alt="" /> And much more!</li>
            </ul>
            <form>
                <label htmlFor="email" className="flex justify-between">
                    <span>Email address</span>
                    <span>error</span>
                </label>
                <input type="text" placeholder="email@company.com"/>
                <button type="submit">Subscribe to monthly newsletter</button>
            </form>
        </div>
    </main>
  )
}

export default Home