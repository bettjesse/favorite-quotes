import { FieldErrors}from "react-hook-form"
interface InputProps {
    label :string
    type? : string
    id: string
    disabled: boolean
    // required:boolean
    error: FieldErrors;


}

const Inputs:React.FC<InputProps>= ({label,type= "text",id,disabled, error}) => {
  return (
  <div className="  w-full relative">
        <input
        id={id}
        disabled={disabled}
        placeholder=" "
        type= {type}
        
        className={`
        peer
        w-full
        p-4
        font-light
        bg-white
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        pl-4
        ${error[id] ? "border-rose-500" : "border-neutral-300"}
        ${error[id] ? "focus:border-rose-500" : "focus:border-neutral-300"}
        `}
        
        />
        <label 
    className= {`
    text-md
    absolute
    duration-150
    transform
    -translate-y-3
    top-5
    z-10
    origin-[0]
   peer-placeholder-shown:scale-100
    peer-placeholder-shown:translate-y-0
    peer-focus:scale-75
    peer-focus:-translate-y-4
    left-4
    ${error[id] ? "text-rose-500" :"text-zinc-400"}

        `
    }>
{label}
    </label>
    </div>
  )
}

export default Inputs