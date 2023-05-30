import { CountdownCircleTimer } from "../node_modules/react-countdown-circle-timer/lib/index"
import styles from "../styles/Temporizador.module.css"

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
                duration={props.duracao}
                size={100}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#f7b801', '#ed827a',]}
                colorsTime={[10, 3, 0]}
                >
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
        </div>

    )
}