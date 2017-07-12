import React from 'react';
import { List, Edit, Create, Filter, Datagrid, EditButton, SimpleForm, Responsive, SimpleList, SingleFieldList } from 'admin-on-rest';
import { TextInput, DisabledInput, LongTextInput, ReferenceInput, SelectInput, AutocompleteInput, BooleanInput, NullableBooleanInput, CheckboxGroupInput, NumberInput, ImageInput, FileInput } from 'admin-on-rest';
import { ReferenceField, ReferenceManyField, TextField, ChipField, ImageField, FileField, BooleanField, DateField } from 'admin-on-rest';

export const OptionList = (props) => (
    <List {...props} filters={<OptionFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.description}`}
                    tertiaryText={record => `${record.value}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="value" />
                    <BooleanField source="enable" />
                    <TextField source="description" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const enable_choices = [
    { id: true, name: '启用' },
    { id: false, name: '不启用' },
];

export const OptionCreate = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="value" />
            <SelectInput source="enable" choices={enable_choices} />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const OptionEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="value" />
            <SelectInput source="enable" choices={enable_choices} />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

const OptionFilter = (props) => (
    <Filter {...props}>
        <SelectInput source="enable" choices={enable_choices} alwaysOn/>
        <TextInput source="name" alwaysOn/>
        <TextInput source="description" alwaysOn/>
    </Filter>
);