import React from 'react';
import { List, Edit, Create, Filter, Datagrid, EditButton, SimpleForm, Responsive, SimpleList, SingleFieldList } from 'admin-on-rest';
import { TextInput, DisabledInput, LongTextInput, ReferenceInput, SelectInput, AutocompleteInput, BooleanInput, NullableBooleanInput, CheckboxGroupInput, NumberInput, ImageInput, FileInput } from 'admin-on-rest';
import { ReferenceField, ReferenceManyField, TextField, ChipField, ImageField, FileField, BooleanField, DateField } from 'admin-on-rest';

export const WechatUserList = (props) => (
    <List {...props} filters={<WechatUserFilter />}>
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
                    <ImageField source="headImgUrl" />
                    <TextField source="id" />
                    <TextField source="openId" />
                    <TextField source="nickname" />
                    <TextField source="sex" />
                    <TextField source="city" />
                    <TextField source="country" />
                    <TextField source="province" />
                    <TextField source="language" />
                    <TextField source="longitude" />
                    <TextField source="latitude" />
                    <TextField source="actualCity" />
                </Datagrid>
            }
        />
    </List>
);

const WechatUserFilter = (props) => (
    <Filter {...props}>
        <TextInput source="nickname" alwaysOn/>
    </Filter>
);