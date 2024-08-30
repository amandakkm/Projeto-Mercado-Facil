import { useForm, useFieldArray } from 'react-hook-form'

const UseForm = () => {
    const { register, handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "addresses"
    });

    const onSubmit = (data: any) => {
        console.log(data);
        //POST request to the server
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Dados de acesso do usuário</h2>
                <div>
                    <label>Nome: </label>
                    <input type="text" {...register("name")} required/>
                </div>
                <div>
                    <label htmlFor="">E-mail: </label>
                    <input type="email" {...register("email")}/>
                </div>
                <div>
                    <label htmlFor="">Senha: </label>
                    <input type="password" {...register("password")}/>
                </div>
                <div>
                    <label>Role: </label>
                    <input type="text" {...register("role")} />
                </div>
                <br />
                <h2>Endereços</h2>
                {fields.map((field, index) =>(
                    <div key={field.id}>
                        <div>
                            <label>Rua: </label>
                            <input type="text" {...register(`addresses[${index}].street`)} />
                        </div>
                        <div>
                            <label>Número: </label>
                            <input type="text" {...register(`addresses[${index}].number`)} />
                        </div>
                        <div>
                            <label>Complemento: </label>
                            <input type="text" {...register(`addresses[${index}].complement`)} />
                        </div>
                        <div>
                            <label>Vizinhança: </label>
                            <input type="text" {...register(`addresses[${index}].neighborhood`)} />
                        </div>
                        <div>
                            <label>Cidade: </label>
                            <input type="text" {...register(`addresses[${index}].city`)} />
                        </div>
                        <div>
                            <label>Estado: </label>
                            <input type="text" {...register(`addresses[${index}].state`)} />
                        </div>
                        <div>
                            <label>País: </label>
                            <input type="text" {...register(`addresses[${index}].country`)} />
                        </div>
                        <div>
                            <label>CEP: </label>
                            <input type="text" {...register(`addresses[${index}].zipCode`)} />
                        </div>
                        <div>
                            <label>Bairro: </label>
                            <input type="text" {...register(`addresses[${index}].district`)} />
                        </div>
                        <button type='button' onClick={() => remove(index)}>Remover</button>
                    </div>
                ))}
                <button type='button' onClick={() => append({})}>Adicionar endereço</button>
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default UseForm;