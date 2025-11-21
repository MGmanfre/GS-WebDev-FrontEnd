import React, { useEffect, useMemo, useState } from 'react'
import { HiSearch, HiCode } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import {Spinner} from "@heroui/spinner";
import profissionais from '../assets/json/profissionais.json'

/* Simple debounce hook without external libs */
function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

/* SearchFilters component */
export default function SearchFilters({ onSearch, count = 0 }) {
  const [q, setQ] = useState('')
  const [area, setArea] = useState('')
  const [city, setCity] = useState('')
  const [techFilter, setTechFilter] = useState('')

  const debouncedQ = useDebounce(q, 400)
  const debouncedTech = useDebounce(techFilter, 400)
  // You can also debounce selects if you call API on change

  // Show a small loading indicator while the user is typing (debounce delay)
  const [isTyping, setIsTyping] = useState(false)
  useEffect(() => {
    // if there's any input, start typing state
    if (q && q.length > 0) setIsTyping(true)
    else setIsTyping(false)
  }, [q])

  // when debounced value updates, typing stops
  useEffect(() => {
    setIsTyping(false)
  }, [debouncedQ])

  // Prepare dataset-derived options
  const dataset = useMemo(() => Array.isArray(profissionais) ? profissionais.filter(Boolean) : [], [])

  const areas = useMemo(() => {
    const s = new Set()
    dataset.forEach((it) => {
      if (it && it.area) s.add(String(it.area).trim())
    })
    return Array.from(s).sort()
  }, [dataset])

  const cities = useMemo(() => {
    const s = new Set()
    dataset.forEach((it) => {
      if (it && it.localizacao) {
        // Extract part before '/' if present (e.g. 'São Paulo/SP')
        const cityPart = String(it.localizacao).split('/')[0].trim()
        if (cityPart) s.add(cityPart)
      }
    })
    return Array.from(s).sort()
  }, [dataset])

  // Build the query params object, only include filled values
  const queryParams = useMemo(() => {
    const params = {}
    if (debouncedQ?.trim()) params.q = debouncedQ.trim()
    if (area) params.area = area
    if (city) params.city = city
    if (debouncedTech?.trim()) params.tech = debouncedTech.trim()
    return params
  }, [debouncedQ, area, city, debouncedTech])

  // Call parent callback when query changes (debounced)
  useEffect(() => {
    if (onSearch) onSearch(queryParams)
  }, [queryParams, onSearch])

  function clearAll() {
    setQ('')
    setArea('')
    setCity('')
    setTechFilter('')
  }

  return (
    <div className="space-y-3">
      {/* Top row: search + two selects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative">
          <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nome, cargo ou empresa..."
            className="w-full pl-10 pr-10 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400"
            aria-label="Buscar por nome, cargo ou empresa"
          />
          {isTyping && (
            <div className="absolute right-10 top-1/2 -translate-y-1/2">
              <Spinner size='sm' color='primary'/>
            </div>
          )}

          {q && (
            <button
              onClick={() => setQ('')}
              aria-label="Limpar busca"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <IoClose className="w-5 h-5 text-zinc-500 dark:text-gray-300" />
            </button>
          )}
        </div>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full py-3 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400"
          aria-label="Filtrar por área"
        >
          <option value="">Todas as áreas</option>
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full py-3 px-4 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400"
          aria-label="Filtrar por cidade"
        >
          <option value="">Todas as cidades</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Big filter input (full width) */}
      <div className="relative">
        <HiCode className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
        <input
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          placeholder="Filtrar por tecnologia ou habilidade (ex: React, Python, UX Design)..."
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-zinc-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400"
          aria-label="Filtrar por tecnologia ou habilidade"
        />
      </div>

      {/* Actions: clear button */}
      <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
        <div className="text-sm text-zinc-500 dark:text-zinc-300">Exibindo <span className="font-medium text-zinc-900 dark:text-gray-100">{count}</span> profissionais</div>
        <div className="flex gap-2">
          <button
            onClick={clearAll}
            className="cursor-pointer px-3 py-2 rounded-lg bg-transparent border-2 border-gray-200 dark:border-zinc-700 text-zinc-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
          >
            Limpar filtros
          </button>
        </div>
      </div>
    </div>
  )
}