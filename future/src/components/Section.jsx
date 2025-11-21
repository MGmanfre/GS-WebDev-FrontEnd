import React from 'react'

export default function Section({
	title,
	subtitle = null,
	children = null,
	className = '',
	bgClass = 'bg-gray-200 dark:bg-zinc-800',
	textClass = 'text-zinc-950 dark:text-gray-100'
}) {
	return (
		<section className={`${bgClass} py-12 ${className} ${textClass}`}>
			<div className="max-w-6xl mx-auto px-6 text-center">
				{title && <h2 className="text-white text-3xl sm:text-4xl font-bold">{title}</h2>}
				{subtitle && <p className="text-zinc-300 mt-3 text-lg">{subtitle}</p>}
				{children && <div className={`mt-8`}>{children}</div>}
			</div>
		</section>
	)
}

