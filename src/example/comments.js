import React from 'react';
import { List, Datagrid, ReferenceField, TextField, EmailField } from 'admin-on-rest';

export const CommentList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField addLabel label="Post" source="postId" reference="posts" linkType="show">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);