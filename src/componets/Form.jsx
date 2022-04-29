import React from 'react'

const Formulario = () => {
    const[nombre, setNombre]=React.useState('')
    const[apellido, setApellido]=React.useState('')
    const[cedula, setCedula]=React.useState('')
    const[edad, setEdad]=React.useState('')
    const[correo, setCorreo]=React.useState('')
    const[telefono, setTelefono]=React.useState('')

    const[lista, setLista]=React.useState([])
    const guardarDatos=(e)=>{
        e.preventDefault()
        if (!nombre.trim()) {
        alert('Falta el nombre')
        return
        }
        if (!apellido.trim()) {
            alert('falta el apellido')
            return
        }
        if (!cedula.trim()) {
            alert('falta el cedula')
            return
        }
        if (!edad.trim()) {
            alert('falta el edad')
            return
        }
        if (!correo.trim()) {
            alert('falta el correo')
            return
        }
        if (!telefono.trim()) {
            alert('falta el telefono')
            return
        }

        const invalido = lista.find((x) => telefono === x.telefono)
            if(invalido !== undefined){
                alert("Telefono existente")
                return
            }
       
        const correoInvalido = lista.find((x) => correo === x.correo)
            if(correoInvalido !== undefined){
                alert("Correo existente")
                return
            }

        const cedulaInvalida = lista.find((x) => cedula === x.cedula)
            if(cedulaInvalida !== undefined){
                alert("Cedula existente")
                return
            }       
        //
        setLista([
        ...lista,
        {nombre:nombre,apellido:apellido,cedula:cedula,edad:edad,correo:correo,telefono:telefono}
        ])
        //limpiar inputs
        e.target.reset()
        //limpiar estados
        setNombre('')
        setApellido('')
        setEdad('')
        setCedula('')
        setCorreo('')
        setTelefono('')
        }

        const eliminar = tell =>{
            const auxiliar =lista.filter((index) => index.telefono !== tell);
             setLista(auxiliar);
        }
        
  return (
    <div className="container">
        <h2>Registro</h2>
        <div className='abs-center'>
            <form onSubmit={guardarDatos}>
                <div className='row'>
                    <div className='col'>
                        <input type="text"
                        placeholder='Ingrese Nombre'
                        className='form-control mb-3'
                        onChange={(e)=>setNombre(e.target.value)}
                        />
                    </div>
                    <div className='col'>
                        <input type="text"
                        placeholder='Ingrese Apellido'
                        className='form-control mb-3'
                        onChange={(e)=>setApellido(e.target.value)}
                        />
                    </div>
                </div>
                <div className='row'>    
                    <div className='col'>
                        <input type="number"
                        placeholder='Ingrese Cedula'
                        className='form-control mb-3'
                        onChange={(e)=>setCedula(e.target.value)}
                        />
                    </div>
                    <div className='col'>
                        <input type="number"
                        placeholder='Ingrese Edad'
                        className='form-control mb-3'
                        onChange={(e)=>setEdad(e.target.value)}
                        />
                    </div>
                </div>
                <div className='row'>    
                    <div className='col'>
                        <input type= "email"
                        placeholder='Ingrese Correo'
                        className='form-control mb-3'
                        onChange={(e)=>setCorreo(e.target.value)}
                        />
                    </div>
                    <div className='col'>
                        <input type="number"
                        placeholder='Ingrese Telefono'
                        className='form-control mb-3'
                        onChange={(e)=>setTelefono(e.target.value)}
                        />
                    </div>
                </div>    
                    <div class="col v-center">
                    <button className="btn btn-light d-block mx-auto"
                    type='submit'>Registrarse</button>
                    </div>
                
                </form>
        </div>    
            <br />
            <br />
            <br />
            <div className='Lista'>
                <div className='col'>
                    <h2>Lista de Usuarios</h2>
                    <div className='row'> 
                        <div className='col'><h4>Nombre</h4></div>
                        <div className='col'><h4>Apellido</h4></div>
                        <div className='col'><h4>Cedula</h4></div>
                        <div className='col'><h4>Edad</h4></div>
                        <br />
                        <br />
                        <div className='col text-center'><h4>Correo</h4></div>
                        <div className='col text-center'><h4>Telefono</h4></div>
                        <div className='col text-center'><h4>Opciones</h4></div>
                    </div>
                            {
                            lista.map((elemento,index)=>(<h4 key={index}> <div className='row'> <div className='col'>{elemento.nombre}</div> <div className='col text-center'>{elemento.apellido}</div> <div className='col text-center'>{elemento.cedula} </div> <div className='col-md-2 text-center'>{elemento.edad}</div> <div className='col'>{elemento.correo}</div> <div className='col text-center'>{elemento.telefono}</div>  <div className='col text-center'><button className='btn btn-danger' onClick={()=>eliminar(elemento.telefono)}>Eliminar</button></div> </div> </h4>  //ej3 operador de propagación
                            ))
                            }    
                </div>
            </div>    
        </div>
        )
}

export default Formulario