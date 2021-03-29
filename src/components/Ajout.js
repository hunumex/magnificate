import React, {useState} from 'react'
import Content, {Block} from '../layouts/Content'
import '../css/form.css'
import '../css/ajout.css'
import axios from 'axios'



function Ajout(props) {
    const [data, setData] = useState({
        name : '',
        type : '',
        unite : 0,
        prix : 0,
        qt : 0,
    })
    const [requestStatus, setRequestStatus] = useState(false)

    function sendApi(objet) {
        axios({
        method: 'post',
        url: 'http://localhost:4000/api/listMedoc/add',
        data: {
          name : objet.name,
          type : objet.type,
          unite : objet.unite,
          prix : objet.prix,
          qt : objet.qt,
        }
      }).then(responseApi => {
        if (responseApi.data.status) {
            setRequestStatus(true)
        }

        setTimeout(() => setRequestStatus(false), 4000)
      })
        .catch(error => console.log(error));
    }

    return (
        <Content>

            <Block className='form-block'>
                <h2 className='h2'>Ajout de medicament</h2>

                    {requestStatus ? <div className='msg-pop-up'><p>medicament Ajouter</p></div> : null}

                <form className='form'>
                    <div>
                        <input type='text' value={data.name || ''} placeholder='Nom' onChange={res => setData({...data, name: res.target.value})}/>
                    </div>
                    <div>
                        <select id="cars" className='select' onChange={res => setData({...data, type: res.target.value})}>
                            <option value="none">type</option>
                            <option value="comprimet">comprimet</option>
                            <option value="pomade">pomade</option>
                            <option value="liquide">liquide</option>
                            <option value="ephervecent">ephervecent</option>
                        </select>
                    </div>
                    <div>
                            
                            <input type='number' className='number' value={data.unite || 'Unite'} placeholder='Unite' onChange={res => setData({...data, unite: parseInt(res.target.value || 0)})}/>
                            
                            <input type='number' className='number' value={data.prix || 'Prix'} placeholder='Prix' onChange={res => setData({...data, prix: parseInt(res.target.value || 0)})}/>
                            
                            <input type='number' className='number' value={data.qt || 'quantité'} placeholder='quantité' onChange={res => setData({...data, qt: parseInt(res.target.value || 0)})}/>
                        
                    </div>

                    <div className='btn-conf' onClick={() => {
                        sendApi(data)
                        }}>Ajouter</div>
                </form>
                
            </Block>

            <Block className='block'>
                <h2 className='h2'>modifier medicament</h2>
            </Block>
        </Content>
    )
}

export default Ajout