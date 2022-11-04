# -*- coding: utf-8 -*-
{
    'name': "Account Report Table Header Fixed",
    'summary': """
        会计报表表头固定
    """,
    'description': """
    冻结固定相关会计报表的头部thead和第一列元素，使得竖向或横向滚动的时候知道所在行和列
    """,
    'author': "zero",
    'version': '1.0',
    'license': 'LGPL-3',
    'depends': ['base', 'account_reports'],
    'data': [
        'views/templates.xml',
    ],
    'qweb': [
        'static/src/xml/temp.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
}
