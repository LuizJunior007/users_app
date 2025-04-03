import { useNavigate, useParams } from "react-router-dom";
import { urlApi } from "../../config";
import { useEffect } from "react";
import FormEdit from "../../components/FormEdit";
import { useForm } from "react-hook-form";

const User = () => {

    document.title = 'Editar usuário | Users-app';

    const { register, watch, setValue, formState: { errors } } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();

    const editUser = async () => { 
        
        const dataForm = {
            name: watch('name'),
            lastName: watch('lastName'),
            email: watch('email'),
            password: watch('password'), 
        };

        const res = await fetch(urlApi + `/users/${id}`, {
            method: 'put',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify( dataForm )
        });

        if(!res.ok){
            throw new Error('Error ao fazer requisição');
        }

        navigate('/');
        
    }

    const getUserById = async () => {

        const res = await fetch( urlApi + `/users/${id}`, {
            method: 'get'
        });

        const data = await res.json();

        setValue('name', data.name);
        setValue('lastName', data.lastName);
        setValue('email', data.email);
        setValue('password', data.password);
    }

    useEffect(() => {

        getUserById();

    }, []);

    return(
        <FormEdit 
            register={ register }
            errors={ errors } 
            editUser={ editUser }
        />
    );

}

export default User;