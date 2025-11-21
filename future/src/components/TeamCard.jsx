import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function TeamCard({
  name,
  role,
  description,
  avatar = null,
  gradient = 'from-blue-500 to-blue-400',
  className = ''
}) {
  const gradientClass = `bg-gradient-to-b ${gradient}`

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${className} min-h-[360px] flex flex-col`}> 
      <div className={`${gradientClass} h-40 flex items-center justify-center`}> 
        {avatar ? (
          <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover border-4 border-white/20" />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center text-3xl text-zinc-800">
            <FaUser />
          </div>
        )}
      </div>
      
      <div className="bg-zinc-800 p-6 flex-1 flex flex-col">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        {role && <p className="text-sm mt-1 text-emerald-400">{role}</p>}
        {description && <p className="text-zinc-300 text-sm mt-4 flex-1">{description}</p>}
      </div>
    </div>
  )
}
