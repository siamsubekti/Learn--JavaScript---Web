import { object, string } from "yup";
import { useFormik, FormikConfig, FormikProps } from "formik";
import { LoginFormDto } from ".";

const validationSchema = object().shape( {
    username: string().required("Username is required."),
    password: string().required("Password is required.")
                      .min(8, "Password is too  short - should be 8 chars minimum."),
});

export default (onSubmit): FormikProps<LoginFormDto> => {
    const config: FormikConfig<LoginFormDto> = {
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema,
        onSubmit
    };

    return useFormik(config);
}