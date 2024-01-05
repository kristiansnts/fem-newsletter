/* eslint-disable react/prop-types */
const Button = (props) => {
    const { children, variant } = props
    return (
        <button type="submit" className={`bg-[#242742] text-white text-sm font-normal w-full p-3 rounded ${variant}`}>{children}</button>
    )
}

export default Button