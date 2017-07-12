export const AppTranslations = {
    en: {
        resources: {
            title: 'Wechat Redpacket',
            option: {
                name: 'Option',
                fields: {
                    id: 'ID',
                    name: 'name',
                    description: 'description',
                    enable: 'enable',
                }
            },
            productDetail: {
                name: 'ProductDetail',
                fields: {
                    id: 'ID',
                    productId: 'productId',
                    productDetailNum: 'productDetailNum',
                    productName: 'productName',
                    enable: 'enable',
                    scanned: 'scanned',
                },
            },
            product: {
                name: 'Product',
                fields: {
                    id: 'ID',
                    name: 'name',
                    description: 'description',
                    enable: 'enable',
                    amount: 'amount',
                    forceCityCheck: 'forceCityCheck',
                    randomRedpacket: 'randomRedpacket',
                    averageAmount: 'averageAmount',
                    randomMinAmount: 'randomMinAmount',
                    randomMaxAmount: 'randomMaxAmount',
                }
            },
            city: {
                name: 'City',
                fields: {
                    id: 'ID',
                    name: 'name',
                }
            },
            redPacket: {
                name: 'RedPacket',
                fields: {
                    id: 'ID',
                    wechatNickname: 'wechatNickname',
                    wechatOpenId: 'wechatOpenId',
                    amount: 'amount',
                    createDateTime: 'createDateTime',
                    productDetailProductName: 'productDetailProductName',
                }
            },
            wechatUser: {
                name: 'WechatUser',
                fields: {
                    id: 'ID',
                    openId: 'openId',
                    nickname: 'nickname',
                    sex: 'sex',
                    city: 'city',
                    country: 'country',
                    province: 'province',
                    language: 'language',
                    longitude: 'longitude',
                    latitude: 'latitude',
                    headImgUrl: 'headImgUrl',
                    actualCity: 'actualCity',
                }
            },
        }
    },
    zh: {
        resources: {
            title: '微信红包平台',
            option: {
                name: '配置项',
                fields: {
                    id: 'ID',
                    name: '名称',
                    description: '描述',
                    enable: '是否启用',
                }
            },
            productDetail: {
                name: '产品详情',
                fields: {
                    id: 'ID',
                    productId: '产品ID',
                    productDetailNum: '产品序号',
                    productName: '产品名称',
                    enable: '是否启用',
                    scanned: '是否已扫码',
                },
            },
            product: {
                name: '产品',
                fields: {
                    id: 'ID',
                    name: '名称',
                    description: '描述',
                    enable: '是否启用',
                    amount: '数量(件)',
                    forceCityCheck: '是否检查城市',
                    randomRedpacket: '是否随机红包',
                    averageAmount: '平均红包金额',
                    randomMinAmount: '随机红包最小值',
                    randomMaxAmount: '随机红包最大值',
                }
            },
            city: {
                name: '城市',
                fields: {
                    id: 'ID',
                    name: '名称',
                }
            },
            redPacket: {
                name: '红包',
                fields: {
                    id: 'ID',
                    wechatNickname: '昵称',
                    wechatOpenId: 'OpenID',
                    amount: '金额(分)',
                    createDateTime: '创建时间',
                    productDetailProductName: '产品名称',
                }
            },
            wechatUser: {
                name: '微信用户',
                fields: {
                    id: 'ID',
                    openId: 'OpenID',
                    nickname: '昵称',
                    sex: '性别',
                    city: '城市',
                    country: '国家',
                    province: '省份',
                    language: '语言',
                    longitude: '经度',
                    latitude: '经度',
                    headImgUrl: '缩略图',
                    actualCity: '实际城市',
                }
            },
        }
    }
};