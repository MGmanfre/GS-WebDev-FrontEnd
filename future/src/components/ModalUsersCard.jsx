import React, { useEffect, useState } from 'react'
import { GoHeart } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export default function ModalUsersCard({ user, visible = false, onClose = () => {} }) {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!visible) setToast(null)
  }, [visible])

  if (!visible || !user) return null

  const {
    nome,
    sexo,
    foto,
    cargo,
    resumo,
    localizacao,
    area,
    experiencias = [],
    formacao = [],
    habilidadesTecnicas = [],
    softSkills = [],
    areaInteresses = []
  } = user

  const handleRecommend = () => {
    setToast('Profissional recomendado com sucesso')
    setTimeout(() => setToast(null), 2500)
  }

  const handleSendMessage = () => {
    setToast('Mensagem enviada com sucesso')
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div onClick={onClose} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative w-[min(980px,95%)] max-h-[90vh] overflow-auto rounded-2xl bg-white text-zinc-900 dark:bg-zinc-900 dark:text-gray-100 shadow-2xl p-6">

        <button onClick={onClose} aria-label="Fechar" className="cursor-pointer absolute top-4 right-4 text-zinc-600 dark:text-zinc-300 hover:opacity-80">
          ✕
        </button>

        <div className="flex flex-col items-center text-center">
          {foto ? (
            <img src={foto} alt={nome} className="h-20 w-20 rounded-full object-cover ring-2 ring-cyan-400" />
          ) : (
            <div className="h-20 w-20 rounded-full bg-zinc-400 dark:bg-zinc-700 flex items-center justify-center font-semibold text-xl">{(nome||'').split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase()}</div>
          )}

          <h2 className="mt-4 text-2xl font-bold">{nome}</h2>
          <div className="text-cyan-700 dark:text-cyan-300 mt-1">{cargo}</div>
          {(area || localizacao) && <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{area} {area && localizacao && '·'} {localizacao}</div>}

          {resumo && <blockquote className="mt-4 max-w-[90%] text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-300 dark:bg-zinc-800 px-4 py-3 rounded">"{resumo}"</blockquote>}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-300 dark:bg-zinc-800 p-4 rounded">
            <h3 className="font-semibold mb-2">Informações Pessoais</h3>
            <div className="text-sm text-zinc-700 dark:text-zinc-300">
              <div><span className="font-medium">Sexo:</span> {String(sexo)}</div>
              <div><span className="font-medium">Área:</span> {area}</div>
              <div><span className="font-medium">Localização:</span> {localizacao}</div>
              <div><span className="font-medium">Experiências:</span> {experiencias.length} posição(ões)</div>
            </div>
          </div>

          <div className="bg-zinc-300 dark:bg-zinc-800 p-4 rounded">
            <h3 className="font-semibold mb-2">Formação Acadêmica</h3>
            <div className="text-sm text-zinc-700 dark:text-zinc-300">
              {formacao && formacao.length > 0 ? (
                <div>
                  <div className="font-medium">{formacao[0].curso}</div>
                  <div className="text-xs">{formacao[0].instituicao} • {formacao[0].ano}</div>
                </div>
              ) : (
                <div className="text-xs">Sem formação listada</div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Habilidades Técnicas</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {habilidadesTecnicas && habilidadesTecnicas.length > 0 ? habilidadesTecnicas.map(s => (
              <span key={s} className="text-xs bg-violet-700/10 text-violet-700 dark:bg-violet-700/20 dark:text-violet-200 px-3 py-1 rounded-full">{s}</span>
            )) : <span className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-full">Nenhuma listada</span>}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">Soft Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills && softSkills.length > 0 ? softSkills.map(s => (
                <span key={s} className="text-xs bg-orange-700/10 text-orange-700 dark:bg-orange-700/20 dark:text-orange-200 px-3 py-1 rounded-full">{s}</span>
              )) : <span className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-full">Nenhuma listada</span>}
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Hobbies e Interesses</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {areaInteresses && areaInteresses.length > 0 ? areaInteresses.map(s => (
                <span key={s} className="text-xs bg-emerald-700/10 text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-200 px-3 py-1 rounded-full">{s}</span>
              )) : <span className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-full">Nenhum listado</span>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={handleRecommend} className="flex-1 flex items-center justify-center flex-row gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded"><GoHeart/> Recomendar Profissional</button>
          <button onClick={handleSendMessage} className="flex-1 flex items-center justify-center flex-row gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded"><MdOutlineEmail/> Enviar Mensagem</button>
        </div>

        {toast && (
          <div className="fixed bottom-8 right-8 z-60 bg-emerald-600 text-white px-4 py-2 rounded shadow-lg">{toast}</div>
        )}
      </div>
    </div>
  )
}
