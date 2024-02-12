import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">

                <div>
                    <strong>{props.alert.type}</strong>: {props.alert.message}
                </div>
            </div>
        </div>
    )
}
