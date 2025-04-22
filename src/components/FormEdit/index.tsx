import { Button, Col, FloatingLabel, FormControl, Row } from "react-bootstrap";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type FormProps = {

    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    editUser: () => void;
};

const FormEdit = ({ register, errors, editUser } : FormProps) => {

    const errorMsg = {
        required: 'Campo obrigatório',
        minLength: 'Mínimo 4 caracteres',
        maxLength: 'Máximo 20 caracteres',
        pattern: 'Formato inválido',
        minPassLength: 'Mínimo 6 caracteres'
    };

    return(
        <section>
            <div>
                <h1>Editar usuário</h1>
            </div>

            <form onSubmit={ editUser }>
                <Row className="mt-3">
                    <Col md="6">
                        <FloatingLabel controlId="name" label="Nome" className="mb-3">
                            <FormControl
                                type="text" 
                                placeholder="name" 
                                autoComplete="off" 
                                {...register('name', {
                                required: errorMsg.required, 
                                maxLength: { value: 20, message: errorMsg.maxLength },
                                minLength: { value: 4, message: errorMsg.minLength }, 
                                pattern: { value: /^[A-Za-z]+$/i, message: errorMsg.pattern } }) } 
                            />
                            { errors.name?.message && <small className="mt-1 text-danger">{ String(errors.name.message)  }</small> }
                        </FloatingLabel>
                    </Col>

                    <Col md="6">
                        <FloatingLabel controlId="lastName" label="Sobrenome" className="mb-3">
                            <FormControl 
                                type="text" 
                                placeholder="lastName" 
                                autoComplete="off" 
                                {...register('lastName', {
                                required: errorMsg.required, 
                                maxLength: { value: 20, message: errorMsg.maxLength },
                                minLength: { value: 4, message: errorMsg.minLength }, 
                                pattern: { value: /^[A-Za-z]+$/i, message: errorMsg.pattern } }) } 
                            />
                            { errors.lastName?.message && <small className="mt-1 text-danger">{String(errors.lastName.message)}</small> }
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col md="6">
                        <FloatingLabel controlId="email" label="Email" className="mb-3">
                            <FormControl 
                                type="email" 
                                placeholder="email" 
                                autoComplete="off"
                                { ...register('email', { 
                                required: errorMsg.required, 
                                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: errorMsg.pattern } }) } 
                            />
                            { errors.email?.message && <small className="mt-1 text-danger">{String(errors.email.message)}</small> }                                
                        </FloatingLabel>
                    </Col>

                    <Col md="6">
                        <FloatingLabel controlId="password" label="Senha" className="mb-3">
                            <FormControl 
                                type="password" 
                                placeholder="password" 
                                autoComplete="off"
                                { ...register('password', { 
                                required: errorMsg.required, 
                                minLength: { value: 6, message: errorMsg.minPassLength }}) } 
                                />
                            { errors.password?.message && <small className="mt-1 text-danger">{String(errors.password.message)}</small> }
                        </FloatingLabel>
                    </Col>
                </Row>

                <div>
                    <Button type="submit" variant="primary" title="Editar">
                        Editar
                    </Button>
                </div>
            </form>
        </section>
    );

}

export default FormEdit;