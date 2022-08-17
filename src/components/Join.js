import React, { useState } from 'react'
import Form from './Form'

export default function Join({ template, setTemplate }) {
    const [showText, setShowText] = useState(false)
    
    const btn = showText;
    const tempData = template;
    let data;
    const displayText = () => {
        setShowText(!showText);
        try {
            const val = JSON.parse(data)
            setTemplate([...template, val])

        }
        catch (err) {
        }
    }
    const handleText = (e) => {
        data = e.target.value
    }

    return (
        <div>

            {tempData.map((el, i) => {
                return <Form key={`key${i}`} template={template} setTemplate={setTemplate} el={el} />
            })}
            <div className='leftGap'>
                <button type="submit" className=" btn btn-info" onClick={displayText}>{btn ? "Create" : "Add More"}</button>
                {
                    btn && (<div>
                        <textarea className="form-control" placeholder="Enter Your Page Data Here" id="floatingTextarea2" onChange={handleText}></textarea>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
