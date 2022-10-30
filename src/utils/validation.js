import * as Yup from 'yup'

const VALIDATION_SCHEMA = Yup.object().shape({
    protocol_type_id: Yup.object().required('Please Select Protocol Type.'),
    verb_id: Yup.object().required('Please Select Verb.'),
    operation_return_type_id: Yup.object().required('Please Select Return Type.'),
    parameter_type_id: Yup.object().required('Please Select Parameter Type.'),
    override_id: Yup.object().required('Please Select Override.'),
    service_name: Yup.string().required('Please Enter Service Name.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
    operation_name: Yup.string().required('Please Enter Operation Name.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
    parameter_name: Yup.string().required('Please Enter Parameter.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
})

export { VALIDATION_SCHEMA }
