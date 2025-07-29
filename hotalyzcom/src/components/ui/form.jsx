import * as React from "react"

function Form({ className, ...props }, ref) {
  return (
    <form ref={ref} className={className} {...props} />
  )
}

const ForwardedForm = React.forwardRef(Form)
ForwardedForm.displayName = "Form"

export { ForwardedForm as Form }
