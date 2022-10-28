import { GenerationSelectorProps } from "./types"

const MAX_GENERATIONS = 5

const GenerationsSelector = ({onClick}: GenerationSelectorProps) => {
    return <div className="w-1/4 p-4">
        <div>GENERATIONS</div>
        {[...Array(MAX_GENERATIONS)].map((generation,index) => (
        <button className="flex my-3 p-2 rounded-lg bg-slate-400" key={index} onClick={() => onClick(index)}>
             Generation {index}
        </button>))}
    </div>
}

export default GenerationsSelector