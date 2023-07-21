import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import InputCustom from '../components/InputCustom/InputCustom';
import Container from '../components/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { forgotPass } from '../features/user/userSlice';
const emailSchema = yup.object({
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email is required'),
});
const Forgotpassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      dispatch(forgotPass(values));
    },
  });
  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title="Forgot Password" />
      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <InputCustom
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  value={formik.values.email}
                  className="form-control"
                />
                <div className="error text-center">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div>
                  <div className="my-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button
                      className="button button-small border-0 my-2"
                      type="submit"
                    >
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
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

export default Forgotpassword;
