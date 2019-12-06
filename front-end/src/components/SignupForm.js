import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import userService from '../lib/userService';

const SignupForm = () => {
  const [toLogin, setToLogin] = useState(false)
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      retypedPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
      retypedPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: values => {
      const user = {
        email: values.email,
        password: values.password
      }
      userService.signupUser(user).then(res => {
        toast("Wow so easy !");
        // const { history } = this.props
        // history.push('/login');
        setToLogin(true)
        return res;
      }).catch(err => {
        // Add here message on top of the form
        console.log(err)
        toast("Opps");
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    {toLogin ? <Redirect to="/login"/>:null}
      <div className="field">
        <label htmlFor="email" className="label">Email</label>
        <div className="control">
          <input
            id="email"
            name="email"
            className="input"
            type="email"
            placeholder="Email input"
            {...formik.getFieldProps('email')}
          />
        </div>
        {formik.errors.email && formik.touched.email ? <p className="help is-danger">{formik.errors.email}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="password" className="label">Password</label>
        <div className="control">
          <input
            id="password"
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
        </div>
        {formik.errors.password && formik.touched.password ? <p className="help is-danger">{formik.errors.password}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="retypedPassword"className="label">Retype Password</label>
        <div className="control">
          <input
            id="retypedPassword"
            name="retypedPassword"
            className="input"
            type="password"
            placeholder="Retype Password"
            {...formik.getFieldProps('retypedPassword')}
          />
        </div>
        {formik.errors.retypedPassword && formik.touched.retypedPassword ? <p className="help is-danger">{formik.errors.retypedPassword}</p> : null}
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">Sign Up</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  );

}

export default SignupForm
