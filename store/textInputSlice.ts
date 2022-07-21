import { StateCreator } from 'zustand'

export interface TextInputSlice {
    inputText: string,
    setInputText: (text: string) => void,
}

const createTextInputSlice: StateCreator<TextInputSlice> = (set) => ({
    inputText: '',
    setInputText: (input) => set(() => ({inputText: input }))
})

export default createTextInputSlice