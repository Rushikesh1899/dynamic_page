import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DynamicPage({ setTemplate, template }) {

    const navigate = useNavigate()
    let data;
    const handleTextArea = (e) => {
        data = e.target.value

    }

    const ClickMe = () => {
        try {
            const values = JSON.parse(data)
            setTemplate([...template, values])
        }
        catch (err) {
        }
        navigate("/form")

    }

    return (
        <div>
            <h1>Create Your Page</h1>
            <textarea className="form-control" placeholder="Enter Your Page Data Here" id="floatingTextarea2" style={{ height: "750px" }} onChange={handleTextArea}></textarea>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button" onClick={ClickMe}>Create Page</button>
            </div>
        </div>
    )
}
