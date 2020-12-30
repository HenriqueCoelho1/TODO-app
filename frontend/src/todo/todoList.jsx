import React from 'react'
import IconButton from '../template/iconButton'


export default props =>{
    const renderRowns = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o"
                    onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }




    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descricao</th>
                    <th>Acoes</th>
                </tr>
            </thead>
            <tbody>
                {renderRowns()}
            </tbody>
        </table>

    )
}