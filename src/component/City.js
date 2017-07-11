import React from 'react';
import { List, Edit, Create, Filter, Datagrid, EditButton, SimpleForm, Responsive, SimpleList, SingleFieldList } from 'admin-on-rest';
import { TextInput, DisabledInput, LongTextInput, ReferenceInput, SelectInput, AutocompleteInput, BooleanInput, NullableBooleanInput, CheckboxGroupInput, NumberInput, ImageInput, FileInput } from 'admin-on-rest';
import { ReferenceField, ReferenceManyField, TextField, ChipField, ImageField, FileField, BooleanField, DateField } from 'admin-on-rest';

export const CityList = (props) => (
    <List {...props} filters={<CityFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => `${record.name}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                </Datagrid>
            }
        />
    </List>
);

const CityFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" alwaysOn/>
    </Filter>
);