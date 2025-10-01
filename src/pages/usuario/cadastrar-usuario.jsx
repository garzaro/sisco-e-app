import React from "react";
import {useForm} from "react-hook-form";

/**
 * To-do list
 *
 * [x] Validar confirmação de email
 * [x] Input confirmacao de email nao aceitar colagem
 * [x] Navegacao entre pages
 * [x] Alerts - mensagem de erro no inputs
 * [] Recuperacao de dados na tela de senha
 * [] Manter os dados no form quando voltar da senha {Retornar}
 * [] localStorage
 *
 * **/

function CadastrarUsuario(props) {
    const {
      register,
      handleSubmit,
      formState = { errors }
    } = useForm();

  return (
    <></>
  )
}
