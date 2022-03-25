<?php

/**
 * Plugin Name: Cashflow 
 * Description: Misc features implementation.
 * Version: 1.0
 * Plugin URI: https://lightmarkmedia.com
 * Author: Naveed & Khurram
 * Author URI: https://lightmarkmedia.com
 */
class Cashflow {

    function __construct() {
        //add_action('init', array($this, 'check_if_user_login'));
        add_shortcode('cashflow_pluginww', array($this, 'grid_tax_program_sheet_handler'));
        add_action('wp_enqueue_scripts', array($this, 'cashflow_plugin_style'));
    }

    function cashflow_plugin_style() {
        wp_register_style('public_custom_css', plugins_url('/cashflow_plugin/assets/css/custom.css'));
        wp_register_script('front-script', plugins_url('/cashflow_plugin/assets/js/custom_forms.js'), array('jquery'), null, True);

        wp_enqueue_style('public_custom_css');
        wp_enqueue_script('front-script');
        // wp_localize_script('front-script', 'statesObj', array('map_states' => $states));
    }

    function grid_tax_program_sheet_handler($atts) {
        $attributes = shortcode_atts(array(
            'title' => 'CASHFLOW GRID TAX PROGRAM',
            'subtitle' => '(FOUR SIMPLE STRATEGIES TO SAVE FIVE FIGURES IN TAXES)',
            'show_title' => true
                ), $atts, 'grid_tax_program_sheet');
        ob_start();
        ?>
        
        <div id="step_1" class="container_fluid">
       
            <?php if ($attributes['show_title']): ?>
                <h3 class="title"><?= $attributes['title']; ?></h3>
                <h4 class="sub_title"><?= $attributes['subtitle']; ?></h4>
            <?php endif; ?>
            <h3 style="text-align: center; color:white; font-size:40px;">START 1: PROOF THAT SAVERS OR LOSERS</h3>
            <p style="text-align: center;color:white;">"NUMBERS MAY DISAPPOINT,BUT THEY NEVER LIE"</p>
            <p style="color:white; text-align: center;">SIMPLE AND INDUSPUTABLE PROOF THAT THE TRADITIONAL PATH WILL NOT GET YOU WHAT YOU WANT</p>
            <div class="section_container">
                <h3 style="font-size:25px;">START HERE: ENTER YOUR INFORMATION IN THE FIELDS BELOW</h3>
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="age">STEP 1: ENTER YOUR AGE</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" min="1" max="11" name="age" id="age" class="field_input" placeholder="Enter your age "/>
                        <div class="error hidden">Please input only numbers. e.g 123</div>
                    </div>
                </div>
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="annual_income">STEP 2:ENTER YOUR ANNUAL INCOME</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" min="1" max="11" name="annual_income" id="annual_income" class="field_input" placeholder="Annual Income in $"/>
                        <div class="error hidden">Please input only numbers. e.g. $18,100 would become 18100</div>
                    </div>
                </div>
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="saving_each_year">STEP 3: ENTER HOW MUCH YOU SAVE EACH YEAR FOR RETIREMENT</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" min="1" max="11" name="saving_each_year" id="saving_each_year" class="field_input" placeholder="Enter how much you save each year for retirement "/>
                        <div class="error hidden">Please input only numbers. e.g 123</div>
                    </div>
                </div>
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="saving_each_year">STEP 4: ENTER THE VALUE OF YOUR RETIREMENT ASSETS</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" min="1" max="11" pattern="[0-9]{2}" name="retirement_assests" id="retirement_assests" class="field_input" placeholder="Enter the value of your retirement assests"/>
                        <div class="error hidden">Please input only numbers. e.g 123</div>
                    </div>
                </div>
            </div>
            <hr style="clear: both; visibility: hidden;">
           <!-- step 1part2 --> 
            <div class="section_container1">
                    <div class="column1">
                            <h3 style="color:red;font-size:25px; text-align:center; ">YOUR RESULT:</h3>
                            <h3 style="color:white;font-size:25px; ">YOUR CURRENT PATH TO TRADITIONAL RETIRMENT</h3>
                            <div class="strategies_results">
                            <div class="text">REQUIRED RETIREMENT ASSETS</div><div id="results_step_4" class="figures"><span  id="results_retirement_assesment" style="float: left;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                            <div class="clear"></div>
                        </div>
                        <div class="strategies_results">
                            <div class="text">[DO NOT EDIT] AVERAGE ANNUAL RATE OF RETURN</div><div id="results_step_4" class="figures"><span id="result_annual_average" style="float: left;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">5.29%</span></div>
                            <div class="clear"></div>
                        </div>
                        <div class="strategies_results">
                            <div class="text">AGE YOU CAN QUIT THE "RAT RACE" AND FINALLY LIVE A LIFE OF PURPOSE</div><div id="results_step_4" class="figures"><span id="results_rat_race" style="float: left;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                            <div class="clear"></div>
                        </div>
                           
                    </div>
                        <div class="column2">
                        <h3 style="color:red;font-size:25px; text-align:center;">SAVERS ARE LOSERS:</h3>
                            <h3 style="color:white;font-size:25px;">WHY YOU CAN'T RELY ON DOING THE SAME THINGS JUST BETTER IF YOU WANT TO BE FINANCIALLY FREE IN 10 YEARS OR LESS</h3>
                            <div class="strategies_results">
                            <div class="text">[DO NOT EDIT] HOW MANY YEARS UNTIL YOU WANT TO BE FINANCIALLY FREE?</div><div id="results_step_4" class="figures"><span id="savers_financially_free" style="float: left;width: 128px;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">10</span></div>
                            <div class="clear"></div>
                        </div>
                        <div class="strategies_results">
                            <div class="text">REQUIRED RATE OF RETURN FOR FINANCIALLY FREEDOM</div><div id="results_step_4" class="figures"><span id="savers_required_rate" style="float: left;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                            <div class="clear"></div>
                        </div>
                        </div>     
            </div>
            <hr style="clear: both; visibility: hidden;">
            <div class="disclaimer">
            <p><strong>***DISCLAIMER:</strong> THIS FORM IS AN EDUCATIONAL TOOL OFFERED BY CASHFLOW TACTICS,LLC.CASHFLOW TACTICS,LLC IS NOT SELLING INVESTMENTS,INSURANCE,REAL ESTATE, SECURITIES,OR ANYTHING OTHER THAN EDUCATION AND IS NOT PROVIDING TAX ADVICE,LEGAL ADVICE OR INVESTMENS ADVISORY PRODUCTS.AS YOU CONSIDER APPLYING THE EDUCATIONAL PRINCIPALS YOU SEE HERE,YOU SHOULD UNDERSTAND THAT THERE IS RISK IN ANY INVESTMENT AND WE CANNOT GUARANTEE ANY PARTICULAR RESULTS OR SUCCESS AVERAGE ANNUAL RATE OF RETURN OF 5.29% IS BASED ON THIS INDEPENDENT RESEARCH STUDY OF THE AVERAGE EQUITY INVESTER(SEE PAGE 6) **REQUIRED RETIREMENT ASSETS IS BASED ON THE 4% RULE(OR 25X RULE)</p>
            </div>
           
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
            <li class="page-item">
                <a class="page-link" href="#" id="btn_step_1_next">NEXT</a>
                </li>
            </ul>
            </nav> 
        </div>
            <!-- step2  -->
            <div id="step_2" class="container_fluid hidden">
            <div class="section_container2">
                <h3 style="color: white; text-align:center;font-size:40px;">STEP 2: HOW TO CALCULATE YOUR "STRIKE" NUMBER </h3>
                <p style="color: white; text-align:center;font-size:25px;">"YOU CAN'T HIT A TARGET YOU CANNOT SEE A TARGET YOU DO NOT HAVE."</p>
                 
                <div class="fields_continer hidden">
                    <div class="field_label">
                        <label for="annual_income">STEP 1: ENTER YOUR GROSS INCOME</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="ff" id="fff" class="field_input" placeholder="ENTER YOUR GROSS INCOME"/>
                        <div class="error hidden">Please input only numbers. e.g. $18,100 would become 18100</div>
                        <div class="below_text">
                         <label>THIS IS YOUR SALARY PLUS ANY BONUSES.IF YOU ARE SELF-EMPLOYED OR OWN A BUSINESS,THIS IS YOUR TOTAL WAGES PLUS THE EARNINGS FROM YOUR BUSINESS THAT ARE TAXABLE TO YOU EACH YEAR.</label> </div>
                    </div>
                    </div>
                    <div class="fields_continer">
                    <div class="field_label">
                        <label for="annual_income">STEP 1: ENTER YOUR GROSS INCOME</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="gross_income" id="gross_income" class="field_input" placeholder="ENTER YOUR EMPLOYMENT TAX PAID*"/>
                        <div class="error hidden">Please input only numbers. e.g. $18,100 would become 18100</div>
                        <div class="below_text">
                         <label>THIS IS YOUR SALARY PLUS ANY BONUSES.IF YOU ARE SELF-EMPLOYED OR OWN A BUSINESS,THIS IS YOUR TOTAL WAGES PLUS THE EARNINGS FROM YOUR BUSINESS THAT ARE TAXABLE TO YOU EACH YEAR.</label> </div>
                    </div>
                    </div>
              
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="annual_income">STEP 2:ENTER YOUR EMPLOYMENT TAX PAID*</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="employee_paid_tax" id="employee_paid_tax" class="field_input" placeholder="ENTER YOUR EMPLOYMENT TAX PAID*"/>
                        <div class="error hidden">Please input only numbers. e.g. $18,100 would become 18100</div>
                        <div class="below_text">
                         <label>CALCULATE WHAT YOU PAY IN EMPLOYMENT TAX AND ENTER THAT IN STEP 2.(DO NOT USE NEGATIVE NUMBERS)*</label> </div>
                    </div>
                    </div>
                
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="saving_each_year">STEP 3: ENTER YOUR FEDERAL INCOME TAX PAID*</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="federal_income_tax" id="federal_income_tax" class="field_input" placeholder="ENTER YOUR FEDERAL INCOME TAX PAID*"/>
                        <div class="error hidden">Please input only numbers. e.g 123</div>
                        <div class="below_text">
                        <label>CALCULATE WHAT YOU PAY IN EMPLOYMENT TAX AND ENTER THAT IN STEP 3.(DO NOT USE NEGATIVE NUMBERS)*</label> </div>
                    </div>
                </div>
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="saving_each_year">STEP 4: ENTER YOUR STATE INCOME TAX PAID*</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="state_income_tax" id="state_income_tax" class="field_input" placeholder="ENTER YOUR STATE INCOME TAX PAID*"/>
                        <div class="error hidden">Please input only numbers. e.g 123</div>
                        <div class="below_text">
                        <label>CALCULATE WHAT YOU PAY IN STATE INCOME TAX AND ENTER THAT IN STEP 4.(DO NOT USE NEGATIVE NUMBERS)*</label> </div>
                    </div>
                </div>
                <div class="strategies_results">
                    <div class="text">THIS IS WHAT YOU PAY IN TAXES EACH YEAR</div><div id="results_step_2" class="figures"><span id="paid_tax_each_year" style="float: left;border: 2px solid #FF0000;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                    <div  style="padding-left: 44%;font-size: 11px;">
                        <label>THIS IS YOUR TOTAL INCOME TAX OBLICATION ANNUALLY.(HOPEFULLY YOU WERE SITTING DOWN WHEN YOU DID THIS CALCULATION)</label> </div>
                </div>
                <div class="strategies_results">
                    <div class="text">THIS IS YOUR AFTER-TAX OR "TAKE HOME" PAY</div>
                    <div id="results_step_2" class="figures">
                    <span id="after_tax_home_pay" style="float: left;;border: 2px solid #05A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span>
                </div>
                    <div class="clear"></div>
                    <div style="padding-left: 44%;font-size: 11px;">
                        <label>THIS IS YOUR AFTER-TAX INCOME OR YOUR NET TAKE HOME PAY.</label> </div>
                </div>
                
                
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="annual_income">STEP 5:ENTER HOW MUCH YOU SAVE FOR RETIREMENT EACH YEAR</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="saving_each_year_retirement" id="saving_each_year_retirement" class="field_input" placeholder="ENTER HOW MUCH YOU SAVE FOR RETIREMENT EACH YEAR"/>
                        <div class="error hidden">Please input only numbers. e.g. $18,100 would become 18100</div>
                        <div class="below_text">
                        <label>CALCULATE WHAT YOU SAVE ANNUALLY TOWARDS RETIREMENT.(DO NOT USE NEGATIVE NUMBERS)* INCLUDE 401(k),403B, 457 AND ANY OTHER RETIREMENT CONTRIBUTION TAKEN AUTOMATICALLY FROM YOUR PAYCHECKS.ALSO INCLUDE ANY ADDITIONAL CONTRIBUTION TO INDIVIDUALS IRA ACCOUNTS (ROTH OR TRADITIONAL),529 PLANS,ETC.ALSO INCLUDE CONTRIBUTIONS TO ANY OTHER INVESTMENTS INTENDED FOR RETIREMENT(BROKERAGE ACCOUNTS,PROFIT SHARE ACCOUNTS,ETC).</label> </div>
                    </div>
                </div>
                <div class="strategies_results">
                    <div class="text">RESULT : THIS IS YOUR YEARLY STRIKE NUMBER</div><div id="results_step_2" class="figures"><span id="yearly_strike_number" style="float: left;border: 2px solid #05A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                    <div style="padding-left: 44%;font-size: 11px;">
                        <label>THIS REPRESENTS THE AMOUNT OF ANNUAL CASHFLOW THAT WOULD NEED TO COLLECT FROM YOUR INVESTMENTS(IF YOU ARE FOLLOWING THE FINANCIAL FREEDOM FORMULA) FOR YOU TO BE ABLE TO REPLACE YOUR CURRENT LIFESTYLE.</label> </div>
                </div>
                
                <div class="strategies_results">
                    <div class="text">RESULT : THIS IS YOUR MONTHLY STRIKE NUMBER</div><div id="results_step_2" class="figures"><span id="monthly_strike_number" style="float: left;border: 2px solid #05A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                    <div  style="padding-left: 44%;font-size: 11px;">
                        <label>THIS IS YOUR "STRIKE" NUMBER SHOWN IN A MONTHLY AMOUNT.</label> </div>
                </div>
                <div class="strategies_results">
                    <div class="text">% OF CURRENT INCOME TO REPLACE</div><div id="results_step_2" class="figures"><span id="current_income_replace" style="float: left;border: 2px solid #05A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                    <div  style="padding-left: 44%;font-size: 11px;">
                        <label>THIS IS THE PERCENAGE OF YOUR CURRENT ACTIVE INCOME THAT YOU NEED TO REPLACE TO MAINTAIN YOUR LIFESTYLE.</label> </div>
                </div>
                
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="annual_income">STEP 6:ENTER THE VALUE OF YOUR RETIREMENT ASEETS</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="value_of_retirement" id="value_of_retirement" class="field_input" placeholder="ENTER THE VALUE OF YOUR RETIREMENT ASEETS"/>
                        <div class="error hidden">Please input only numbers. e.g. $18,100 would become 18100</div>
                        <div class="below_text">
                        <label>ENTER THE TOTAL VALUE OF ALL RETIREMENT ACCOUNTS. INCLUDE 401(k),403B, 457 AND ANY OTHER RETIREMENT CONTRIBUTION TAKEN AUTOMATICALLY FROM YOUR PAYCHECKS.ALSO INCLUDE ANY ADDITIONAL CONTRIBUTION TO INDIVIDUALS IRA ACCOUNTS (ROTH OR TRADITIONAL),529 PLANS,ETC.ALSO INCLUDE CONTRIBUTIONS TO ANY OTHER INVESTMENTS INTENDED FOR RETIREMENT(BROKERAGE ACCOUNTS,PROFIT SHARE ACCOUNTS,ETC).</label> </div>
                    </div>
                </div>
                <div class="strategies_results">
                    <div class="text">RESULT: HOW MANY MONTHS OF YOUR TIME YOU CURRENTLY OWN</div><div id="results_step_2" class="figures"><span id="time_you_currently_own" style="float: left;border: 2px solid #FF0000;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                    <div  style="padding-left: 44%;font-size: 11px">
                        <label>THIS IS THE AMOUNT OF TIME THAT YOU OWN.THE NUMBER OF MONTHS YOU CAN MAINTAIN YOUR LIFESTYLE WITHOUT TRADING ANY OF YOUR TIME FOR MONEY.</label> </div>
                </div>
                </div>
                <hr style="clear: both; visibility: hidden;">
            <div class="disclaimer">
                <p><strong>***DISCLAIMER:</strong>THIS FORM IS AN EDUCATIONAL TOOL OFFERED BY CASHFLOW TACTICS,LLC.CASHFLOW TACTICS,LLC IS NOT SELLING INVESTMENTS,INSURANCE,REAL ESTATE, SECURITIES,OR ANYTHING OTHER THAN EDUCATION AND IS NOT PROVIDING TAX ADVICE,LEGAL ADVICE OR INVESTMENS ADVISORY PRODUCTS.AS YOU CONSIDER APPLYING THE EDUCATIONAL PRINCIPALS YOU SEE HERE,YOU SHOULD UNDERSTAND THAT THERE IS RISK IN ANY INVESTMENT AND WE CANNOT GUARANTEE ANY PARTICULAR RESULTS OR SUCCESS AVERAGE ANNUAL RATE OF RETURN OF 5.29% IS BASED ON THIS INDEPENDENT RESEARCH STUDY OF THE AVERAGE EQUITY INVESTER(SEE PAGE 6) **REQUIRED RETIREMENT ASSETS IS BASED ON THE 4% RULE(OR 25X RULE)</p>
            </div> 
            <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" id="btn_step_2_previous" tabindex="-1">PREVIOUS</a>
                </li>
                <li class="page-item"><a href="#" id="step__2_1">1</a></li>
                <li class="page-item">
                <a class="page-link" href="#" id="btn_step_2_next">NEXT</a>
                </li>
            </ul>
            </nav>                    
        </div>
           
        <!-- STEP:3-->

        <div id="step_3"  class="container_fluid hidden">
        <h3 style="color: white; text-align:center;font-size:40px;">STEP 3: THE FINANCIAL FREEDOM FORMULA ASSESSMENT</h3>
        <P style="color: white; text-align:center;text-align:center;font-size:25px;">FINANCIAL FREEDOM = [CORE 4 + 4PILLARS]*VELOCITY</P>
        <h3 style="color: white; text-align:center;font-size:40px;">ENTER INFORMATION ON YOUR INVESTMENT BELOW</h3>   
        <div class="section_container3" id="site-header">
        <div class="section_container_top_area">
                <label id="company_401">[ E . G . COMPANY 401 [ K ]</label><br>
                <label style="padding-left:22px;" >INVESTMENT DESCRIPTION</label>
                </div> 
        <div class="section_container_top_area">               
                <input style=" border-radius: 34px;text-align: center;" class="field_input" id="company_1lac" type="text" name="company_1lac">
                <label >ENTER THE ASSET VALUE OR EQUITY</label>
                </div>
                <div class="section_container3_1">
                <div class="colum_1" >
                <table style="width: 100%;">
                <tr>
                <th colspan="2">CORE FOR RANKINGS</th>
                </tr>
                <tr>
                <th>RETURN</th>
                <th>RISK</th>
                </tr>
                <tr>    
                <td><div class="field_wrapper_inputs"><input id="return_401" class="field_input" type="text" name="fname"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input" id="risk_401" type="text" name="fname"></div></td>
                </tr>
                <tr>
                <th>CONTROL</th>
                <th>TAXES</th>
                </tr>
                <tr>    
                <td><div class="field_wrapper_inputs"><input class="field_input" type="text"  id="control_401" name="fname"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input" id="taxes_401" type="text" name="fname"></div></td>
                </tr>
                    </table>
                           
                    </div>
                        <div class="colum_2">
                        <table style="width: 100%; ">
                <tr>
                <th colspan="2">4 PILLARS RANKING</th>
                </tr>
                <tr>
                <th>APPRECIATION</th>
                <th>CASHFLOW</th>
                </tr>
                <tr>    
                <td><div class="field_wrapper_inputs"><input class="field_input" id="appreciation_401" type="text" name="fname"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input" id="cashflow_401" type="text"  name="fname"></div></td>
                </tr>
                <tr>
                <th>LEVERAGE</th>
                <th>TAXES</th>
                </tr>
                <tr>    
                <td><div class="field_wrapper_inputs"><input class="field_input"id="leverage_401" type="text" name="fname"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="taxes_402" type="text" name="fname"></div></td>
                </tr>
                    </table>
                    </div>     
            </div>
        </div>
        <div  style="padding: 20px;"></div>
        
        <!-- step3.2 -->
        <div class="section_container3 ">
                 <div class="section_container_top_area">
                 <label >[ E . G . BROKERAGE ACCOUNT ]</label>
                </div>
                 <div class="section_container_top_area">
                 <input style="border-radius: 34px;text-align: center" class="field_input" id="company_150lac" type="text" name="company_150lac">
                <label>ENTER THE ASSET VALUE OR EQUITY</label>
                </div>
                  <div class="section_container3_1">
                     <div class="colum_1" >
                     <table style="width: 100%;">
                 <tr>
                 <th colspan="2">CORE FOR RANKINGS</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>RETURN</th>
                 <th>RISK</th>
                 </tr>
                 <tr>    
                <td><div class="field_wrapper_inputs"><input class="field_input" id="return_brokerage" type="text" name="return_brokerage"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="risk_brokerage" type="text" name="risk_brokerage"></div></td>
                 </tr>
                 <tr>
                 <th>CONTROL</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                    <td><div class="field_wrapper_inputs"><input class="field_input" id="control_brokerage" type="text" name="control_brokerage"></div></td>
                    <td><div class="field_wrapper_inputs"><input class="field_input" id="taxes_brokerage" type="text"  name="taxes_brokerage"></div></td>
                 </tr>
                         </table>
                            
                     </div>
                         <div class="colum_2">
                         <table style="width: 100%;">
                 <tr>
                 <th colspan="2">4 PILLARS RANKING</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>APPRECIATION</th>
                 <th>CASHFLOW</th>
                 </tr>
                 <tr>    
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="appreciation_brokerage" type="text" name="appreciation_brokerage"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input" id="cashflow_brokerage" type="text"  name="cashflow_brokerage"></div></td>
                 </tr>
                 <tr>
                 <th>LEVERAGE</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="leverage_brokerage" type="text" name="leverage_brokerage"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input" id="taxes_broker" type="text"  name="taxes_broker"></div></td>
                 </tr>
                         </table>
                         </div>     
             </div>
             
         </div> 
         <div  style="padding: 20px;"></div>
         <!-- STEP:3.3 -->
         <div class="section_container3">
         <div class="section_container_top_area">
                 <label id="e.g.ira">[ E . G . IRA ]</label>
                </div>
            <div class="section_container_top_area">
                 <input style="border-radius: 34px;text-align: center" class="field_input" id="g_ira" type="text" name="g_ira">
                <label>ENTER THE ASSET VALUE OR EQUITY</label>
                </div>
                  <div class="section_container3_1">
                     <div class="colum_1" >
                     <table style="width: 100%;">
                 <tr>
                 <th colspan="2">CORE FOR RANKINGS</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>RETURN</th>
                 <th>RISK</th>
                 </tr>
                 <tr>    
                <td ><div class="field_wrapper_inputs"><input class="field_input" id="return_g_ira" type="text" name="return_g_ira"></div></td>
                <td ><div class="field_wrapper_inputs"><input class="field_input"  id="risk_g_ira" type="text" name="risk_g_ira"></div></td>
                 </tr>
                 <tr>
                 <th>CONTROL</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="control_g_ira" type="text" name="control_g_ira"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="taxes_g_ira" type="text" name="taxes_g_ira"></div></td>
                 </tr>
                         </table>
                            
                     </div>
                         <div class="colum_2">
                         <table style="width: 100%;">
                 <tr>
                 <th colspan="2">4 PILLARS RANKING</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>APPRECIATION</th>
                 <th>CASHFLOW</th>
                 </tr>
                 <tr>
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="appreciation_g_ira" type="text" name="appreciation_g_ira"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="cashflow_g_ira" type="text" name="cashflow_g_ira"></div></td>
                 </tr>
                 <tr>
                 <th>LEVERAGE</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="leverage_g_ira" type="text" name="leverage_g_ira"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="taxes_IRA" type="text" name="taxes_IRA"></div></td>
                 </tr>
                         </table>
                         </div>     
             </div>
         </div>
         <div  style="padding: 20px;"></div>
        <!-- STEP3.4 -->
        <div class="section_container3">
        <div class="section_container_top_area">
                <label id="private_investment">[ E.G.PRIVATE INVESTMENT ]</label>
                </div>
                <div class="section_container_top_area">
                 <input style="border-radius: 34px;text-align: center" class="field_input" id="private_investment_0" type="text">
                <label>ENTER THE ASSET VALUE OR EQUITY</label>
                </div>

                <div class="section_container3_1">
                     <div class="colum_1" >
                     <table style="width: 100%;">
                 <tr>
                 <th colspan="2">CORE FOR RANKINGS</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>RETURN</th>
                 <th>RISK</th>
                 </tr>
                 <tr>
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="return_private_investment" type="text" name="return_private_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="risk_private_investment" type="text" name="risk_private_investment"></div></td>    
                 </tr>
                 <tr>
                 <th>CONTROL</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="control_private_investment" type="text" name="control_private_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="taxes_investments" type="text" name="taxes_investments"></div></td> 
                 </tr>
                         </table>
                            
                     </div>
                         <div class="colum_2">
                         <table style="width: 100%;">
                 <tr>
                 <th colspan="2">4 PILLARS RANKING</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>APPRECIATION</th>
                 <th>CASHFLOW</th>
                 </tr>
                 <tr>    
                <td><div class="field_wrapper_inputs"><input class="field_input" id="appreciation_private_investment" type="text" name="appreciation_private_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="cashflow_private_investment" type="text" name="cashflow_private_investment"></div></td> 
                 </tr>
                 <tr>
                 <th>LEVERAGE</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                <td><div class="field_wrapper_inputs"><input class="field_input" id="leverage_private_investment" type="text" name="leverage_private_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="tax_private_investment" type="text" name="taxes_private_investment"></div></td> 
                 </tr>
                         </table>
                         </div>     
             </div>
         </div>
         <div  style="padding: 20px;"></div>
         <!-- STEP:3.5 -->
         <div class="section_container3">
         <div class="section_container_top_area">
                 <label id="e.g_retirement_investment">[ E.G.OTHER_RETIREMENT_INVESTMENT ]</label>
                </div>
                 <div class="section_container_top_area">       
                 <input style="border-radius: 34px;text-align: center" class="field_input" id="g_retirement_investment_0" type="text">
                <label>ENTER THE ASSET VALUE OR EQUITY</label>
                </div>
                  <div class="section_container3_1">
                     <div class="colum_1" >
                     <table style="width: 100%;">
                 <tr>
                 <th colspan="2">CORE FOR RANKINGS</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>RETURN</th>
                 <th>RISK</th>
                 </tr>
                 <tr>
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="return_retirement_investment" type="text" name="return_retirement_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="risk_retirement_investment" type="text" name="risk_retirement_investment"></div></td>         
                 </tr>
                 <tr>
                 <th>CONTROL</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="control_retirement_investment" type="text" name="control_retirement_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="taxes_retirement_investment" type="text" name="taxes_retirement_investment"></div></td>        
                 </tr>
                        </table>
                        </div>
                        <div class="colum_2">
                        <table style="width: 100%;">
                 <tr>
                 <th colspan="2">4 PILLARS RANKING</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>APPRECIATION</th>
                 <th>CASHFLOW</th>
                 </tr>
                 <tr>
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="appreciation_retirement_investment" type="text" name="appreciation_retirement_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="cashflow_retirement_investment" type="text" name="cashflow_retirement_investment"></div></td>                          
                 </tr>
                 <tr>
                 <th>LEVERAGE</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>
                 <td><div class="field_wrapper_inputs"><input class="field_input" id="leverage_retirement_investment" type="text" name="leverage_retirement_investment"></div></td>
                <td><div class="field_wrapper_inputs"><input class="field_input"  id="tax_g_retirement_investment" type="text" name="tax_g_retirement_investment"></div></td>         
                </tr>
                        </table>
                        </div>     
             </div>
         </div>
                <div  style="padding: 20px;"></div>
                 <!-- STEP:3.6 -->
         <div class="section_container3">
             
                 <h3 style="font-size:25px;color:white;">YOUR ASSESMENT RESULTS</h3>
                <div class="section_container_top_area">

                 <label id="total_retirement_asssets ">YOUR TOTAL RETIREMENT ASSETS:</label>

                <label><span id="total_assets" style="float: left;border: 2px solid #05A742; padding: 5px 10px;text-align: center;font-size: 30px;">-</span></br></label>
                </div>
                <div class="section_container3_1">
                    <div class="colum_1">
                    <table style="width: 100%;">
                     <tr>
                    <th colspan="2">CORE 4 SCORE</th>
                    </tr>
                    <tr>    
                    <td colspan="2">
                        <span id="core_4_value">-</span>
                    </td>
                    </tr> 
                    </table>  
                    </div>
                    <div class="colum_2">
                    <table style="width: 100%;">
                    <tr>
                    <th colspan="2">4 PILLARS SCORE</th>
                    </tr>
                    <tr>    
                    <td colspan="2"><span id="pillar_4_score">-</span></td></td>
                    </tr>
                    </table>  
                    </div>
                </div> 
                <div class="section_container3_1">
                     <div class="colum_1" >
                     <table style="width: 100%;">
                <tr>
                 <th colspan="2">CORE FOR RANKINGS</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>RETURN</th>
                 <th>RISK</th>
                 </tr>
                 <tr>    
                 <td>
                     <span id="core_ranking_return">-</span>
                    </td>
                 <td>
                     <span id="core_ranking_risk">-</span></td>
                 </tr>
                 <tr>
                 <th>CONTROL</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                 <td><span id="core_ranking_control">-</span></td>
                 <td><span id="core_ranking_taxes">-</span></td>
                 </tr>
                        </table>   
                     </div>
                <div class="colum_2">
                <table style="width: 100%;">      
                 <tr>
                 <th colspan="2">4 PILLARS RANKING</th>
                 </tr>
                 <tr>
                 <tr>
                 <th>APPRECIATION</th>
                 <th>CASHFLOW</th>
                 </tr>
                 <tr>    
                 <td><span id="pillar_ranking_appreciation">-</span></td>
                 <td><span id="pillar_ranking_cashflow">-</span></td>
                 </tr>
                 <tr>
                 <th>LEVERAGE</th>
                 <th>TAXES</th>
                 </tr>
                 <tr>    
                 <td>
                 <span id="pillar_ranking_leverage">-</span>
                 </td>
                 <td >
                 <span id="pillar_ranking_taxes">-</span>
                 </td>
                 </tr>
                         </table>
                         </div>     
             </div>
         </div>
         <div style="color:white;padding:20px;font-size:15px;margin: 0 auto;padding-right: 0.75em;padding-left: 0.75em;width: 100%;max-width: 86%;">
         <h3 style="color:white;">HOW TO SCORE CORE 4:</h3>
         <p>RETURN-OVER A 10 YEAR PERIOD OF TIME,DOES THE ASSETS CLASS HAVE THE ABILITY TO PRODUCE THE YOUR REQUIRED RATEOF RETURN TO BE FINANCIALLY FREE?IFIF YES, RANKS 1,IF NO,RANK IS 0.</p>
         <p>RISK IS NOT UNIQUE TO THE INVESTMENT[STOCKS, BONDS, REAL, ESTATE] BUT IT IS LINKED TO HOW YOU PARTICIPATE IN THAT INVESTMENT[THE NUMBER OF PILLARS YOU HAVE]. IF YOU HAVE 4 PILLARS, RANK IS </br> 1.IF YOU HAVE 1 PILLAR,RANK IS 0.IF YOU HAVE 2 OR 3 PILLARS THE RANK IS BETWEEN.25 AND .75 BASED ON YOUR PRIOR RESULTS.</p>
         <p>CONTROL- THIS IS A RANK OF HOW MUCH YOU CAN INFLUENCE THE OUTCOME OF THE INVESTMENT.LIKE RISK, CONTROL IS LINKED TO THE 4 PILLARS. THE MORE PILLARS, THE MORE YOU CAN AFFECT THE OUTCOME.IF YOU HAVE 4 PILLARS, RANK IS 1. IF YOU HAVE 1 PILLAR,RANK IS 0IF YOU HAVE 2 OR 3 PILLARS THE RANK IS BETWEEN.25 AND .75 BASED ON YOUR PRIOR RESULTS.</p>
        <p>TAXES-IF YOU PAY ORDINARY INCOME RATES WITH NO OFFSETTING EXPENSES OR TAX TREATMENT,RANK IS A 0.IF YOU CAN STRUCTURE THE INVESTMENT TO PAY ZERO TAXES AND STILL HAVE POSITIVE CASH FLOW,THEN THE RANK IS 1. CAPITAL GAINS OR SOME TAX TREATMENT THAT CAN PARTIALLY OFFSET INCOME, RNK IS .5</p>        
        <h3 style="color: white;font-size:25px;">HOW TO SCORE 4 PILLARS:</h3>
        <p>APPRECIATION-IF THE ASSETS GOES UP IN VALUE AND YOU KEEP ALL OF THAT INCREASE,RANK IS A 1.IF YOU DO NOT KEEP ANY FUTURE INCREASES, RANK IS A 0.IF YOU KEEP SOME, RANK IS BASED ON THE PERCENTAGE OF THE INCREASE YOU KEEP.</p>
        <p>CASHFLOW- IF THE ASSET PUTS CASH IN YOUR POCKET WITHOUT EFFECTING THE FUTURE VALUE OF THE ASSETS OR HAVING TO SELL YOUR SOME OR ALL OF THE ASSET TO GET CASH,RANK IS A 1. IF YOU HAVE TO SELL IN ORDER TO GET CASH, BANK IS A 0.</p>
        <p>LEVERAGE-CAN YOU USE OTHER PEOPLES MONEY TO CONTROL THE OTHER THREE PILLARS?IF YES, RANK IS 1, IF NO,RANK IS 0.</p>
        <p>TAXES-IF YOU PAY ORDINARY INCOME RATES WITH NO OFFSETTING EXPENSES OR TAX TREATMENT,RANK IS A 0.IF YOU CAN STRUCTURE THE INVESTMENT TO PAY ZERO TAXES AND IS STILL HAVE POSITIVE CASH FLOW,THEN THE RANK IS 1.CAPITAL GAINS OR SOME TAX TREATMENT,RANK IS A 0.IF YOU CAN STRUCTURE THE INVESTMENT TO PAY ZERO TAXES AND STILL HAVE POSITIVE CASHFLOW,THEN THE RANK IS 1.CAPITAL GAINS OR SOME TAX TREATMENT THAT CAN PARTIALLY OFFSET INCOME,RANK IS .5</p>
         </div>
         <div class="disclaimer">
                <p><strong>***DISCLAIMER:</strong>THIS FORM IS AN EDUCATIONAL TOOL OFFERED BY CASHFLOW TACTICS,LLC.CASHFLOW TACTICS,LLC IS NOT SELLING INVESTMENTS,INSURANCE,REAL ESTATE, SECURITIES,OR ANYTHING OTHER THAN EDUCATION AND IS NOT PROVIDING TAX ADVICE,LEGAL ADVICE OR INVESTMENS ADVISORY PRODUCTS.AS YOU CONSIDER APPLYING THE EDUCATIONAL PRINCIPALS YOU SEE HERE,YOU SHOULD UNDERSTAND THAT THERE IS RISK IN ANY INVESTMENT AND WE CANNOT GUARANTEE ANY PARTICULAR RESULTS OR SUCCESS AVERAGE ANNUAL RATE OF RETURN OF 5.29% IS BASED ON THIS INDEPENDENT RESEARCH STUDY OF THE AVERAGE EQUITY INVESTER(SEE PAGE 6) **REQUIRED RETIREMENT ASSETS IS BASED ON THE 4% RULE(OR 25X RULE)</p>
            </div> 
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" id="btn_step_3_previous" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a href="#" id="step__3_1">1</a></li>
                <li class="page-item"><a href="#" id="step__3_2">2</a></li>
                <li class="page-item">
                <a class="page-link" href="#" id="btn_step_3_next">Next</a>
                </li>
            </ul>
            </nav>
        
            </div>
        
                
        <!-- STEP...4 -->
        <div  id="step_4" class="container_fluid hidden">
        <div class="section_container4">
                <h3 style="text-align:center;color: white;font-size:40px;">STEP 4: YOUR ROADMAP TO FINANCIAL FEEDOM IN 10 YEARS OR LESS</h3>
                <p style="color: white; text-align:center;font-size:25px;">HOW THE  VAULT AND AUTOPILOT ASSETS CAN COMBINE TO CREATE COMPOUNDING CASHFLOW AND COLLAPSE TIME TO CREATE FINANCIAL FREEDOM IN 10 YEARS OR LESS</p>
                <h3 style="color: white;font-size:25px;text-align:center;">LET'S BUILD YOUR ROADMAP TO FINANCIAL FREEDOM</h3>
                <div class="strategies_results">
                    <div class="text">YOUR MONTHLY "STRIKE" NUMBER</div><div id="results_step_2" class="figures"><span id="final_monthly_strike" style="float: left;border: 2px solid #FFFF00;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                </div>
                <div class="strategies_results">
                    <div class="text">[DO NOT EDIT] COMPOUND CASHFLOW PER AUTOPILOT ASSETS</div><div id="results_step_2" class="figures"><span id="cashflow_pilot" style="float: left;width: 140px;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">500</span></div>
                    <div class="clear"></div>
                </div>
                <div class="strategies_results">
                    <div class="text">YOUR RESULT: REQUIRED AUTOPILOT ASSETS</div><div id="results_step_2" class="figures"><span id="compound_cashflow_assets" style="float: left;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                </div>
                <div class="strategies_results">
                    <div class="text">HOW MUCH YOU SAVE EACH YEAR FOR RETIREMENT</div><div id="results_step_2" class="figures"><span id="assets_saving_retirements" style="float: left;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 30px;">-</span></div>
                    <div class="clear"></div>
                </div>
                <div class="fields_continer">
                    <div class="field_label">
                        <label for="annual_income">STEP 5:ENTER ASEETS YOU CAN DEPLOY TO ALIGN WITH CORE 4 AND 4 PILLARS</label>
                    </div>
                    <div class="field_wrapper">
                        <input type="text" name="deploy_assets_core" id="deploy_assets_core" class="field_input" placeholder="ENTER ASEETS YOU CAN DEPLOY TO ALIGN WITH CORE 4 AND 4 PILLARS"/>
                        <div class="error hidden">Please input only numbers. e.g. $18,100 would become 18100</div>
                    </div>
                </div>
                <!-- bottom of section4 -->
                <div class="section_bottom">
                    <div class="section_bottom1" >
                            <h3 style="color:white;text-align: center;font-size:25px;">YOUR RESULT:</h3>
                            <h3 style="color:white; text-align:center;font-size:25px;">YEARS UNTIL YOU COULD BE FINANCIALLY FREE</h3>
                            <div class="strategies_results">
                            <div class="text"></div><div id="results_step_4" class="figures"><span id="bottom_years_financial_free" style="float: left;width: 128px;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 18px;">-</span></div>
                            <div class="clear"></div>
                        </div>  
                    </div>
                        <div class="section_bottom2">
                        <h3 style="color:white; text-align: center;font-size:25px;">YOUR RESULT:</h3>
                            <h3 style="color:white; text-align: center;font-size:25px;">AGE YOU COULD BE FINANCIALLY FREE</h3>
                            <div class="strategies_results">
                            <div class="text"></div><div id="results_step_4" class="figures"><span id="bottom_age_financial_free" style="float: left;width: 128px;border: 2px solid #17A742;padding: 5px 10px;text-align: center;font-size: 18px;">-</span></div>
                            <div class="clear"></div>
                        </div>
                        </div>
                    </div>
            
            </div>
            <hr style="clear: both; visibility: hidden;" >
            <div class="disclaimer">
                <p><strong>***DISCLAIMER:</strong>THIS FORM IS AN EDUCATIONAL TOOL OFFERED BY CASHFLOW TACTICS,LLC.CASHFLOW TACTICS,LLC IS NOT SELLING INVESTMENTS,INSURANCE,REAL ESTATE, SECURITIES,OR ANYTHING OTHER THAN EDUCATION AND IS NOT PROVIDING TAX ADVICE,LEGAL ADVICE OR INVESTMENS ADVISORY PRODUCTS.AS YOU CONSIDER APPLYING THE EDUCATIONAL PRINCIPALS YOU SEE HERE,YOU SHOULD UNDERSTAND THAT THERE IS RISK IN ANY INVESTMENT AND WE CANNOT GUARANTEE ANY PARTICULAR RESULTS OR SUCCESS AVERAGE ANNUAL RATE OF RETURN OF 5.29% IS BASED ON THIS INDEPENDENT RESEARCH STUDY OF THE AVERAGE EQUITY INVESTER(SEE PAGE 6) **REQUIRED RETIREMENT ASSETS IS BASED ON THE 4% RULE(OR 25X RULE)</p>
            </div> 
            <!-- <div style="width:100%;display: inline-block;padding: 10px;font-size: 15px;border: 3px solid white;">
            <button id="btn_step_4_previous" style="float: right;font-size: 21px;padding:10px;border: 2px solid green;width: 150px;height:60px;">PREVIOUS</button>
            </div> -->
            <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" id="btn_step_4_previous" tabindex="-1">PREVIOUS</a>
                </li>
            </ul>
            </nav>
        </div>
        <div class="clear"></div>
        <?php
        return ob_get_clean();
    }

}

// Instantiate our class
$custom_features = new Cashflow();
