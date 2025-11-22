const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '',
  header = null,
  footer = null,
  bgClass="bg-gray-300 dark:bg-zinc-700",
  textClass="text-zinc-950 dark:text-gray-100",
  ...props 
}) => {
  
  const variants = {
    default: 'bg-gray-200 shadow-md',
    elevated: 'bg-gray-200 shadow-lg',
    bordered: 'bg-gray-200 border border-gray-200',
    ghost: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100'
  }
  
  const hoverEffect = hover ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : ''
  
  const cardClasses = `
    ${bgClass} ${textClass}
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
      
      <div className="px-6 py-4 text-xl font-semibold text-center flex items-center justify-center">
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 mb-2 text-md text-center">
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card