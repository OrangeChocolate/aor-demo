import React from 'react';
import { List, Edit, Create, Filter, Datagrid, EditButton, SimpleForm, Responsive, SimpleList, SingleFieldList } from 'admin-on-rest';
import { TextInput, DisabledInput, LongTextInput, ReferenceInput, SelectInput, AutocompleteInput, BooleanInput, NullableBooleanInput, CheckboxGroupInput, NumberInput, ImageInput, FileInput } from 'admin-on-rest';
import { ReferenceField, ReferenceManyField, TextField, ChipField, ImageField, FileField, BooleanField, DateField } from 'admin-on-rest';

import { translate } from 'admin-on-rest';

export const ProductDetailList = (props) => (
    <List {...props} filters={<ProductDetailFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.productName}
                    secondaryText={record => `Enable: ${record.enable}`}
                    tertiaryText={record => `Scanned: ${record.scanned}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="productId" />
                    <TextField source="productDetailNum" />
                    <TextField source="productName" />
                    <BooleanField source="enable" />
                    <BooleanField source="scanned" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const ProductDetailEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DisabledInput source="productId" />
            <DisabledInput source="productDetailNum" />
            <DisabledInput source="productName" />
            <BooleanInput source="enable" />
            <DisabledInput source="scanned" />
        </SimpleForm>
    </Edit>
);

const ProductDetailFilter = (props) => (
    <Filter {...props}>
        <NullableBooleanInput source="scanned" alwaysOn />
        <NullableBooleanInput source="enable" alwaysOn />
        <ReferenceInput source="productName" reference="product" allowEmpty>
            <SelectInput optionText="name" optionValue="name" />
        </ReferenceInput>
    </Filter>
);