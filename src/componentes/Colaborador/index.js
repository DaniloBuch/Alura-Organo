import './colaborador.css'
import { IoCloseCircle } from "react-icons/io5";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar (){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 35,
        onClick: favoritar
    }
    
    return (
    <div className="colaborador">
        <IoCloseCircle 
            size={45} 
            className="deletar" 
            onClick={() => aoDeletar(colaborador.id) }
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                    ? <RiHeartFill {...propsFavorito} color='#FF0000'/> 
                    : <RiHeartAddLine {...propsFavorito} color='#0fff3f'/> 
                }
            </div>
        </div>
    </div>)
}

export default Colaborador