import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineSend } from "react-icons/ai";

export default function ContactForm({ onSubmit: externalSubmit, bgClass = 'bg-gray-300 dark:bg-zinc-700', textClass = 'text-zinc-950 dark:text-gray-100' } = {}) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  })

  const [success, setSuccess] = useState(false)

  const submit = async (data) => {
    setSuccess(false)
    if (externalSubmit) {
      await externalSubmit(data)
      setSuccess(true)
      reset()
      return
    }
    
    await new Promise((res) => setTimeout(res, 900))
    setSuccess(true)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={`${bgClass} rounded-xl shadow-lg p-6`}>
      <h3 className={`${textClass} text-2xl font-bold mb-4`}>Envie sua Mensagem</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm ${textClass} mb-2`}>Nome Completo *</label>
          <input
            {...register('name', { required: 'Nome obrigatório' })}
            className={`w-full bg-white dark:bg-zinc-800 ${textClass} placeholder-zinc-400 rounded-md p-3 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.name ? 'ring-2 ring-red-500' : ''}`}
            placeholder="Seu nome"
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className={`block text-sm ${textClass} mb-2`}>Email *</label>
          <input
            {...register('email', {
              required: 'Email obrigatório',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' }
            })}
            className={`w-full bg-white dark:bg-zinc-800 ${textClass} placeholder-zinc-400 rounded-md p-3 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
            placeholder="seu@email.com"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className={`block text-sm ${textClass} mb-2`}>Telefone</label>
          <input
            {...register('phone', { pattern: { value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, message: 'Telefone inválido' } })}
            className={`w-full bg-white dark:bg-zinc-800 ${textClass} placeholder-zinc-400 rounded-md p-3 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
            placeholder="(11) 99999-9999"
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
          {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className={`block text-sm ${textClass} mb-2`}>Assunto *</label>
          <select
            {...register('subject', { required: 'Selecione um assunto' })}
            className={`w-full bg-white dark:bg-zinc-800 ${textClass} rounded-md p-3 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.subject ? 'ring-2 ring-red-500' : ''}`}
          >
            <option value="">Selecione um assunto</option>
            <option value="support">Suporte</option>
            <option value="partnership">Parcerias</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label className={`block text-sm ${textClass} mb-2`}>Mensagem *</label>
        <textarea
          {...register('message', { required: 'Mensagem obrigatória', minLength: { value: 10, message: 'Escreva ao menos 10 caracteres' } })}
          className={`w-full bg-white dark:bg-zinc-800 ${textClass} placeholder-zinc-400 rounded-md p-4 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 h-40 ${errors.message ? 'ring-2 ring-red-500' : ''}`}
          placeholder="Digite sua mensagem aqui..."
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex items-center justify-center gap-2 disabled:opacity-60"
        >
            <AiOutlineSend className="w-5 h-5"/>
            <span>Enviar Mensagem</span>
        </button>
      </div>

      {success && (
        <div className="mt-4 rounded-md bg-emerald-700/20 border border-emerald-700 p-3 text-emerald-300">
          Mensagem enviada com sucesso!
        </div>
      )}
    </form>
  )
}
