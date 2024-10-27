function Button({children,
    type="button",
    bgColor='bg-blue-600',
    textColor='text-white',
    className="",
    ...props

}){
return (<button className={`px-4 py-6 rounded-lg ${className} ${textColor}`} {...props}>
    {children}
</button>)
}

export default Button;