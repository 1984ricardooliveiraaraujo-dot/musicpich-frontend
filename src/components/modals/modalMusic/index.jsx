import { Modal } from '@mui/material' // Impontado o Modal para o nosso projeto da biblioteca mui desing
import './style.css'

export const ModalMusic = ({open, close, musica}) => { // Exportando informação de outro componente, atribuindo os nomes das props, open vai cuidar da abertura do modal, close do fechamento do modal, musica de todas as informações do card, 
    if(!musica) return null // Se há musica não existir retorna vazio
    return (
        //Criar props para passar um valor dinamico em outro componente nos componentes do modal, open cuida da abertura do modal, onclose do fechamento do modal, quando vc clica fora do card, className='container-modal vai cuidar da stylização
        //Class container-modal é todo o modal o fundo preto
        <Modal open={open} onClose={close} className='container-modal'>

            <div className='container-card-modal'> {/* container do card onde queremos colocar as informações do nosso banco de dados Musica, Link e Cantor */}
                <h2>{musica.nome}</h2>
                <iframe width="560" height="315" src={musica.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>{musica.cantor}</p>
            </div>

        </Modal>
        // Tudo que for modal fica dentro das tags de abertura e fechamento do modal


    )
}