import * as C from './style'

export function NewForm(){
    return (
      <C.Container>
        <form action="">
           <div className="form-group">
             <label htmlFor="" className='title'>Publicações</label>
             <label htmlFor="" className='subtitle'>6 publicações</label>
           </div>
           <input type="text" placeholder='Buscar conteúdo' name="" id="" />
        </form>
      </C.Container>
    )
}