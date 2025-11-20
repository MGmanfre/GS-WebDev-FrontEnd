const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '',
  header = null,
  footer = null,
  ...props 
}) => {
  
  const variants = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-lg',
    bordered: 'bg-white border border-gray-200',
    ghost: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100'
  }
  
  const hoverEffect = hover ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : ''
  
  const cardClasses = `
    rounded-lg transition-all duration-300 overflow-hidden
    ${variants[variant]}
    ${hoverEffect}
    ${className}
  `.trim()

  return (
    <div className={cardClasses} {...props}>
      {header && (
        <div className="px-6 py-4 flex items-center justify-center">
          {header}
        </div>
      )}
      
      <div className="px-6 py-4 text-xl font-semibold text-white text-center flex items-center justify-center">
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 mb-2 text-md text-gray-300 text-center">
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card