import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Z_Formtable from './components/Z_Formtable'

axios.defaults.baseURL = "http://localhost:8080"

function Crud() {
  const [addSection, setAddSection] = useState(false)
  const [editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  })

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    _id: ""
  })

  const [dataList, setDataList] = useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  // CREATE
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("/create", formData)
    console.log(data)
    if (data.data.success) {
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
      setFormData({
        name:"",
        email: "",
        mobile:""
      })
    }
  }

  const getFetchData = async () => {
    const data = await axios.get("/")
    console.log(data)
    if (data.data.success) {
      setDataList(data.data.data)
    }
  }

  useEffect(() => {
    getFetchData()
  }, [])

  // DELETE
  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id)
    if (data.data.success) {
      getFetchData()
      alert(data.data.message)
    }
  }


  // UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault()
    const data = await axios.put("/update", formDataEdit)
    console.log(data)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }

  }
  const handleEditOnChange = async (e) => {
    const { value, name } = e.target
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }


  const handleEdit = (el) => {
    setFormDataEdit(el)
    setEditSection(true)
  }

  return (
    <>
      <div className="container">
        <button className='btn btn-add' onClick={() => setAddSection(true)}>Add</button>
        {
          addSection && (
            <Z_Formtable
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              handleClose={() => setAddSection(false)}
              rest={formData}
            />
          )
        }
        {
          editSection && (
            <Z_Formtable
              handleSubmit={handleUpdate}
              handleOnChange={handleEditOnChange}
              handleClose={() => setEditSection(false)}
              rest={formDataEdit}
            />
          )
        }


        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => {
                  console.log(el)
                  return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td>
                        <button className='btn btn-edit' onClick={() => handleEdit(el)}>Edit</button>
                        <button className='btn btn-delete' onClick={() => handleDelete(el._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                }))
                :
                (
                  <p style={{ textAlign: "center" }}>No data</p>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}


export default Crud
