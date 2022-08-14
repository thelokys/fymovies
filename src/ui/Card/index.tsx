import { useMemo } from 'react'
import { Movie } from '../../pages'
import styles from './styles.module.scss'

type CardProps = {
    data: Movie
    onClick: () => void
}

export const Card = ({data, onClick}: CardProps) => {

    const getImageError = (event: any) => { 
        event.currentTarget.src = "/not-found.svg";
    }

    const progressLabel = useMemo(() => {
        return [data.progress, data.episodes]
            .filter(item => !!item)
            .join("/")
    },[data.progress, data.episodes])

    return (
        <div className={styles.container} onClick={onClick}>
            <img src={data.imageUrl ?? "/not-found.svg"} alt="card-image" width={157} height={226} onError={getImageError} />
            <div className={styles.overlay}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.episode}>{progressLabel}</div>
            </div>
        </div>
    )
}