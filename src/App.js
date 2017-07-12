import React, {Component} from 'react';
import logo from './logo.svg';
import BookIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import './App.css';
import {jsonServerRestClient, Admin, Resource, Delete} from 'admin-on-rest';
import springRestClient from './springRestClient';
import authClient from './authClient';

import {REACT_APP_API_HOST} from './Configration';

import Dashboard from './component/Dashboard';
import {OptionList, OptionEdit} from './component/Option';
import {ProductDetailList, ProductDetailEdit} from './component/ProductDetail';
import {ProductList, ProductEdit, ProductCreate} from './component/Product';
import {CityList} from './component/City';
import {RedpacketList} from './component/Redpacket';
import {WechatUserList} from './component/WechatUser';

import { translate } from 'admin-on-rest';
import {englishMessages} from 'admin-on-rest';
import chineseMessages from 'aor-language-chinese';
import {AppTranslations} from './translation'

const messages = {
    en: {...englishMessages, ...AppTranslations.en},
    zh: {...chineseMessages, ...AppTranslations.zh}
};

const App = () => (
    <Admin title='众信红包管理平台' authClient={authClient} restClient={springRestClient(`${REACT_APP_API_HOST}/api`)}
           dashboard={Dashboard} locale="zh" messages={messages}>
        <Resource name="option" icon={BookIcon} list={OptionList} edit={OptionEdit}/>
        <Resource name="productDetail" icon={BookIcon} list={ProductDetailList} edit={ProductDetailEdit}/>
        <Resource name="product" icon={BookIcon} list={ProductList} edit={ProductEdit} create={ProductCreate}/>
        <Resource name="city" icon={BookIcon} list={CityList}/>
        <Resource name="redPacket" icon={BookIcon} list={RedpacketList}/>
        <Resource name="wechatUser" icon={BookIcon} list={WechatUserList}/>
    </Admin>
);

export default App;
