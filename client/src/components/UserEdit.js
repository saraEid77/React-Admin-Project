import React from 'react';
import { Edit , SimpleForm , TextInput ,DateInput} from 'react-admin'

const CreatePost = (props) => {
    return (
        <Edit title=' Edit Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput  source='email' />
        
            </SimpleForm>
        </Edit>
    )
}

export default CreatePost
