import type { ReactNode } from "react"
import styles from "./Aler.module.css"

export default function Alert({children}: {children: ReactNode}) {
    return (
        <div className={styles.alert}>
        {children}
        </div>
    )
}
