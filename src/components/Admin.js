import React, {useEffect, useState} from 'react';
import Content, {Block} from '../layouts/Content'
import '../css/rightPart.css'
import axios from 'axios'

function Admin(props) {
    const [data, setData] = useState({
        name : '',
        mail: '',
        password: '',
    })
    const [dataCompt, setDataCompt] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:4000/api/showCompt',
        })
        .then(r => setDataCompt(r.data.r))
    }, [])

    function sendData(obj) {
        axios({
            method: 'post',
            url: 'http://localhost:4000/api/singin',
            data: {
                name: obj.name,
                mail: obj.mail,
                password: obj.password
            }
        })
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }

    const compts = dataCompt.map((value) => 
        <div className='block-user' key={value._id}>
            <h4>{value.name}</h4>
            <mail>{value.mail}</mail>
        </div>
    );

    return (
        <Content>
            <Block className='block'>
                <h2 className='h2'>Adminitration</h2>
            </Block>

            <Block className='block compt-exist'>
                {compts}
            </Block>

            <Block className='block'>
                <h2 className='h2'>Cree utilisateur</h2>
            </Block>

            <Block className='block conten-admin'>
                <input type='text' value={data.name || ''} placeholder='Nom' onChange={res => setData({...data, name: res.target.value})}/>
                <input type='text' value={data.mail || ''} placeholder='mail' onChange={res => setData({...data, mail: res.target.value})}/>
                <input type='password' value={data.password || ''} placeholder='mot de passe' onChange={res => setData({...data, password: res.target.value})}/>
                <div className='btn-conf' onClick={() => {sendData(data)}}>Ajouter</div>
            </Block>
        </Content>
    )
}

export default Admin