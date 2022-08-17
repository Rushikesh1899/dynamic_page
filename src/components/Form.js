import { useState } from 'react';
import { useForm } from 'react-hook-form'
import "../App.css"
export default function Form({ el }) {

    let { register, handleSubmit, formState: { errors } } = useForm();

    let { title, fields } = el;

    const [input, setInput] = useState({})

    const onSubmit = (values) => {
        setInput(values)
    }

    const showData = (input) => {
        const keyData = Object.keys(input)
        const valData = Object.values(input)

        return (keyData.map((elem, i) => {
            return (
                <div><p>{elem}  :- {valData[i]}</p></div>
            )
        }))
    }

    const renderFields = (fields) => {
        return fields.map(fields => {
            let { title, type, name, option, isMandatory, max } = fields

            if (type === "text") {
                return (
                    <div key={name}>
                        <label htmlFor={name}>{title}</label>
                        <input className='form-control' type={type} name={name} id={name} maxLength={max} {...register(name, { required: isMandatory })} />
                        <br></br>
                        {errors[name] && <p className="text-danger">{errors[name]['message']}</p>}
                    </div >
                )
            }
            else if (type === "button") {
                return (
                    <div key={name}>
                        <button type={type} id={name} className="btn btn-outline-success">{title}</button>
                    </div>
                )
            }
            else if (type === "select") {
                return (
                    <div key={name}>
                        <label htmlFor={name}>{title}</label>
                        <select name={name} className="form-select" aria-label="Default select example" {...register(name, { required: "This Field is Mandertory" })}>
                            <option>{name}</option>
                            {option.map((element, i) => {
                                return <option key={i} value={element}>{element}</option>
                            })}
                            {errors[name] && <p className="text-danger">{errors[name]['message']}</p>}
                        </select>
                    </div>
                )
            } else if (type === "radio") {
                return (
                    <div key={name} className="gap">
                        <label className="form-check-label" htmlFor={name}>{title}</label>
                        {option.map((elem, i) => {
                            return (
                                <div key={i}>
                                    <input className="form-check-input" type={type} name={name} id={name} value={elem} {...register(name, { required: "This Field is Mandertory" })}></input>
                                    <label htmlFor={name}>{elem}</label>
                                    <br></br>
                                    {errors[name] && <p className="text-danger">{errors[name]['message']}</p>}
                                </div>
                            )
                        })}
                    </div>
                )
            }
            else {
                return null;
            }
        })
    }

    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="title" id="title1">{title}</h4>
                {renderFields(fields)}
                <div>
                    <div className='topGap d-grid gap-2 col-5 mx-auto'>
                        <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                </div>
                <br></br>
                {showData(input)}
            </form>

        </div>
    )
}
