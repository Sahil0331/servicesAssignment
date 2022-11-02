import * as Yup from 'yup'

const VALIDATION_SCHEMA = Yup.object().shape({
    protocolTypeId: Yup.object().required('Please Select Protocol Type.'),
    verbId: Yup.object().required('Please Select Verb.'),
    operationReturnTypeId: Yup.object().required('Please Select Return Type.'),
    parameterTypeId: Yup.object().required('Please Select Parameter Type.'),
    overrideId: Yup.object().required('Please Select Override.'),
    serviceName: Yup.string().required('Please Enter Service Name.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
    operationName: Yup.string().required('Please Enter Operation Name.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
    parameterName: Yup.string().required('Please Enter Parameter.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
})

export { VALIDATION_SCHEMA }
