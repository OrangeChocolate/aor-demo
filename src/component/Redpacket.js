import React from 'react';
import { List, Edit, Create, Filter, Datagrid, EditButton, SimpleForm, Responsive, SimpleList, SingleFieldList } from 'admin-on-rest';
import { TextInput, DisabledInput, LongTextInput, ReferenceInput, SelectInput, AutocompleteInput, BooleanInput, NullableBooleanInput, CheckboxGroupInput, NumberInput, ImageInput, FileInput } from 'admin-on-rest';
import { ReferenceField, ReferenceManyField, TextField, ChipField, ImageField, FileField, BooleanField, DateField } from 'admin-on-rest';

export const RedpacketList = (props) => (
    <List {...props} filters={<RedpacketFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.wechatNickname}
                    secondaryText={record => `${record.amount}`}
                    tertiaryText={record => `${record.createDateTime}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="wechatNickname" />
                    <TextField source="wechatOpenId" />
                    <TextField source="amount" />
                    <DateField source="createDateTime" />
                    <TextField source="productDetailProductName" />
                </Datagrid>
            }
        />
    </List>
);

const RedpacketFilter = (props) => (
    <Filter {...props}>
        <TextInput source="wechatNickname" alwaysOn/>
    </Filter>
);