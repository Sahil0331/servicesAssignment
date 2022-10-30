import * as Yup from 'yup'

const VALIDATION_SCHEMA = Yup.object().shape({
    protocol_type: Yup.object().required('Protocol Type is required.'),
    service_name: Yup.string().required('Service Name is required.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
    service_description: Yup.string().required('Service Description is required.').matches(/^(?! )[A-Za-z0-9_@./()#!@$%*^&+-\s]*$/, 'First Character cannot be space.'),
})

export { VALIDATION_SCHEMA }
