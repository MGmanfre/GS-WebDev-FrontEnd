import React from 'react'

export default function UsersCard({ user, className = '', onClick = () => {} }) {
  if (!user) return null

  const { nome, cargo, foto, habilidadesTecnicas = [], experiencias = [], localizacao = '' } = user
  const visibleTech = (habilidadesTecnicas || []).slice(0, 3)
  const moreCount = Math.max(0, (habilidadesTecnicas || []).length - visibleTech.length)

  let company = ''
  if (Array.isArray(experiencias) && experiencias.length > 0) {
    const copy = experiencias.filter(Boolean).slice()
    copy.sort((a, b) => {
      const fa = a.fim || a.inicio || ''
      const fb = b.fim || b.inicio || ''
      return fb.localeCompare(fa)
    })
    company = copy[0]?.empresa || ''
  }

  const initials = nome ? nome.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase() : ''

  return (
    <div onClick={() => onClick(user)} role="button" tabIndex={0} className={`cursor-pointer bg-gray-300 text-zinc-950 dark:bg-zinc-800 dark:text-gray-100 rounded-2xl p-6 shadow-md min-h-40 ${className}`}>
      <div className="flex items-start gap-4">
        {foto ? (
          <img src={foto} alt={nome} className="h-14 w-14 rounded-full object-cover ring-2 ring-cyan-400" />
        ) : (
          <div className="h-14 w-14 rounded-full bg-gray-300 text-zinc-950 dark:bg-zinc-700 dark:text-gray-100 flex items-center justify-center font-semibold">{initials}</div>
        )}

        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-zinc-950 dark:text-gray-100">{nome}</h3>
          <div className="mt-1 text-sm text-cyan-700 dark:text-cyan-300">{cargo}</div>
          {(company || localizacao) && (
            <div className="mt-2 text-xs text-zinc-700 dark:text-zinc-400">
              {company && <span className="whitespace-nowrap">{company}</span>}
              {company && localizacao && <span className="mx-2">·</span>}
              {localizacao && <span className="wrap-break-word">{localizacao}</span>}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {visibleTech.length > 0 ? (
              <>
                {visibleTech.map((t) => (
                  <span key={t} className="text-xs bg-blue-700/10 text-blue-700 dark:bg-blue-700/20 dark:text-blue-200 px-3 py-1 rounded-full">{t}</span>
                ))}
                {moreCount > 0 && (
                  <span title={`+${moreCount} outras habilidades`} className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">+{moreCount}</span>
                )}
              </>
            ) : (
              <span className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-full">Sem skills listadas</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
