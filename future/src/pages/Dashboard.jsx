import Hero from '@/components/Hero'
import Section from '@/components/Section'
import React from 'react'
import {Spinner} from "@heroui/spinner";
import { useCallback, useEffect, useState } from 'react'
import SearchFilters from '@/components/SearchFilters'
import UsersCard from '@/components/UsersCard'
import ModalUsersCard from '@/components/ModalUsersCard'
import profissionais from '../assets/json/profissionais.json'


export default function Dashboard() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [visibleCount, setVisibleCount] = useState(20)
  const PAGE_SIZE = 20

  const norm = (v = '') => String(v).toLowerCase()

  const handleSearch = useCallback(async (filters) => {
    setLoading(true)
    setError(null)
    try {
      const q = norm(filters.q || '')
      const area = norm(filters.area || '')
      const city = norm(filters.city || '')
      const tech = norm(filters.tech || '')

      const items = (Array.isArray(profissionais) ? profissionais : [])
        .filter((item) => {
          if (!item || !item.id) return false

          if (q) {
            const hay = [item.nome, item.cargo, item.email, item.localizacao].join(' ')
            if (!norm(hay).includes(q)) return false
          }

          if (area) {
            if (!item.area || norm(item.area) !== area) return false
          }

          if (city) {
            if (!item.localizacao || !norm(item.localizacao).includes(city)) return false
          }

          if (tech) {
            const techs = Array.isArray(item.habilidadesTecnicas) ? item.habilidadesTecnicas.join(' ') : ''
            const hay = [techs, item.cargo, item.resumo].join(' ')
            if (!norm(hay).includes(tech)) return false
          }

          return true
        })

      setResults(items)
      // reset visible count when search results change
      setVisibleCount(PAGE_SIZE)
    } catch (err) {
      setError(err.message || 'Erro ao filtrar dados')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleSearch({})
  }, [handleSearch])

  const visibleResults = results.slice(0, visibleCount)

  return (
    <div>
      <Hero
        title="Encontre Profissionais Incríveis"
        subtitle="Conecte-se com talentos que compartilham seus valores e objetivos"
      />
      <Section className='border-t-0 border-b border-zinc-950'>
        <SearchFilters onSearch={handleSearch} count={results.length} />
      </Section>
      <Section>
        <div>
          {loading && <Spinner />}
          {error && <div className="text-red-600">{error}</div>}
          {!loading && !error && (
            <div>
              {results.length === 0 ? (
                <div>Nenhum resultado</div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleResults.map((r) => (
                      <UsersCard key={r.id} user={r} onClick={() => setSelectedUser(r)} className="transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl"/>
                    ))}
                  </div>

                  {visibleCount < results.length && (
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => setVisibleCount((v) => Math.min(results.length, v + PAGE_SIZE))}
                        className="cursor-pointer px-6 py-3 text-lg font-semibold rounded-full bg-cyan-600 hover:bg-cyan-700 text-white shadow-md"
                      >
                        Mostrar mais
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </Section>
      <ModalUsersCard user={selectedUser} visible={!!selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  )
}
