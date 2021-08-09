import React from 'react'
import Form, {Field, useForm} from 'rc-field-form'
import Input from '../../components/Input'

const usernameRules = [{required: true, message: 'username不为空'}]
const passwordRules = [{required: true, message: 'password不为空'}]

export const FormDemoPage = () => {
    const [form] = useForm()
    const onFinish = (val) => {
        console.log('onFinish', val)
    }
    const onFinishFailed = (val) => {
        console.log('onFinishFailed', val)
    }

    return (
        <div>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Field name="username" rules={usernameRules}>
                    <Input />
                </Field>
                <Field name="password" rules={passwordRules}>
                    <Input />
                </Field>
                <button >submit</button>
            </Form>
        </div>
    )
}
