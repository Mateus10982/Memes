import styles from './Rolagem.module.css'
import { useEffect, useState } from 'react'
import CardMeme from '../../cardMeMe/'
function Rolagem() {
    const [ repositorioMe, setRepositories ] = useState([])
    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const data = await response.json()
           
            if (data && data.data && Array.isArray(data.data.memes)) {
                setRepositories(data.data.memes)
              }
        }
        buscarRepositorios()
    }, []);
  return (
  <>
<div id="baseRoll" className={styles.rolll}>
{
                    repositorioMe.map((repo) => (
                        <CardMeme
                            ID={repo.id}
                            imagem={repo.url}
                            nome={repo.name}
                        />
                    ))
}
</div>
  </>
  )
}

export default Rolagem
