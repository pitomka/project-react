const Input = (props) => {
    const {
        className = '',
        type = 'text',
        placeholder = '',
    } = props
    return (
        <input type={type} placeholder={placeholder} className={`${className}`}/>
    )
}

export default Input