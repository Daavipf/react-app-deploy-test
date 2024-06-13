import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useFlashMessage from "../../../../hooks/useFlashMessage"
import api from "../../../../utils/api"

function AddImovel() {
  const [realty, setRealty] = useState([])
  //const [warranties, setWarranties] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  function handleChange(e) {
    setRealty({ ...realty, [e.target.name]: e.target.value })
  }

  // function handleArray(e) {
  //   const { value, checked } = e.target
  //   if (checked) {
  //     setWarranties([...value])
  //   } else {
  //     setWarranties()
  //   }

  //   console.log(warranties)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //lê os dados do formulário
    const form = e.target
    const formData = new FormData(form)
    //passa os campos do formulário como um objeto
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)

    //faz a chamada para a api e envia os dados do formulário
    const data = await api.post('/realty/create', formJson, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` }
    }).then((response) => {
      console.log(response.data)
      navigate('/dashboard/imoveis')
      return response.data
    }).catch((err) => {
      console.log(err)
      return err.response.data
    })

    setFlashMessage(data.message)
  }

  return (
    <section className="">
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="title" className="">Título</label>
            <input required type="text" name="title" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="listing_id" className="">ID</label>
            <input required type="text" name="listing_id" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="publication_type">Tipo de Publicação</label>
            <select name="publication_type" id="" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option value="STANDARD">STANDARD</option>
              <option value="PREMIUM">PREMIUM</option>
              <option value="SUPER_PREMIUM">SUPER_PREMIUM</option>
              <option value="PREMIERE_1">PREMIERE_1</option>
              <option value="PREMIERE_2">PREMIERE_2</option>
              <option value="TRIPLE">TRIPLE</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="description">Descrição</label>
            <textarea required name="description" id="" className="w-full p-2.5 bg-transparent border-slate-200 rounded-lg text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0"></textarea>
          </div>
        </div>
        <div className="py-8 grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="address" className="">Rua</label>
            <input required type="text" name="address" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="street_number" className="">Número</label>
            <input required type="text" name="street_number" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="complement" className="">Complemento</label>
            <input type="text" name="complement" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="postal_code" className="">CEP</label>
            <input required type="text" name="postal_code" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="neighborhood" className="">Bairro</label>
            <input required type="text" name="neighborhood" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="city" className="">Cidade</label>
            <input required type="text" name="city" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="zone" className="">Zona</label>
            <input type="text" name="zone" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="state">Estado</label>
            <select name="state" id="state" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option value="Ceará">Ceará</option>
            </select>
          </div>
          <div>
            <label htmlFor="country" className="">País</label>
            <input required type="text" name="country" defaultValue="Brasil" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
        </div>
        <div className="py-8 grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="transaction_type">Tipo de Transação</label>
            <select name="transaction_type" id="transaction_type" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option value="For Sale">Venda</option>
              <option value="For Rent">Aluguel</option>
              <option value="Sale/Rent">Venda/Aluguel</option>
            </select>
          </div>
          <div>
            <label htmlFor="list_price" className="">Preço de Venda</label>
            <input required type="number" name="list_price" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="rental_price" className="">Preço de Aluguel</label>
            <input required type="number" name="rental_price" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="admin_fee" className="">Condomínio</label>
            <input type="number" name="admin_fee" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="iptu" className="">IPTU</label>
            <input type="number" name="iptu" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
        </div>
        <div className="py-8 grid grid-cols-4 gap-2">
          <div>
            <label htmlFor="usage_type">Tipo de Utilização</label>
            <select name="usage_type" id="usage_type" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option value="Residential">Residencial</option>
              <option value="Commercial">Comercial</option>
              <option value="Residential/Commercial">Residencial/Comercial</option>
            </select>
          </div>
          <div>
            <label htmlFor="property_type">Tipo de Imóvel</label>
            <select name="property_type" id="property_type" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option value="Residential / Apartment">Apartamento</option>
              <option value="Residential / Home">Casa</option>
              <option value="Residential / Condo">Casa de Condomínio</option>
              <option value="Residential / Village House">Casa de Vila</option>
              <option value="Residential / Farm Ranch">Chácara</option>
              <option value="Residential / Penthouse">Cobertura</option>
              <option value="Commercial / Consultório">Consultório</option>
              <option value="Commercial / Edifício Residencial">Edifício Residencial</option>
              <option value="Residential / Agricultural">Fazenda/Sítios/Chácaras</option>
              <option value="Residential / Flat">Flat</option>
              <option value="Commercial / Industrial">Galpão/Depósito/Armazém</option>
              <option value="Commercial / Hotel">Hotel/Motel/Pousada</option>
              <option value="Commercial / Building">Imóvel Comercial</option>
              <option value="Residential / Kitnet">Kitnet/Conjugado</option>
              <option value="Residential / Studio">Studio</option>
              <option value="Residential / Land Lot">Terreno / Lote / Condomínio Res.</option>
              <option value="Commercial / Land Lot">Terreno / Lote / Condomínio Com.</option>
              <option value="Commercial / Business">Ponto Comercial/Loja/Box</option>
              <option value="Commercial / Edifício Comercial">Prédio/Edifício Inteiro</option>
              <option value="Commercial / Office">Sala/Conjunto</option>
              <option value="Residential / Sobrado">Sobrado</option>
            </select>
          </div>
          <div>
            <label htmlFor="area" className="">Área</label>
            <input required type="number" name="area" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="bathroom" className="">Banheiros</label>
            <input required type="number" name="bathroom" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="bedroom" className="">Quartos</label>
            <input required type="number" name="bedroom" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="suite" className="">Suítes</label>
            <input type="number" name="suite" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="garage" className="">Vagas de Garagem</label>
            <input type="number" name="garage" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="floors" className="">Andares</label>
            <input type="number" name="floors" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="unit_floor" className="">Andar do Imóvel</label>
            <input type="number" name="unit_floor" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="buildings" className="">Número de Torres</label>
            <input type="number" name="buildings" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="year_built" className="">Ano de Construção</label>
            <input type="number" name="year_built" defaultValue={0} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <div>
              <input type="checkbox" id="security_deposit" value="SECURITY_DEPOSIT" />
              <label for="security_deposit">DEPÓSITO DE SEGURANÇA</label>
            </div>
            <div>
              <input type="checkbox" id="guarantor" value="GUARANTOR" />
              <label for="guarantor">FIADOR</label>
            </div>
            <div>
              <input type="checkbox" id="insurance_guarantee" value="INSURANCE_GUARANTEE" />
              <label for="insurance_guarantee">GARANTIA DE SEGURO</label>
            </div>
            <div>
              <input type="checkbox" id="guarantee_letter" value="GUARANTEE_LETTER" />
              <label for="guarantee_letter">CARTA DE GARANTIA</label>
            </div>
            <div>
              <input type="checkbox" id="capitalization_bonds" value="CAPITALIZATION_BONDS" />
              <label for="capitalization_bonds">TÍTULOS DE CAPITALIZAÇÃO</label>
            </div>
          </div>
        </div>
        <div className="py-8 grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="video" className="">Vídeo do Youtube</label>
            <input type="text" name="video" defaultValue={realty.video} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
        </div>
        <button type="submit" className="p-2.5 bg-JReal-200 rounded-lg shadow text-white">Cadastrar</button>
      </form>
    </section>
  )
}

export default AddImovel