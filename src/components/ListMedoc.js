import React, { useState } from 'react';
import Content, { Block } from '../layouts/Content'
import '../css/rightPart.css'
import { useEffect } from 'react';
import axios from 'axios'
import Modal from 'react-modal'

function ListMedoc(props) {

  const [datafromApi, setDataFromApi] = useState([])  
  const [modal, setModal] = useState(false)
  const [modalUpdate, setModalUpdate] = useState(false)
  const [valSup, setValSup] = useState()
 
  useEffect(() => {
    fetch('http://localhost:4000/api/listMedoc')
    .then(r => r.json())
    .then(r => setDataFromApi(r.data))
  }, [])

  function deleteData(id) {
    axios({
      method: 'delete',
      url: `http://localhost:4000/api/listMedoc/${id}`
    })
    .then(r => window.location.reload())
    
  }

  const listItems = datafromApi.map((value, index) =>
      <tr key={value._id}>
      <td>{index}</td>
      <td>{value.name}</td>
      <td>{value.type}</td>
      <td>{value.unite}</td>
      <td>{value.prix} fc</td>
      <td>{value.qt}</td>
      <td><div className='btn-mod btn-list' onClick={() => setModalUpdate(true)}>modifier</div></td>
      <td><div className='btn-sup btn-list' onClick={() => {
        setValSup(value._id)
        setModal(true)}} >supprime</div></td>
    </tr>
    );


  const modalStyle = {
      content: {
        backgroundColor: '#2e2e2e',
        borderRadius: 10,
        width: 400,
        height: 250,
        margin: 'auto',
        alignSelf: 'center',
        boxSizing: 'border-box'
      }
    }

  function closeModal () {
    setModal(false)
    setModalUpdate(false)
  }

    return (
    <Content>

        <Block className='block'>
          <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          style={modalStyle}
          >
              
            <Block className='mod'>
              <div className='text'><h3>Vous êtes sûr de vouloir la supprimer ?</h3></div>
              <div className='button-div'>
                <div className='submit'>
                  <button onClick={() => deleteData(valSup)}>submit</button>
                </div>
                <div className='annule'>
                  <button onClick={() => setModal(false)}>annule</button>
                </div>
              </div>
            </Block>

          </Modal>
        </Block>

        <Block className='block'>
          <Modal
          isOpen={modalUpdate}
          onRequestClose={closeModal}
          style={modalStyle}
          >
              
            <Block className='mod'>
              <div className='text'>

              </div>
            </Block>

          </Modal>
        </Block>

        <Block className='completList'>
          <h2 className="h2" id='list' href='#home'>List complet</h2>
          <table className='tab'>
            <thead className='head'>
              <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Type</th>
                <th>Unite</th>
                <th>Prix</th>
                <th>Nombre</th>
              </tr>
            </thead>

            <tbody>   
              {listItems}
            </tbody>
            
          </table>
        </Block>
    </Content>
)}



export default ListMedoc