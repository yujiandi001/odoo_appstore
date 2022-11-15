odoo.define('account_report_table_header_fixed.account_report', function (require) {
    'use strict';
    var core = require('web.core');
    var accountReportsWidget = require('account_reports.account_report')
    var _t = core._t;

    var accountReportsWidget_extend = accountReportsWidget.include({
        events: _.extend({}, accountReportsWidget.prototype.events, {
            'click .account-report-table-responsive .dropdown-toggle': '_onClickDropdownExtra',
        }),
        init: function (parent, action) {
            var r = this._super.apply(this, arguments)

            // 滚动条滚动时，关闭下拉菜单，看项目需求是否打开
            // self._onScroll = function (ev) {
            //     // $('.dropdown-menu.show').removeClass().addClass("dropdown-menu")
            //
            // };
            // window.addEventListener('scroll', self._onScroll, true);
            return r;
        },
        _onClickDropdownExtra: function (ev) {
            $('.o_account_reports_table .dropdown').on('show.bs.dropdown', function (ev) {
                // let thisTable = event.target.closest('table');
                // thisTable.classList.add('dropdowns-opened');
                // add class to all <tr>
                // $(thisTable).find('tr').addClass('non-dropdown');
                // remove class of this <tr>
                // event.target.closest('tr').classList.remove('non-dropdown');
                ev.target.closest('tr').classList.add('account_report_z_index_up')

            });

            $('.o_account_reports_table .dropdown').on('hidden.bs.dropdown', function (ev) {
                // let thisTable = event.target.closest('table');
                // thisTable.classList.remove('dropdowns-opened');
                // $(thisTable).find('tr').removeClass('non-dropdown');
                ev.target.closest('tr').classList.remove('account_report_z_index_up')
            });

        },


    })
    return accountReportsWidget_extend
})