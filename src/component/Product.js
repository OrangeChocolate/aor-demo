import React from 'react';
import { List, Edit, Create, Filter, Datagrid, EditButton, SimpleForm, Responsive, SimpleList, SingleFieldList } from 'admin-on-rest';
import { TextInput, DisabledInput, LongTextInput, ReferenceInput, SelectInput, AutocompleteInput, BooleanInput, NullableBooleanInput, CheckboxGroupInput, NumberInput, ImageInput, FileInput } from 'admin-on-rest';
import { ReferenceField, ReferenceManyField, TextField, ChipField, ImageField, FileField, BooleanField, DateField } from 'admin-on-rest';

export const ProductList = (props) => (
    <List {...props} filters={<ProductFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.description}`}
                    tertiaryText={record => `${record.amount}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="description" />
                    <BooleanField source="enable" />
                    <TextField source="amount" />
                    <BooleanField source="forceCityCheck" />
                    <BooleanField source="randomRedpacket" />
                    <TextField source="averageAmount" />
                    <TextField source="randomMinAmount" />
                    <TextField source="randomMaxAmount" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const ProductCreate = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput  source="amount" />
            <BooleanField source="enable" />
            <BooleanInput source="forceCityCheck" />
            <BooleanInput source="randomRedpacket" />
            <NumberInput  source="averageAmount" />
            <NumberInput  source="randomMinAmount" />
            <NumberInput  source="randomMaxAmount" />
        </SimpleForm>
    </Edit>
);

export const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <DisabledInput  source="amount" />
            <BooleanField source="enable" />
            <BooleanInput source="forceCityCheck" />
            <BooleanInput source="randomRedpacket" />
            <NumberInput  source="averageAmount" />
            <NumberInput  source="randomMinAmount" />
            <NumberInput  source="randomMaxAmount" />
        </SimpleForm>
    </Edit>
);

const ProductFilter = (props) => (
    <Filter {...props}>
        <NullableBooleanInput source="enable" alwaysOn />
        <TextInput source="name" alwaysOn/>
    </Filter>
);