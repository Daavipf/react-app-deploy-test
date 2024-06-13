import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../../../../utils/api"
import useFlashMessage from "../../../../hooks/useFlashMessage"
import { useNavigate } from "react-router-dom"

//import Input from "../../../form/Input"
//import { Modal } from "flowbite-react"

function UpdateRealty() {
  const [realty, setRealty] = useState([])
  //const [openModal, setOpenModal] = useState(false)
  const [token] = useState(localStorage.getItem('token') || '')
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  //pega os imóveis no banco ao carregar a página
  //manda a requisição para a api com o token
  useEffect(() => {
    api.get(`/realty/read/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      },
    }).then((response) => {
      setRealty(response.data.realty)
    })
  }, [token, id])

  function handleChange(e) {
    setRealty({ ...realty, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //lê os dados do formulário
    const form = e.target
    const formData = new FormData(form)
    //passa os campos do formulário como um objeto
    const formJson = Object.fromEntries(formData.entries())
    //console.log(formJson)


    //faz a chamada para a api e envia os dados do formulário
    const data = await api.patch(`/realty/update/${realty._id}`, formJson, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` }
    }).then((response) => {
      //console.log(response.data)
      return response.data
    }).catch((err) => {
      //console.log(err)
      return err.response.data
    })

    navigate(`/dashboard/imoveis/${realty._id}`)
    setFlashMessage(data.message)

  }

  return (
    <section className="w-2/3">
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="title" className="">Título</label>
            <input type="text" name="title" defaultValue={realty.title} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="listing_id" className="">ID</label>
            <input type="text" name="listing_id" defaultValue={realty.listing_id} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="publication_type">Tipo de Publicação</label>
            <select name="publication_type" defaultValue={realty.publication_type} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option selected="selected" value={realty.publication_type}>{realty.publication_type}</option>
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
            <textarea name="description" defaultValue={realty.description} className="w-full p-2.5 bg-transparent border-slate-200 rounded-lg text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0"></textarea>
          </div>
        </div>
        <div className="py-8 grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="address" className="">Rua</label>
            <input type="text" name="address" defaultValue={realty.address} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="street_number" className="">Número</label>
            <input type="text" name="street_number" defaultValue={realty.street_number} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="complement" className="">Complemento</label>
            <input type="text" name="complement" defaultValue={realty.complement} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="postal_code" className="">CEP</label>
            <input type="text" name="postal_code" defaultValue={realty.postal_code} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="neighborhood" className="">Bairro</label>
            <input type="text" name="neighborhood" defaultValue={realty.neighborhood} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="city" className="">Cidade</label>
            <input type="text" name="city" defaultValue={realty.city} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="zone" className="">Zona</label>
            <input type="text" name="zone" defaultValue={realty.zone} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="state">Estado</label>
            <select name="state" id="state" defaultValue={realty.state} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option value="Ceará">Ceará</option>
            </select>
          </div>
          <div>
            <label htmlFor="country" className="">País</label>
            <input type="text" name="country" defaultValue="Brasil" onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
        </div>
        <div className="py-8 grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="transaction_type">Tipo de Transação</label>
            <select name="transaction_type" id="transaction_type" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option selected="selected" value={realty.transaction_type}>{realty.transaction_type}</option>
              <option value="For Sale">Venda</option>
              <option value="For Rent">Aluguel</option>
              <option value="Sale/Rent">Venda/Aluguel</option>
            </select>
          </div>
          <div>
            <label htmlFor="list_price" className="">Preço de Venda</label>
            <input type="number" name="list_price" defaultValue={realty.list_price} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="rental_price" className="">Preço de Aluguel</label>
            <input type="number" name="rental_price" defaultValue={realty.rental_price} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="admin_fee" className="">Condomínio</label>
            <input type="number" name="admin_fee" defaultValue={realty.admin_fee} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="iptu" className="">IPTU</label>
            <input type="number" name="iptu" defaultValue={realty.iptu} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
        </div>
        <div className="py-8 grid grid-cols-4 gap-2">
          <div>
            <label htmlFor="usage_type">Tipo de Utilização</label>
            <select name="usage_type" id="usage_type" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option selected="selected" value={realty.usage_type}>{realty.usage_type}</option>
              <option value="Residential">Residencial</option>
              <option value="Commercial">Comercial</option>
              <option value="Residential/Commercial">Residencial/Comercial</option>
            </select>
          </div>
          <div>
            <label htmlFor="property_type">Tipo de Imóvel</label>
            {/* <select name="property_type" id="property_type" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option selected="selected" value={realty.property_type}>{realty.property_type}</option>
              <option value="Residential / Home">Casa</option>
              <option value="Residential / Apartment">Apartamento</option>
            </select> */}
            <select name="property_type" id="property_type" className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0">
              <option selected="selected" value={realty.property_type}>{realty.property_type}</option>
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
            <input type="number" name="area" defaultValue={realty.area} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="bathroom" className="">Banheiros</label>
            <input type="number" name="bathroom" defaultValue={realty.bathroom} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="bedroom" className="">Quartos</label>
            <input type="number" name="bedroom" defaultValue={realty.bedroom} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="suite" className="">Suítes</label>
            <input type="number" name="suite" defaultValue={realty.suite} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="garage" className="">Vagas de Garagem</label>
            <input type="number" name="garage" defaultValue={realty.garage} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="floors" className="">Andares</label>
            <input type="number" name="floors" defaultValue={realty.floors} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="unit_floor" className="">Andar do Imóvel</label>
            <input type="number" name="unit_floor" defaultValue={realty.unit_floor} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="buildings" className="">Número de Torres</label>
            <input type="number" name="buildings" defaultValue={realty.buildings} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
          <div>
            <label htmlFor="year_built" className="">Ano de Construção</label>
            <input type="number" name="year_built" defaultValue={realty.year_built} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
        </div>
        <div className="py-8 grid grid-cols-3 gap-2">
          <div>
            <label htmlFor="video" className="">Vídeo do Youtube</label>
            <input type="text" name="video" defaultValue={realty.video} onChange={handleChange} className="w-full p-2.5 bg-transparent border-slate-200 rounded-full text-gray-600 placeholder:text-gray-400 focus:border-slate-200 focus:outline-transparent focus:ring-0" />
          </div>
        </div>
        <button type="submit" className="p-2.5 bg-JReal-200 rounded-lg shadow text-white">Atualizar</button>
      </form>
    </section>
  )

}

export default UpdateRealty