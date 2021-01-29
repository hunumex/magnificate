import '../css/contents.css'
import { BarChart, XAxis, YAxis, Legend, Tooltip, Bar, LineChart, Line } from 'recharts'

function RightPart(props) {
    const data = [
        {name: 'nox', value: 200, value2: 100},
        {name: 'pamadol', value: 365, value2: 182.5},
        {name: 'doliprane', value: 812, value2: 406 },
        {name: 'humex', value: 165, value2: 80.5},
        {name: 'pharmaquina', value: 68, value2: 531},
        {name: 'pharmaquina', value: 72, value2: 385},
        {name: 'pharmaquina', value: 156, value2: 981},
        {name: 'pharmaquina', value: 770, value2: 56},
        {name: 'pharmaquina', value: 364, value2: 75},
        {name: 'pharmaquina', value: 649, value2: 385},
        {name: 'pharmaquina', value: 25, value2: 165},
        {name: 'pharmaquina', value: 826, value2: 35},
      ]
    
    return (
      <div className='rightPart'>
        <Block className='contentBlock'>
          <Block className='block'>
          <h2 className="h2" id='dash'>Dashboard</h2>
          </Block>

            <Block className='block'>
                <h4 className='h4'>Statistique de vente</h4>
                <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
                </LineChart>
            </Block>

            <Block className='block'>
                <h4 className='h4'>Inventer</h4>
                <BarChart width={700} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#424242" />
                <Bar dataKey="value2" fill="#8884d8" />
                </BarChart>
            </Block>

          <Block className='block'>
            <h4 className='h4'>List de 5 les plus vandus</h4>
          </Block>

          <Block className='block'>
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
                        <tr>
                            <td>0</td>
                            <td>nox</td>
                            <td>comprime</td>
                            <td>500mg</td>
                            <td>2000 fc</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>pamadol</td>
                            <td>comprime</td>
                            <td>500mg</td>
                            <td>2000 fc</td>
                            <td>56</td>
                        </tr>
                    </tbody>
                    
                </table>
            </Block>
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
              <tr>
                <td>4</td>
                <td>pharmaquina</td>
                <td>comprime</td>
                <td>500mg</td>
                <td>2000 fc</td>
                <td>56</td>
              </tr>
              <tr>
                <td>4</td>
                <td>pharmaquina</td>
                <td>comprime</td>
                <td>500mg</td>
                <td>2000 fc</td>
                <td>56</td>
              </tr>
              <tr>
                <td>4</td>
                <td>pharmaquina</td>
                <td>comprime</td>
                <td>500mg</td>
                <td>2000 fc</td>
                <td>56</td>
              </tr>

            </tbody>
            
          </table>
        </Block>
      </div>
    )
  }
  
function Block (props) {
    return (
      <div className={props.className}>
        {props.children}
      </div>
    )
  }

export default RightPart