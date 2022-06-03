import React, {useState} from 'react'
import { useFormik } from 'formik'

const NewEmployee = ({data}) => {
    const [active, setActive] = useState("");
    // const formik = useFormik({
    //     initialValues: {
    //       firstName: '',
    //       lastName: '',
    //       location: '',
    //       title: '',
    //       employer: '',
    //       movies: [],
    //     },
    //     onSubmit: values => {
    //         data.push(values)
    //       alert(JSON.stringify(values, null, 2));
    //     },
    //   });

      let registrationForm = () => { 
          return <h1>Hello</h1>
    }
    
    return (
        <div>
            <button onClick={() => setActive="showMe" }>Register</button>
            {active==="showMe" && registrationForm}
        </div>
    //     <form onSubmit={formik.handleSubmit}>
    //     <label htmlFor="firstName">First Name</label>
    //     <input
    //       id="firstName"
    //       name="firstName"
    //       type="text"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.firstName}
    //     />
    //     {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
  
    //     <label htmlFor="lastName">Last Name</label>
    //     <input
    //       id="lastName"
    //       name="lastName"
    //       type="text"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.lastName}
    //     />
    //     {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
  
    //     <label htmlFor="email">Email Address</label>
    //     <input
    //       id="email"
    //       name="email"
    //       type="email"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.email}
    //     />
    //     {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
  
    //     <button type="submit">Submit</button>
    //   </form>
  )
}

export default NewEmployee