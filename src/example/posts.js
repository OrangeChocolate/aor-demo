// in src/posts.js
import React from 'react';
import { List, Edit, Create, Filter, Datagrid, ReferenceField, TextField, EditButton, ChipField, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, Responsive, SimpleList, ReferenceManyField, SingleFieldList } from 'admin-on-rest';
import { AutocompleteInput, BooleanInput, NullableBooleanInput, CheckboxGroupInput   } from 'admin-on-rest';
import { ImageInput, ImageField, FileInput, FileField   } from 'admin-on-rest';

export const PostList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <ChipField source="name" />
                    </ReferenceField>
                    <ReferenceManyField label="Comments by" reference="comments" target="postd" perPage={3}>
                        <SingleFieldList>
                            <TextField source="name" />
                        </SingleFieldList>
                    </ReferenceManyField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const choices = [
    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
    { id: 456, first_name: 'Jane', last_name: 'Austen' },
];
const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
const validateUserCreation = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = ['The title is required'];
    }
    if (!values.body || values.body.length < 10) {
        errors.body = ['The body is too short'];
    }
    return errors
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ImageInput source="pictures" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>} multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <FileInput source="files" label="Related files" accept="application/pdf" placeholder={<p>Drop your file here</p>} multiple >
                <ImageField source="src" title="title" />
            </FileInput>
            <CheckboxGroupInput source="author_id" choices={choices} optionText={optionRenderer} />
            <BooleanInput  label="Allow comments?" source="commentable" />
            <AutocompleteInput source="author_id" choices={choices} optionText={optionRenderer} />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm validate={validateUserCreation}>
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
    </Filter>
);