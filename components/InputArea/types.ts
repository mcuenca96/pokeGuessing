import { KeyboardEvent } from "react"

export type InputAreaProps  = {
    onChange: (event: KeyboardEvent<HTMLInputElement>) => void
    value?: string
}