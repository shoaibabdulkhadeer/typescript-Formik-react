import { useFormik } from 'formik';
import { FaUserCircle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { dataList } from '../features/List'
import { FaTwitter } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import * as Yup from 'yup';

const Main = () => {
  const signupschema = Yup.object({
    name: Yup.string().min(4).max(30).required("name is required"),
    email: Yup.string().email().required("email is required"),
    password: Yup.string().min(5).max(30).required("password is required"),
    confirmpassword: Yup.string()
      .required("password must match")
      .oneOf([Yup.ref("password")], "Password must match")
  })

  const dispatch = useDispatch()
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

  const { handleSubmit, errors, values, handleBlur, handleChange, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signupschema,
    onSubmit: (values, action) => {
      const id = Date.now()
      // localStorage.setItem("data", JSON.stringify(data));
      action.resetForm();
      dispatch(dataList({ ...values, id }))
      alert("Successfully submitted")
    }
  })

  return (
    <div className='main'>
      <div className='leftcol'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKd95lSzoGgtRYfWaF1FVswfREFC7ej-ZiA&usqp=CAU' className='tdpic' alt='' width={200} style={{ alignSelf: "center", marginBottom: "20px" }} />
        <h3 style={{ alignSelf: "center" }}>On registering, you can</h3>
        <p style={{ display: "flex", gap: "5px" }}><MdVerified size={23} className='icontick' /> Build your profile and let recruiters find you</p>
        <p style={{ display: "flex", gap: "5px" }}><MdVerified size={23} className='icontick' />  Get job postings delivered right to your email</p>
        <p style={{ display: "flex", gap: "5px" }}><MdVerified size={23} className='icontick' />  Find a job and grow your career</p>
      </div>

 
      <div className="login-form">
        <h3 className='title'>Find a job & grow your career</h3>
        <form className="form-container" onSubmit={handleSubmit} >
          <div className="form-group">
            <label>Full Name <span style={{ color: "red" }}> * </span> </label>
            <FaUserCircle className='icons' />
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} style={{ border: touched.name && errors.name ? "1px solid red" : "" }} type="text" name="name" placeholder="Enter Your Name" />
          </div>
          {errors.name && touched.name ? <p style={{ color: "red", margin: "0px" }} >{errors.name}</p> : null}
          <div className="form-group">
            <label>Email ID <span style={{ color: "red" }}> * </span></label>
            <MdEmail className='icons' />
            <input value={values.email} style={{ border: touched.email && errors.email ? " 1px solid red" : "" }} onChange={handleChange} onBlur={handleBlur} type="email" name="email" placeholder="Tell us Your Email ID" />
          </div>
          {errors.email && touched.email ? <p style={{ color: "red", margin: "0px" }} >{errors.email}</p> : null}
          <div className="form-group">
            <label>Password <span style={{ color: "red" }}> * </span></label>
            <FaLock className='icons' />
            <input value={values.password} style={{ border: touched.password && errors.password ? "1px solid red" : "" }} onChange={handleChange} onBlur={handleBlur} type="password" name="password" placeholder="Create Password for Your Account" />
          </div>
          {errors.password && touched.password ? <p style={{ color: "red", margin: "0px" }} >{errors.password}</p> : null}
          <div className="form-group">
            <label>Confirm Password <span style={{ color: "red" }}> * </span></label>
            <FaLock className='icons' />
            <input value={values.confirmpassword} style={{ border: touched.confirmpassword && errors.confirmpassword ? "1px solid red" : "" }} onChange={handleChange} onBlur={handleBlur} type="password" name='confirmpassword' 
             placeholder="Confirm Your Password" />
          </div>
          {errors.confirmpassword && touched.confirmpassword ? <p style={{ color: "red", margin: "0px" }} >{errors.confirmpassword}</p> : null}

          <div style={{ marginTop: "15px" }}>
            <label  >
              Upload your resume
            </label>
            <input type="file" />

          </div>

          <button type="submit">Register now</button>

          <div className='socialicons'>
            <FaTwitter className='ico' style={{ color: "blue" }} size={25} />
            <BiLogoInstagramAlt className='ico' style={{ color: "red" }} size={25} />
            <FaFacebook className='ico' style={{ color: "blue" }} size={25} />
            <IoLogoWhatsapp className='ico' style={{ color: "green" }} size={25} />
          </div>

        </form>
      </div>

    </div>
  )
}

export default Main