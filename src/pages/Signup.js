import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import InputCustom from '../components/InputCustom/InputCustom';
import Container from '../components/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const signUpSchema = yup.object({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email address is required'),
  mobile: yup.string().required('Mobile no is required'),
  password: yup.string().required('Password is required'),
});
const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      const result = await dispatch(registerUser(values));
      if (result.error.message === 'Rejected') {
        toast.error('User has already exists');
      } else {
        toast.success('Register successfully');
      }
    },
  });
  return (
    <>
      <Meta title={'Sign Up'} />
      <BreadCrumb title="Sign Up" />
      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                id="form-register"
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <InputCustom
                  type="text"
                  name="firstname"
                  placeholder="FirstName"
                  value={formik.values.firstname}
                  onChange={formik.handleChange('firstname')}
                  onBlur={formik.handleBlur('firstname')}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <InputCustom
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange('lastname')}
                  onBlur={formik.handleBlur('lastname')}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <InputCustom
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <InputCustom
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange('mobile')}
                  onBlur={formik.handleBlur('mobile')}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <InputCustom
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <Link to="/login" className="button button-small signup ">
                        Login
                      </Link>
                      <button
                        className="button button-small border-0 p-0"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
