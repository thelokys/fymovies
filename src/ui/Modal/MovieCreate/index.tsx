import styles from "./MovieCreate.module.scss"
import { AiOutlineClose } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { ChangeEvent, FormEvent, ReactEventHandler, useEffect, useState } from "react";

export type FormMovieData = {
    id?: string
    title: string;
    episodes: number;
    progress: number;
    imageUrl: string;
}

type MovieProps = {
    onSubmit: (values: FormMovieData) => void
    onDelete: (item: FormMovieData) => void
    onRequestClose: () =>void
    initialValues: FormMovieData
}


export const MovieCreate = ({ onSubmit, initialValues, onDelete, onRequestClose}: MovieProps) => {
  const [inputs, setInputs] = useState(initialValues)


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value

        setInputs((prevState) => ({
            ...prevState,
            [name]: value  
        }))
    }

    const handleSubmit = () => {
        onSubmit(inputs)
        onRequestClose()
    }

    const handleDelete = () => {
        onDelete(inputs)
        onRequestClose()
    }

    const getImageError = (event: any) => { 
        event.currentTarget.src = "/not-found.svg";
    }

    return (
    <div className={styles.container}>
        <div className={styles.btnClose} onClick={() => onRequestClose()} >
            <AiOutlineClose size={20}/>
        </div>
        
        <div className={styles.content}>
            <div className={styles.poster}>
                <img src={inputs.imageUrl ?? "/not-found.svg"} alt="" width={159} height={220} onError={getImageError} />
            </div>

            <div className={styles.form}>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label>Título</label>
                        <input name="title" value={inputs?.title} type="text" onChange={event => handleInputChange(event)}/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Episódios</label>
                        <input name="episodes" value={inputs?.episodes} type="number"  onChange={event => handleInputChange(event)}/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label>Progresso</label>
                    <input name="progress" value={inputs?.progress} type="number"  onChange={event => handleInputChange(event)}/>
                </div>
                <div className={styles.inputContainer}>
                    <label>Imagem</label>
                    <input name="imageUrl" value={inputs?.imageUrl} type="text"  onChange={event => handleInputChange(event)}/>
                </div>
            </div>
        </div>

        <div className={styles.footer}>
            { initialValues.id && (
                <button className={styles.btnDelete} onClick={handleDelete}>
                    <FaTrashAlt size={20} color="white" />
                </button>
                )
            }
            <button  className={styles.btnSubmit} type="submit" onClick={handleSubmit}>{initialValues.id ? "Salvar" : "Novo"}</button>
        </div>   
    </div>
    )
    
}
