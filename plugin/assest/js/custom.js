var $ = jQuery;
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
var annual_income, age, saving_each_year, retirement_assests;
var gross_income, employee_paid_tax, federal_income_tax, state_income_tax, saving_each_year_retirement;
var company_1lac, return_401, risk_401, taxes_401, control_401, appreciation_401, cashflow_401, leverage_401, taxes_402;
var company_150lac, return_brokerage, risk_brokerage, control_brokerage, taxes_brokerage, appreciation_brokerage;
var cashflow_brokerage, leverage_brokerage, taxes_broker;
var g_ira, return_g_ira, risk_g_ira, control_g_ira, taxes_g_ira, appreciation_g_ira, cashflow_g_ira, leverage_g_ira, taxes_IRA;
var g_retirement_investment_0, return_retirement_investment, risk_retirement_investment;
var control_retirement_investment, taxes_retirement_investment, appreciation_retirement_investment;
var cashflow_retirement_investment, leverage_retirement_investment, tax_g_retirement_investment;
var private_investment_0, return_private_investment, risk_private_investment, control_private_investment;
var taxes_investments, appreciation_private_investment, leverage_private_investment, tax_private_investment, cashflow_private_investment;
var assets_saving_retirements, deploy_assets_core;

jQuery(document).ready(function ($) {
    $('#btn_step_1_next').on('click', function () {
        var age = $.trim($('#age').val());
        var annual_income = $.trim($('#annual_income').val());
        var saving_each_year = $.trim($('#saving_each_year').val());
        var retirement_assests = $.trim($('#retirement_assests').val());
        $('#age').next().addClass('hidden');
        $('#annual_income').next().addClass('hidden');
        $('#saving_each_year').next().addClass('hidden');
        $('#retirement_assests').next().addClass('hidden');
        $('#age').removeClass('error-border');
        $('#annual_income').removeClass('error-border');
        $('#saving_each_year').removeClass('error-border');
        $('#retirement_assests').removeClass('error-border');
        if (age === '') {
            $('#age').next().removeClass('hidden');
            $('#age').addClass('error-border');
            $('#age').focus();
        } else if (annual_income === '') {
            $('#annual_income').next().removeClass('hidden');
            $('#annual_income').addClass('error-border');
            $('#annual_income').focus();
        } else if (saving_each_year === '') {
            $('#saving_each_year').next().removeClass('hidden');
            $('#saving_each_year').addClass('error-border');
            $('#saving_each_year').focus();
        } else if (retirement_assests === '') {
            $('#retirement_assests').next().removeClass('hidden');
            $('#retirement_assests').addClass('error-border');
            $('#retirement_assests').focus();
        } else {
            $('#step_1').addClass('hidden');
            $('#step_2').removeClass('hidden');
            $('#step_3').addClass('hidden');
            $('#step_4').addClass('hidden');
        }
    });
    $('#btn_step_2_previous').on('click', function () {
        $('#step_1').removeClass('hidden');
        $('#step_2').addClass('hidden');
        $('#step_3').addClass('hidden');
        $('#step_4').addClass('hidden');
    });
    $('#btn_step_2_next').on('click', function () {
        var gross_income = $.trim($('#gross_income').val());
        var employee_paid_tax = $.trim($('#employee_paid_tax').val());
        var federal_income_tax = $.trim($('#federal_income_tax').val());
        var state_income_tax = $.trim($('#state_income_tax').val());
        var saving_each_year_retirement = $.trim($('#saving_each_year_retirement').val());
        var value_of_retirement = $.trim($('#value_of_retirement').val());
        $('#gross_income').next().addClass('hidden');
        $('#employee_paid_tax').next().addClass('hidden');
        $('#federal_income_tax').next().addClass('hidden');
        $('#state_income_tax').next().addClass('hidden');
        $('#saving_each_year_retirement').next().addClass('hidden');
        $('#value_of_retirement').next().addClass('hidden');
        $('#gross_income').removeClass('error-border');
        $('#employee_paid_tax').removeClass('error-border');
        $('#federal_income_tax').removeClass('error-border');
        $('#state_income_tax').removeClass('error-border');
        $('#saving_each_year_retirement').removeClass('error-border');
        $('#saving_each_year_retirement').removeClass('error-border');
        if (gross_income === '') {
            $('#gross_income').next().removeClass('hidden');
            $('#gross_income').addClass('error-border');
            $('#gross_income').focus();
        } else if (employee_paid_tax === '') {
            $('#employee_paid_tax').next().removeClass('hidden');
            $('#employee_paid_tax').addClass('error-border');
            $('#employee_paid_tax').focus();
        } else if (federal_income_tax === '') {
            $('#federal_income_tax').next().removeClass('hidden');
            $('#federal_income_tax').addClass('error-border');
            $('#federal_income_tax').focus();
        } else if (state_income_tax === '') {
            $('#state_income_tax').next().removeClass('hidden');
            $('#state_income_tax').addClass('error-border');
            $('#state_income_tax').focus();
        } else if (saving_each_year_retirement === '') {
            $('#saving_each_year_retirement').next().removeClass('hidden');
            $('#saving_each_year_retirement').addClass('error-border');
            $('#saving_each_year_retirement').focus();
        } else if (value_of_retirement === '') {
            $('#value_of_retirement').next().removeClass('hidden');
            $('#value_of_retirement').addClass('error-border');
            $('#value_of_retirement').focus();
        } else {
            $('#step_1').addClass('hidden');
            $('#step_2').addClass('hidden');
            $('#step_3').removeClass('hidden');
            $('#step_4').addClass('hidden');
        }

    });
    $('#btn_step_3_next').on('click', function () {
        var company_1lac = $.trim($('#company_1lac').val());
        var return_401 = $.trim($('#return_401').val());
        var risk_401 = $.trim($('#risk_401').val());
        var control_401 = $.trim($('#control_401').val());
        var taxes_401 = $.trim($('#taxes_401').val());
        var appreciation_401 = $.trim($('#appreciation_401').val());
        var cashflow_401 = $.trim($('#cashflow_401').val());
        var leverage_401 = $.trim($('#leverage_401').val());
        var taxes_402 = $.trim($('#taxes_402').val());
        var company_150lac = $.trim($('#company_150lac').val());
        var return_brokerage = $.trim($('#return_brokerage').val());
        var risk_brokerage = $.trim($('#risk_brokerage').val());
        var control_brokerage = $.trim($('#control_brokerage').val());
        var taxes_brokerage = $.trim($('#taxes_brokerage').val());
        var appreciation_brokerage = $.trim($('#appreciation_brokerage').val());
        var cashflow_brokerage = $.trim($('#cashflow_brokerage').val());
        var leverage_brokerage = $.trim($('#leverage_brokerage').val());
        var taxes_broker = $.trim($('#taxes_broker').val());
        var g_ira = $.trim($('#g_ira').val());
        var return_g_ira = $.trim($('#return_g_ira').val());
        var risk_g_ira = $.trim($('#risk_g_ira').val());
        var control_g_ira = $.trim($('#control_g_ira').val());
        var taxes_g_ira = $.trim($('#taxes_g_ira').val());
        var appreciation_g_ira = $.trim($('#appreciation_g_ira').val());
        var cashflow_g_ira = $.trim($('#cashflow_g_ira').val());
        var leverage_g_ira = $.trim($('#leverage_g_ira').val());
        var taxes_IRA = $.trim($('#taxes_IRA').val());
        var private_investment_0 = $.trim($('#private_investment_0').val());
        var return_private_investment = $.trim($('#return_private_investment').val());
        var risk_private_investment = $.trim($('#risk_private_investment').val());
        var control_private_investment = $.trim($('#control_private_investment').val());
        var taxes_investments = $.trim($('#taxes_investments').val());
        var appreciation_private_investment = $.trim($('#appreciation_private_investment').val());
        var cashflow_private_investment = $.trim($('#cashflow_private_investment').val());
        var leverage_private_investment = $.trim($('#leverage_private_investment').val());
        var tax_private_investment = $.trim($('#tax_private_investment').val());
        var g_retirement_investment_0 = $.trim($('#g_retirement_investment_0').val());
        var return_retirement_investment = $.trim($('#return_retirement_investment').val());
        var risk_retirement_investment = $.trim($('#risk_retirement_investment').val());
        var control_retirement_investment = $.trim($('#control_retirement_investment').val());
        var taxes_retirement_investment = $.trim($('#taxes_retirement_investment').val());
        var appreciation_retirement_investment = $.trim($('#appreciation_retirement_investment').val());
        var cashflow_retirement_investment = $.trim($('#cashflow_retirement_investment').val());
        var leverage_retirement_investment = $.trim($('#leverage_retirement_investment').val());
        var tax_g_retirement_investment = $.trim($('#tax_g_retirement_investment').val());
        ////////////////////////////     add   ///////////////////////
        $('#company_1lac').next().addClass('hidden');
        $('#return_401').next().addClass('hidden');
        $('#risk_401').next().addClass('hidden');
        $('#control_401').next().addClass('hidden');
        $('#taxes_401').next().addClass('hidden');
        $('#appreciation_401').next().addClass('hidden');
        $('#cashflow_401').next().addClass('hidden');
        $('#leverage_401').next().addClass('hidden');
        $('#taxes_402').next().addClass('hidden');
        $('#company_150lac').next().addClass('hidden');
        $('#return_brokerage').next().addClass('hidden');
        $('#risk_brokerage').next().addClass('hidden');
        $('#control_brokerage').next().addClass('hidden');
        $('#taxes_brokerage').next().addClass('hidden');
        $('#appreciation_brokerage').next().addClass('hidden');
        $('#cashflow_brokerage').next().addClass('hidden');
        $('#leverage_brokerage').next().addClass('hidden');
        $('#taxes_broker').next().addClass('hidden');
        $('#g_ira').next().addClass('hidden');
        $('#return_g_ira').next().addClass('hidden');
        $('#risk_g_ira').next().addClass('hidden');
        $('#control_g_ira').next().addClass('hidden');
        $('#taxes_g_ira').next().addClass('hidden');
        $('#appreciation_g_ira').next().addClass('hidden');
        $('#cashflow_g_ira').next().addClass('hidden');
        $('#leverage_g_ira').next().addClass('hidden');
        $('#taxes_IRA').next().addClass('hidden');
        $('#private_investment_0').next().addClass('hidden');
        $('#return_private_investment').next().addClass('hidden');
        $('#risk_private_investment').next().addClass('hidden');
        $('#control_private_investment').next().addClass('hidden');
        $('#taxes_investments').next().addClass('hidden');
        $('#appreciation_private_investment').next().addClass('hidden');
        $('#cashflow_private_investment').next().addClass('hidden');
        $('#leverage_private_investment').next().addClass('hidden');
        $('#tax_private_investment').next().addClass('hidden');
        $('#g_retirement_investment_0').next().addClass('hidden');
        $('#return_retirement_investment').next().addClass('hidden');
        $('#risk_retirement_investment').next().addClass('hidden');
        $('#control_retirement_investment').next().addClass('hidden');
        $('#taxes_retirement_investment').next().addClass('hidden');
        $('#appreciation_retirement_investment').next().addClass('hidden');
        $('#cashflow_retirement_investment').next().addClass('hidden');
        $('#leverage_retirement_investment').next().addClass('hidden');
        $('#tax_g_retirement_investment').next().addClass('hidden');
        ////////////////////////////     remove   ///////////////////
        $('#company_1lac').removeClass('error-border');
        $('#return_401').removeClass('error-border');
        $('#risk_401').removeClass('error-border');
        $('#control_401').removeClass('error-border');
        $('#taxes_401').removeClass('error-border');
        $('#appreciation_401').removeClass('error-border');
        $('#cashflow_401').removeClass('error-border');
        $('#leverage_401').removeClass('error-border');
        $('#taxes_402').removeClass('error-border');
        $('#company_150lac').removeClass('error-border');
        $('#return_brokerage').removeClass('error-border');
        $('#risk_brokerage').removeClass('error-border');
        $('#control_brokerage').removeClass('error-border');
        $('#taxes_brokerage').removeClass('error-border');
        $('#appreciation_brokerage').removeClass('error-border');
        $('#cashflow_brokerage').removeClass('error-border');
        $('#leverage_brokerage').removeClass('error-border');
        $('#taxes_broker').removeClass('error-border');
        $('#g_ira').removeClass('error-border');
        $('#return_g_ira').removeClass('error-border');
        $('#risk_g_ira').removeClass('error-border');
        $('#control_g_ira').removeClass('error-border');
        $('#taxes_g_ira').removeClass('error-border');
        $('#appreciation_g_ira').removeClass('error-border');
        $('#cashflow_g_ira').removeClass('error-border');
        $('#leverage_g_ira').removeClass('error-border');
        $('#taxes_IRA').removeClass('error-border');
        $('#private_investment_0').removeClass('error-border');
        $('#return_private_investment').removeClass('error-border');
        $('#risk_private_investment').removeClass('error-border');
        $('#control_private_investment').removeClass('error-border');
        $('#taxes_investments').removeClass('error-border');
        $('#appreciation_private_investment').removeClass('error-border');
        $('#cashflow_private_investment').removeClass('error-border');
        $('#leverage_private_investment').removeClass('error-border');
        $('#tax_private_investment').removeClass('error-border');
        $('#g_retirement_investment_0').removeClass('error-border');
        $('#return_retirement_investment').removeClass('error-border');
        $('#risk_retirement_investment').removeClass('error-border');
        $('#control_retirement_investment').removeClass('error-border');
        $('#taxes_retirement_investment').removeClass('error-border');
        $('#appreciation_retirement_investment').removeClass('error-border');
        $('#cashflow_retirement_investment').removeClass('error-border');
        $('#leverage_retirement_investment').removeClass('error-border');
        $('#tax_g_retirement_investment').removeClass('error-border');
        if (company_1lac === '') {
            $('#company_1lac').next().removeClass('hidden');
            $('#company_1lac').addClass('error-border');
            $('#company_1lac').focus();
        } else if (return_401 === '') {
            $('#return_401').next().removeClass('hidden');
            $('#return_401').addClass('error-border');
            $('#return_401').focus();
        } else if (risk_401 === '') {
            $('#risk_401').next().removeClass('hidden');
            $('#risk_401').addClass('error-border');
            $('#risk_401').focus();
        } else if (control_401 === '') {
            $('#control_401').next().removeClass('hidden');
            $('#control_401').addClass('error-border');
            $('#control_401').focus();
        } else if (taxes_401 === '') {
            $('#taxes_401').next().removeClass('hidden');
            $('#taxes_401').addClass('error-border');
            $('#taxes_401').focus();
        } else if (appreciation_401 === '') {
            $('#appreciation_401').next().removeClass('hidden');
            $('#appreciation_401').addClass('error-border');
            $('#appreciation_401').focus();
        } else if (cashflow_401 === '') {
            $('#cashflow_401').next().removeClass('hidden');
            $('#cashflow_401').addClass('error-border');
            $('#cashflow_401').focus();
        } else if (leverage_401 === '') {
            $('#leverage_401').next().removeClass('hidden');
            $('#leverage_401').addClass('error-border');
            $('#leverage_401').focus();
        } else if (taxes_402 === '') {
            $('#taxes_402').next().removeClass('hidden');
            $('#taxes_402').addClass('error-border');
            $('#taxes_402').focus();
        } else if (company_150lac === '') {
            $('#company_150lac').next().removeClass('hidden');
            $('#company_150lac').addClass('error-border');
            $('#company_150lac').focus();
        } else if (return_brokerage === '') {
            $('#return_brokerage').next().removeClass('hidden');
            $('#return_brokerage').addClass('error-border');
            $('#return_brokerage').focus();
        } else if (risk_brokerage === '') {
            $('#risk_brokerage').next().removeClass('hidden');
            $('#risk_brokerage').addClass('error-border');
            $('#risk_brokerage').focus();
        } else if (control_brokerage === '') {
            $('#control_brokerage').next().removeClass('hidden');
            $('#control_brokerage').addClass('error-border');
            $('#control_brokerage').focus();
        } else if (taxes_brokerage === '') {
            $('#taxes_brokerage').next().removeClass('hidden');
            $('#taxes_brokerage').addClass('error-border');
            $('#taxes_brokerage').focus();
        } else if (appreciation_brokerage === '') {
            $('#appreciation_brokerage').next().removeClass('hidden');
            $('#appreciation_brokerage').addClass('error-border');
            $('#appreciation_brokerage').focus();
        } else if (cashflow_brokerage === '') {
            $('#cashflow_brokerage').next().removeClass('hidden');
            $('#cashflow_brokerage').addClass('error-border');
            $('#cashflow_brokerage').focus();
        } else if (leverage_brokerage === '') {
            $('#leverage_brokerage').next().removeClass('hidden');
            $('#leverage_brokerage').addClass('error-border');
            $('#leverage_brokerage').focus();
        } else if (taxes_broker === '') {
            $('#taxes_broker').next().removeClass('hidden');
            $('#taxes_broker').addClass('error-border');
            $('#taxes_broker').focus();
        } else if (g_ira === '') {
            $('#g_ira').next().removeClass('hidden');
            $('#g_ira').addClass('error-border');
            $('#g_ira').focus();
        } else if (return_g_ira === '') {
            $('#return_g_ira').next().removeClass('hidden');
            $('#return_g_ira').addClass('error-border');
            $('#return_g_ira').focus();
        } else if (risk_g_ira === '') {
            $('#risk_g_ira').next().removeClass('hidden');
            $('#risk_g_ira').addClass('error-border');
            $('#risk_g_ira').focus();
        } else if (control_g_ira === '') {
            $('#control_g_ira').next().removeClass('hidden');
            $('#control_g_ira').addClass('error-border');
            $('#control_g_ira').focus();
        } else if (taxes_g_ira === '') {
            $('#taxes_g_ira').next().removeClass('hidden');
            $('#taxes_g_ira').addClass('error-border');
            $('#taxes_g_ira').focus();
        } else if (appreciation_g_ira === '') {
            $('#appreciation_g_ira').next().removeClass('hidden');
            $('#appreciation_g_ira').addClass('error-border');
            $('#appreciation_g_ira').focus();
        } else if (cashflow_g_ira === '') {
            $('#cashflow_g_ira').next().removeClass('hidden');
            $('#cashflow_g_ira').addClass('error-border');
            $('#cashflow_g_ira').focus();
        } else if (leverage_g_ira === '') {
            $('#leverage_g_ira').next().removeClass('hidden');
            $('#leverage_g_ira').addClass('error-border');
            $('#leverage_g_ira').focus();
        } else if (taxes_IRA === '') {
            $('#taxes_IRA').next().removeClass('hidden');
            $('#taxes_IRA').addClass('error-border');
            $('#taxes_IRA').focus();
        } else if (private_investment_0 === '') {
            $('#private_investment_0').next().removeClass('hidden');
            $('#private_investment_0').addClass('error-border');
            $('#private_investment_0').focus();
        } else if (return_private_investment === '') {
            $('#return_private_investment').next().removeClass('hidden');
            $('#return_private_investment').addClass('error-border');
            $('#return_private_investment').focus();
        } else if (risk_private_investment === '') {
            $('#risk_private_investment').next().removeClass('hidden');
            $('#risk_private_investment').addClass('error-border');
            $('#risk_private_investment').focus();
        } else if (control_private_investment === '') {
            $('#control_private_investment').next().removeClass('hidden');
            $('#control_private_investment').addClass('error-border');
            $('#control_private_investment').focus();
        } else if (taxes_investments === '') {
            $('#taxes_investments').next().removeClass('hidden');
            $('#taxes_investments').addClass('error-border');
            $('#taxes_investments').focus();
        } else if (appreciation_private_investment === '') {
            $('#appreciation_private_investment').next().removeClass('hidden');
            $('#appreciation_private_investment').addClass('error-border');
            $('#appreciation_private_investment').focus();
        } else if (cashflow_private_investment === '') {
            $('#cashflow_private_investment').next().removeClass('hidden');
            $('#cashflow_private_investment').addClass('error-border');
            $('#cashflow_private_investment').focus();
        } else if (leverage_private_investment === '') {
            $('#leverage_private_investment').next().removeClass('hidden');
            $('#leverage_private_investment').addClass('error-border');
            $('#leverage_private_investment').focus();
        } else if (tax_private_investment === '') {
            $('#tax_private_investment').next().removeClass('hidden');
            $('#tax_private_investment').addClass('error-border');
            $('#tax_private_investment').focus();
        } else if (g_retirement_investment_0 === '') {
            $('#g_retirement_investment_0').next().removeClass('hidden');
            $('#g_retirement_investment_0').addClass('error-border');
            $('#g_retirement_investment_0').focus();
        } else if (return_retirement_investment === '') {
            $('#return_retirement_investment').next().removeClass('hidden');
            $('#return_retirement_investment').addClass('error-border');
            $('#return_retirement_investment').focus();
        } else if (risk_retirement_investment === '') {
            $('#risk_retirement_investment').next().removeClass('hidden');
            $('#risk_retirement_investment').addClass('error-border');
            $('#risk_retirement_investment').focus();
        } else if (control_retirement_investment === '') {
            $('#control_retirement_investment').next().removeClass('hidden');
            $('#control_retirement_investment').addClass('error-border');
            $('#control_retirement_investment').focus();
        } else if (taxes_retirement_investment === '') {
            $('#taxes_retirement_investment').next().removeClass('hidden');
            $('#taxes_retirement_investment').addClass('error-border');
            $('#taxes_retirement_investment').focus();
        } else if (appreciation_retirement_investment === '') {
            $('#appreciation_retirement_investment').next().removeClass('hidden');
            $('#appreciation_retirement_investment').addClass('error-border');
            $('#appreciation_retirement_investment').focus();
        } else if (cashflow_retirement_investment === '') {
            $('#cashflow_retirement_investment').next().removeClass('hidden');
            $('#cashflow_retirement_investment').addClass('error-border');
            $('#cashflow_retirement_investment').focus();
        } else if (leverage_retirement_investment === '') {
            $('#leverage_retirement_investment').next().removeClass('hidden');
            $('#leverage_retirement_investment').addClass('error-border');
            $('#leverage_retirement_investment').focus();
        } else if (tax_g_retirement_investment === '') {
            $('#tax_g_retirement_investment').next().removeClass('hidden');
            $('#tax_g_retirement_investment').addClass('error-border');
            $('#tax_g_retirement_investment').focus();
        } else {
            $('#step_1').addClass('hidden');
            $('#step_2').addClass('hidden');
            $('#step_3').addClass('hidden');
            $('#step_4').removeClass('hidden');
        }

    });
    $('#btn_step_3_previous').on('click', function () {
        $('#step_1').addClass('hidden');
        $('#step_2').removeClass('hidden');
        $('#step_3').addClass('hidden');
        $('#step_4').addClass('hidden');
    });
    $('#btn_step_3_next').on('click', function () {
        $('#step_1').addClass('hidden');
        $('#step_2').addClass('hidden');
        $('#step_3').addClass('hidden');
        $('#step_4').removeClass('hidden');
    });
    $('#btn_step_4_previous').on('click', function () {
        $('#step_1').addClass('hidden');
        $('#step_2').addClass('hidden');
        $('#step_3').removeClass('hidden');
        $('#step_4').addClass('hidden');
    });

    $('#step__3_2').on('click', function () {
        $('#step_1').addClass('hidden');
        $('#step_2').removeClass('hidden');
        $('#step_3').addClass('hidden');
        $('#step_4').addClass('hidden');
    });
    $('#step__3_1').on('click', function () {
        $('#step_1').removeClass('hidden');
        $('#step_2').addClass('hidden');
        $('#step_3').addClass('hidden');
        $('#step_4').addClass('hidden');
    });
    $('#step__2_1').on('click', function () {
        $('#step_1').removeClass('hidden');
        $('#step_2').addClass('hidden');
        $('#step_3').addClass('hidden');
        $('#step_4').addClass('hidden');
    });

    $('.section_container').find('input').keyup(function () {
        var id = $(this).attr('id');
        switch (id) {
            case 'age':
                if (!$.isNumeric($(this).val())) {
                    $(this).next().removeClass('hidden');
                    $(this).addClass('error-border');
                }
                else {
                    age = parseFloat($(this).val());
                    if (!$(this).next().hasClass('hidden')) {
                        $(this).next().addClass('hidden');
                    }
                    $(this).removeClass('error-border');
                }
                break;
            case 'annual_income':
                if (!$.isNumeric($(this).val())) {
                    $(this).next().removeClass('hidden');
                    $(this).addClass('error-border');
                }
                else {
                    annual_income = parseFloat($(this).val());
                    if (!$(this).next().hasClass('hidden')) {
                        $(this).next().addClass('hidden');
                    }
                    $(this).removeClass('error-border');
                }
                break;
            case 'saving_each_year':
                if (!$.isNumeric($(this).val())) {
                    $(this).next().removeClass('hidden');
                    $(this).addClass('error-border');
                }
                else {
                    saving_each_year = parseFloat($(this).val());
                    if (!$(this).next().hasClass('hidden')) {
                        $(this).next().addClass('hidden');
                    }
                    $(this).removeClass('error-border');
                }
                break;
            case 'retirement_assests':
                if (!$.isNumeric($(this).val())) {
                    $(this).next().removeClass('hidden');
                    $(this).addClass('error-border');
                }
                else {
                    retirement_assests = parseFloat($(this).val());
                    if (!$(this).next().hasClass('hidden')) {
                        $(this).next().addClass('hidden');
                    }
                    $(this).removeClass('error-border');
                }
                break;

        }
        calculate_results();
    });
    jQuery(document).ready(function ($) {
        $('.section_container2').find('input').keyup(function () {
            var id = $(this).attr('id');
            switch (id) {
                case 'gross_income':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        gross_income = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'employee_paid_tax':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        employee_paid_tax = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'federal_income_tax':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        federal_income_tax = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'state_income_tax':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        state_income_tax = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'saving_each_year_retirement':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        saving_each_year_retirement = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'value_of_retirement':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        value_of_retirement = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;


            }

            calculate_results();
        });
    });
    jQuery(document).ready(function ($) {
        $('.section_container3').find('input').keyup(function () {
            var id = $(this).attr('id');
            switch (id) {
                case 'company_1lac':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        company_1lac = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'return_401':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        return_401 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'risk_401':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        risk_401 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'control_401':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        control_401 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'taxes_401':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_401 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'appreciation_401':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        appreciation_401 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'cashflow_401':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        cashflow_401 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'leverage_401':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        leverage_401 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'taxes_402':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_402 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                //var ,,,,,,,,;
                case 'company_150lac':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        company_150lac = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'return_brokerage':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        return_brokerage = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'risk_brokerage':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        risk_brokerage = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'control_brokerage':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        control_brokerage = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'taxes_brokerage':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_brokerage = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'appreciation_brokerage':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        appreciation_brokerage = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'cashflow_brokerage':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        cashflow_brokerage = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'leverage_brokerage':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        leverage_brokerage = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'taxes_broker':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_broker = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;

                case 'g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'return_g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        return_g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'risk_g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        risk_g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'control_g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        control_g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'taxes_g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;

                case 'appreciation_g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        appreciation_g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'cashflow_g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        cashflow_g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;

                case 'leverage_g_ira':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        leverage_g_ira = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'taxes_IRA':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_IRA = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;

                case 'g_retirement_investment_0':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        g_retirement_investment_0 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'return_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        return_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'risk_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        risk_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'control_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        control_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;

                case 'taxes_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'appreciation_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        appreciation_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'cashflow_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        cashflow_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'leverage_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        leverage_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'tax_g_retirement_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        tax_g_retirement_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;

                case 'private_investment_0':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        private_investment_0 = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'return_private_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        return_private_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'risk_private_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        risk_private_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'control_private_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        control_private_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'taxes_investments':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        taxes_investments = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'appreciation_private_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        appreciation_private_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'cashflow_private_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        cashflow_private_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'leverage_private_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        leverage_private_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'tax_private_investment':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        tax_private_investment = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;


            }
            console.log(taxes_IRA);
            console.log(tax_g_retirement_investment);
            calculate_results();
        });
    });
    jQuery(document).ready(function ($) {
        $('.section_container4').find('input').keyup(function () {
            var id = $(this).attr('id');
            switch (id) {
                case 'assets_saving_retirements':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        assets_saving_retirements = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;
                case 'deploy_assets_core':
                    if (!$.isNumeric($(this).val())) {
                        $(this).next().removeClass('hidden');
                        $(this).addClass('error-border');
                    }
                    else {
                        deploy_assets_core = parseFloat($(this).val());
                        if (!$(this).next().hasClass('hidden')) {
                            $(this).next().addClass('hidden');
                        }
                        $(this).removeClass('error-border');
                    }
                    break;

            }

            calculate_results();
        });
    });
});
function NPER(rate, payment, present, future, type) {
    // Initialize type
    type = (typeof type === 'undefined') ? 0 : type;

    // Initialize future value
    future = (typeof future === 'undefined') ? 0 : future;

    // Return number of periods
    const num = payment * (1 + rate * type) - future * rate;
    const den = (present * rate + payment * (1 + rate * type));
    return Math.log(num / den) / Math.log(1 + rate);
}

function RATE(periods, payment, present, future, type, guess) {
    guess = (guess === undefined) ? 0.01 : guess;
    future = (future === undefined) ? 0 : future;
    type = (type === undefined) ? 0 : type;

    // Set maximum epsilon for end of iteration
    const epsMax = 1e-6;

    // Set maximum number of iterations
    const iterMax = 100;
    let iter = 0;
    let close = false;
    let rate = guess;

    while (iter < iterMax && !close) {
        const t1 = Math.pow(rate + 1, periods);
        const t2 = Math.pow(rate + 1, periods - 1);
        const f1 = future + t1 * present + payment * (t1 - 1) * (rate * type + 1) / rate;
        const f2 = periods * t2 * present - payment * (t1 - 1) * (rate * type + 1) / Math.pow(rate, 2);
        const f3 = periods * payment * t2 * (rate * type + 1) / rate + payment * (t1 - 1) * type / rate;
        const newRate = rate - f1 / (f2 + f3);
        if (Math.abs(newRate - rate) < epsMax) {
            close = true;
        }
        iter++
        rate = newRate;
    }
    if (!close) {
        return Number.NaN + rate;
    }
    return rate;
};
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
function calculate_results() {
    var require_retirement_assement = 0;
    var results_rat_race = 0;
    var paid_tax_each_year = 0;
    var yearly_strike_number = 0;
    var monthly_strike_number = 0;
    var after_tax_home_pay = 0;
    var current_income_replace = 0;
    var time_you_currently_own = 0;
    var your_age = 0;
    var compound_cashflow_assets = 0;
    var total_assets = 0;
    var core_4_value = 0;
    var core_ranking_return = 0;
    var core_ranking_risk = 0;
    var core_ranking_control = 0;
    var core_ranking_taxes = 0;
    var pillar_ranking_appreciation = 0;
    var pillar_ranking_cashflow = 0;
    var pillar_ranking_leverage = 0;
    var pillar_ranking_taxes = 0;
    var pillar_4_score = 0;
    var bottom_years_financial_free = 0;
    var bottom_age_financial_free = 0;
    var assets = 0;
    var step1_total = 0;



    //result retirement assement

    if (annual_income != 0) {
        step1_total = (annual_income * 25);
    }


    if (step1_total != 0) {
        $('#results_retirement_assesment').html(formatter.format(step1_total));
        require_retirement_assement = step1_total;
    }
    //result retirement assement
    //age you reture
    if (require_retirement_assement == 0) {
        step1_total = "-";
    } else {

        var nperresults = NPER(0.0529, saving_each_year, retirement_assests, -require_retirement_assement, 1);
        console.log('nperresults', nperresults);
        step1_total = nperresults + age;
        ///step4 step value append
        $('#final_rate_race').html(formatter.format(step1_total.toFixed(2)));
        results_rat_race = parseFloat(step1_total);

    }
    if (step1_total > 0) {
        $('#results_rat_race').html(step1_total.toFixed(1));
        results_rat_race = parseFloat(step1_total);
    }
    //age you reture
    //savers_required_rate 

    if (require_retirement_assement == 0) {
        step1_total = "-";
    } else {

        var rate = RATE(10, saving_each_year, retirement_assests, -require_retirement_assement, 1);
        var check = rate * 100
        console.log('rate', check)
        // payment_value = Math.log10(annual_income / (annual_income - require_retirement_assement * 10));
        // divisible = Math.log10((1 + 10));
        // rate = payment_value/divisible;
        // npear = (annual_income / (annual_income - require_retirement_assement * 10)) / (1 + 10);
        // step1_total = rate +1;

    }
    if (rate != 0) {
        $('#savers_required_rate').html(check.toFixed(1));
        $('#savers_required_rate').append('%');
        savers_required_rate = parseFloat(check);
    }
    //savers_required_rate 
    //paid_tax_each_year
    step1_total = employee_paid_tax + federal_income_tax + state_income_tax;
    if (step1_total > 0) {
        $('#paid_tax_each_year').html(formatter.format(step1_total.toFixed(2)));
        paid_tax_each_year = parseFloat(step1_total);

    }

    //paid_tax_each_year 
    //after_tax_home_pay 
    step1_total = gross_income - paid_tax_each_year;

    if (step1_total > 0) {
        $('#after_tax_home_pay').html(formatter.format(step1_total.toFixed(2)));

        after_tax_home_pay = parseFloat(step1_total);

    }
    //after_tax_home_pay 
    //yearly_strike_number 
    step1_total = after_tax_home_pay - saving_each_year_retirement;
    if (step1_total > 0) {
        $('#yearly_strike_number').html(formatter.format(step1_total.toFixed(2)));
        yearly_strike_number = parseFloat(step1_total);

    }
    //yearly_strike_number 
    //monthly_strike_number 
    step1_total = yearly_strike_number / 12;
    if (step1_total > 0) {
        $('#monthly_strike_number').html(formatter.format(step1_total.toFixed(2)));
        monthly_strike_number = parseFloat(step1_total);
        //monthly stike number step 4
        $('#final_monthly').html(formatter.format(step1_total.toFixed(2)));
        monthly_strike_number = parseFloat(step1_total);
        $('#final_monthly_strike').html(formatter.format(step1_total.toFixed(2)));
        monthly_strike_number = parseFloat(step1_total);


    }
    //monthly_strike_number 
    //current_income_replace 
    if (gross_income == 0) {
        step1_total = "";
    } else {
        step1_total = ((yearly_strike_number / gross_income) * 100);
        step1_total = Math.round(step1_total);
        if (step1_total > 0) {
            $('#current_income_replace').html(step1_total);
            $('#current_income_replace').append('%');
            current_income_replace = parseFloat(step1_total);

        }
    }
    //current_income_replace 
    //time_you_currently_own 

    if (gross_income == 0) {
        step1_total = "";
    } else {
        step1_total = (value_of_retirement / monthly_strike_number);
        if (step1_total > 0) {
            $('#time_you_currently_own').html(step1_total.toFixed(1));
            time_you_currently_own = parseFloat(step1_total);
            //final_months_time  step 4 
            $('#final_months_time').html(step1_total);
            time_you_currently_own = parseFloat(step1_total);

        }
    }
    //time_you_currently_own 
    //age is 
    step1_total = age;
    if (step1_total > 0) {
        $('#final_current_age').html(step1_total);
        your_age = parseFloat(step1_total);
    }
    //age is 
    //compound_cashflow_assets
    step1_total = monthly_strike_number / 500;
    step1_total = Math.round(step1_total);
    if (step1_total > 0) {
        $('#compound_cashflow_assets').html(step1_total);
        compound_cashflow_assets = parseFloat(step1_total);
    }
    //compound_cashflow_assets
    //var private_investment_0,return_private_investment,risk_private_investment,control_private_investment,taxes_private_investment,appreciation_private_investment,leverage_private_investment,taxes_private_investment,cashflow_private_investment;
    //TOTAL RETIREMENT ASSETS
    step1_total = company_1lac + company_150lac + g_ira + private_investment_0 + g_retirement_investment_0;
    if (step1_total > 0) {
        $('#total_assets').html(formatter.format(step1_total));
        total_assets = parseFloat(step1_total);
    }
    //TOTAL RETIREMENT ASSETS
    //core 4 value ranking
    if (total_assets == 0) {
        step1_total = "";
    } else {
        step1_total = ((return_401 * (company_1lac / total_assets)) + (return_brokerage * (company_150lac / total_assets)) + (return_g_ira * (g_ira / total_assets)) + (return_private_investment * (private_investment_0 / total_assets)) + (return_retirement_investment * (g_retirement_investment_0 / total_assets)));

        $('#core_ranking_return').html(step1_total.toFixed(1));
        core_ranking_return = parseFloat(step1_total);
    }

    //core 4 value risk
    if (total_assets == 0) {
        step1_total = "";
    } else {
        step1_total = ((risk_401 * (company_1lac / total_assets)) + (risk_brokerage * (company_150lac / total_assets)) + (risk_g_ira * (g_ira / total_assets)) + (risk_private_investment * (private_investment_0 / total_assets)) + (risk_retirement_investment * (g_retirement_investment_0 / total_assets)));

        $('#core_ranking_risk').html(step1_total.toFixed(1));
        core_ranking_risk = parseFloat(step1_total);
    }
    //core 4 value risk
    //core 4 value control
    if (total_assets == 0) {
        step1_total = "";
    } else {
        step1_total = ((control_401 * (company_1lac / total_assets)) + (control_brokerage * (company_150lac / total_assets)) + (control_g_ira * (g_ira / total_assets)) + (control_private_investment * (private_investment_0 / total_assets)) + (control_retirement_investment * (g_retirement_investment_0 / total_assets)));

        $('#core_ranking_control').html(step1_total.toFixed(1));
        core_ranking_control = parseFloat(step1_total);
    }
    //core 4 value control
    //core 4 value taxes
    if (total_assets == 0) {
        step1_total = "";
    } else {
        step1_total = ((taxes_401 * (company_1lac / total_assets)) + (taxes_brokerage * (company_150lac / total_assets)) + (taxes_g_ira * (g_ira / total_assets)) + (taxes_investments * (private_investment_0 / total_assets)) + (taxes_retirement_investment * (g_retirement_investment_0 / total_assets)));

        $('#core_ranking_taxes').html(step1_total.toFixed(1));
        core_ranking_taxes = parseFloat(step1_total);
    }
    //core 4 value taxes
    //core 4 value
    step1_total = core_ranking_return + core_ranking_control + core_ranking_risk + core_ranking_taxes;

    if (step1_total >= 0) {
        $('#core_4_value').html(step1_total.toFixed(1));
        $('#core_4_value').append('/4');
        core_4_value = parseFloat(step1_total);

    }
    //core 4 value 
    //pillar 4 ranking apreciation
    if (total_assets == 0) {
        step1_total = "";
    } else {
        step1_total = ((appreciation_401 * (company_1lac / total_assets)) + (appreciation_brokerage * (company_150lac / total_assets)) + (appreciation_g_ira * (g_ira / total_assets)) + (appreciation_private_investment * (private_investment_0 / total_assets)) + (appreciation_retirement_investment * (g_retirement_investment_0 / total_assets)));

        $('#pillar_ranking_appreciation').html(step1_total.toFixed(1));
        pillar_ranking_appreciation = parseFloat(step1_total);
    }
    //pillar 4 ranking apreciation
    //pillar 4 ranking cashflow
    if (total_assets == 0) {
        step1_total = "";
    } else {
        step1_total = ((cashflow_401 * (company_1lac / total_assets)) + (cashflow_brokerage * (company_150lac / total_assets)) + (cashflow_g_ira * (g_ira / total_assets)) + (cashflow_private_investment * (private_investment_0 / total_assets)) + (cashflow_retirement_investment * (g_retirement_investment_0 / total_assets)));
        if (step1_total >= 0) {
            $('#pillar_ranking_cashflow').html(step1_total.toFixed(1));

            pillar_ranking_cashflow = parseFloat(step1_total);

        }


    }
    //pillar 4 ranking cashflow
    //pillar 4 ranking leverage
    if (total_assets == 0) {
        step1_total = "";
    } else {
        step1_total = ((leverage_401 * (company_1lac / total_assets)) + (leverage_brokerage * (company_150lac / total_assets)) + (leverage_g_ira * (g_ira / total_assets)) + (leverage_private_investment * (private_investment_0 / total_assets)) + (leverage_retirement_investment * (g_retirement_investment_0 / total_assets)));

        $('#pillar_ranking_leverage').html(step1_total.toFixed(1));
        pillar_ranking_leverage = parseFloat(step1_total);
    }
    //pillar 4 ranking leverage
    //pillar 4 ranking texas
    if (total_assets == 0) {
        step1_total = "";
    } else {

        step1_total = ((taxes_402 * (company_1lac / total_assets)) + (taxes_broker * (company_150lac / total_assets)) + (taxes_IRA * (g_ira / total_assets)) + (tax_private_investment * (private_investment_0 / total_assets)) + (tax_g_retirement_investment * (g_retirement_investment_0 / total_assets)));
        //console.log(step1_total);
        if (step1_total !== 'NaN') {
            $('#pillar_ranking_taxes').html(step1_total.toFixed(1));
            pillar_ranking_taxes = parseFloat(step1_total);
        }
    }
    //pillar 4 ranking taxes
    //4 pillar ranking
    step1_total = pillar_ranking_appreciation + pillar_ranking_cashflow + pillar_ranking_leverage + pillar_ranking_taxes;
    if (step1_total > 0) {
        $('#pillar_4_score').html(step1_total.toFixed(1));
        $('#pillar_4_score').append('/4');
        pillar_4_score = parseFloat(step1_total);
        $('#final_pillars_score').html(step1_total.toFixed(1));
        pillar_4_score = parseFloat(step1_total);
    }
    //4 pillare ranging
    //bottom_years_financial_free
    // step1_total = compound_cashflow_assets;
    // if (step1_total > 0) {
    //     $('#bottom_years_financial_free').html(step1_total);
    //     bottom_years_financial_free = parseFloat(step1_total);

    // }

    //bottom_years_financial_free

    //assets_saving_retirements saving
    step1_total = saving_each_year;
    if (step1_total > 0) {
        $('#assets_saving_retirements').html(step1_total);
    }

    var tempInitial = (10 / 12 * 10) + 0.1;
    var calInitial = round(tempInitial, 1);
    $('#bottom_years_financial_free').html(calInitial);
    //assets_saving_retirements
    // creating a array 
    /////////////////
    var Y70 = 0;
    var U70 = -(Y70) / 25000;
    var V70 = 1;
    var W70 = 0;
    if (deploy_assets_core != "" || deploy_assets_core > 0) {
        W70 = deploy_assets_core;
    }
    var X70 = saving_each_year / 12;
    var Z70 = 0;
    var AA70 = W70 + X70 + Y70 + Z70;
    var sum = Y70;


    for (var i = 2; i <= 119; i++) {
        var Y = 0;
        if (AA70 > 25000) {
            Y = -25000;
        }
        var sum = sum + Y;
        var U = -(sum) / 25000;
        var V = i;
        var W = 0;
        var X = X70;
        var Z = -(sum) / 25000 * 300;
        var AA = AA70 + X + Y + Z;
        var compound_cashflow_assets_round = Math.round(compound_cashflow_assets);
        if (compound_cashflow_assets_round == U) {
            var temp = V / 12;
            var cal = round(temp, 1);
            $('#bottom_years_financial_free').html(cal);
            break;
        } else {
            Y70 = Y;
            U70 = U
            V70 = V;
            W70 = W;
            X70 = X;
            Z70 = Z;
            AA70 = AA;
        }
    }
    //bottom_age_financial_free
    step1_total = age + cal;
    if (step1_total > 0) {
        $('#bottom_age_financial_free').html(step1_total);
        bottom_age_financial_free = parseFloat(step1_total);

    }
    //bottom_age_financial_free

}