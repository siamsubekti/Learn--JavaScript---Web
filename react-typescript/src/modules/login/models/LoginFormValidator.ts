import { object, string } from 'yup';
import { useFormik, FormikConfig, FormikProps } from 'formik';
import { LoginFormDTO } from '.';

const validationSchema = object().shape({
  username: string().required("Username is required."),
  password: string().required("Password is required."),
});

export default (onSubmit): FormikProps<LoginFormDTO> => {
  const config: FormikConfig<LoginFormDTO> = {
    initialValues: { username: '', password: '' },
    validationSchema,
    onSubmit
  };

  return useFormik(config);
}
