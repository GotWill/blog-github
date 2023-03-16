import { useContext } from 'react'
import { PostContext } from '../../contexts/Posts'
import * as C from './style'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


export function NewForm(){
  const {getRepos,posts} = useContext(PostContext);

  const schema = z.object({
    query: z.string(),
  })

  type SearchFormInputs = z.infer<typeof schema>

  const {handleSubmit, register} = useForm<SearchFormInputs>({
    resolver: zodResolver(schema),
  });

 async function handleSearchPost(data: SearchFormInputs){
   await getRepos(data.query);
  }

    return (
      <C.Container>
        <form onSubmit={handleSubmit(handleSearchPost)}>
           <div className="form-group">
             <label htmlFor="" className='title'>Publicações</label>
             <label htmlFor="" className='subtitle'>{posts.length } publicações</label>
           </div>
           <input type="text" placeholder='Buscar conteúdo' {...register('query')} />
        </form>
      </C.Container>
    )
}