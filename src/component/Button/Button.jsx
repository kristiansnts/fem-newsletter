/* eslint-disable react/prop-types */
const Button = (props) => {
    const { children, variant } = props
    return (
        <button 
            type="submit" 
            className={`bg-[#242742] hover:font-bold hover:bg-gradient-to-r hover:from-[#d64567] hover:to-[#ff6257] text-white text-sm font-normal w-full p-3 rounded-lg ${variant}`}
        >
        {children}
        </button>
    )
}

export default Button