import React from 'react';
import { Create , SimpleForm , TextInput ,DateInput} from 'react-admin'

const CreatePost = (props) => {
    return (
        <Create title=' Create Post' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput  label=' Published' source='publishedAT' />
            </SimpleForm>
        </Create>
    )
}

export default CreatePost
