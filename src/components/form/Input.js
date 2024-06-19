<<<<<<< HEAD
function Input({ text, type, name, placeholder, handleOnChange, value, multiple }) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} {...(multiple ? { multiple } : '')}
        className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
    </div>
  )
}

=======
function Input({ text, type, name, placeholder, handleOnChange, value, multiple }) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} {...(multiple ? { multiple } : '')}
        className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
    </div>
  )
}

>>>>>>> 8c17a86729ee79e00cd7a469a359c1522ca2ce8f
export default Input