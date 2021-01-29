

<RightPart className='rightPart'>

<Block className='block'>
<h2>Dashboard</h2>
</Block>

<Block className='block'>
    <h2>statistique</h2>
    <LineChart width={730} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
    </LineChart>

    <BarChart width={700} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#424242" />
      <Bar dataKey="value2" fill="#8884d8" />
    </BarChart>
</Block>

<Block className='block'>
  <h2>List de 5 les plus vandus</h2>
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
      <tr>
        <td>2</td>
        <td>doliprane</td>
        <td>comprime</td>
        <td>500mg</td>
        <td>2000 fc</td>
        <td>56</td>
      </tr>
      <tr>
        <td>3</td>
        <td>humex</td>
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


</RightPart>