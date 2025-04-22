import { useParams } from "react-router-dom";
import { urlApi } from "../../config";
import { useEffect, useState } from "react";
import FormEdit from "../../components/FormEdit";
import { useForm } from "react-hook-form";
import MyToast from "../../components/Toast";

const User = () => {

    document.title = 'Editar usuário | Users-app';

    const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const [ show, setShow ] = useState(false);

    const editUser = async () => { 

        const pathsImg = [
            '../src/assets/img/man.png',
            '../src/assets/img/boy.png',
            '../src/assets/img/man2.png'
        ];

        const randomValue = Math.random() * pathsImg.length;
        const formatValue = Math.floor(randomValue); 
        
        const dataForm = {
            name: watch('name'),
            lastName: watch('lastName'),
            email: watch('email'),
            password: watch('password'),
            img: pathsImg[formatValue]  
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

        setShow(true);
        
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

    const handleSetShow = () => {

        setShow(false);
    }

    useEffect(() => {

        getUserById();

    }, []);

    return(
        <>
            <FormEdit 
                register={ register }
                errors={ errors } 
                editUser={ handleSubmit(editUser) }
            />

            <MyToast 
                setShow={ handleSetShow }
                show={ show }
                callback={{ status: 'success', msg: 'Editado com sucesso' }}
            />
        </>
    );

}

export default User;