# -*- coding: utf-8 -*-
from odoo import api, fields, models, _


class account_report(models.AbstractModel):
    _inherit = 'account.report'

    # def _get_templates(self):
    #     templates = super(account_report, self)._get_templates()
    #     templates['main_template'] = 'account_report_table_header_fixed.account_report_main_template'
    #     return templates
