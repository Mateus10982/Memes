import styles from './CardMeme.module.css'
import { useEffect, useState } from 'react'

function CardMeme({imagem,nome,ID}) {
    const [ repositor, setReposi ] = useState([])
    useEffect(() => {
    const buscarLinguagens= async () => {
        const response1 = await fetch('https://api.quotable.io/random')
        const data = await response1.json()
        setReposi(data)
    }
    buscarLinguagens()
}, []);
  return (
  <>
<div id={ID} className={styles.cardM}>
    <label>{nome}</label>
    <img src={imagem}/>
    <label> {repositor.content} </label>
</div>
  </>
  )
}

export default CardMeme
