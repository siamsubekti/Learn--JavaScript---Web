import React from 'react';

class Input extends React.Component {
    render() {
        const {HandleChange, HandleAdd, HandleRemove} = this.props
        return(
            <div>
            <input onChange={HandleChange}></input>
            <button className="click" onClick={HandleAdd}>tambah</button>
            <button className="click" onClick={HandleRemove}>hapus</button>
            </div>
        )
    }
}

export default Input;