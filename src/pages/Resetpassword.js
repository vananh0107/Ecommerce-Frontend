import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import InputCustom from '../components/InputCustom/InputCustom';
import Container from '../components/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { resetPass } from '../features/user/userSlice';
const passwordSchema = yup.object({
  password: yup.string().required('Password is required'),
});
const Resetpassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split('/')[2];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPass({ token: getToken, password: values.password }));
      // navigate('/login');
    },
  });
  return (
    <>
      <Meta title={'Reset Password'} />
      <BreadCrumb title="Reset Password" />
      <Container className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <InputCustom
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                  value={formik.values.password}
                  className="form-control"
                />
                <div className="error text-center">
                  {formik.touched.password && formik.errors.password}
                </div>
                {/* <InputCustom
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                /> */}
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button button-small border-0">
                      Confirm
                    </button>
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

export default Resetpassword;
