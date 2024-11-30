'use client'

export default function EmailForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add email submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input 
        type="email" 
        placeholder="Enter your email"
        className="w-full mb-4 p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
      />
      <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg transition-colors">
        Join the waitlist
      </button>
    </form>
  )
} 