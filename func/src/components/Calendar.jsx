import React from 'react'
import moment from 'moment'
import Moment from 'react-moment';


export const Calendar = () => {
    return (
        <div>
            <div class="ui-datepicker">
                <div class="ui-datepicker-material-header">
                    <div class="ui-datepicker-material-day">Вторник</div>
                    <div class="ui-datepicker-material-date">
                        <div class="ui-datepicker-material-day-num">13</div>
                        <div class="ui-datepicker-material-month">Июня</div>
                        <div class="ui-datepicker-material-year"></div>
                    </div>
                </div>
                <div class="ui-datepicker-header">
                    <div class="ui-datepicker-title">
                        <span class="ui-datepicker-month">Июнь</span>&nbsp;<span class="ui-datepicker-year">2023</span>
                    </div>
                </div>
                <table class="ui-datepicker-calendar">
                    <colgroup>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col class="ui-datepicker-week-end"></col>
                        <col class="ui-datepicker-week-end"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" title="Понедельник">Пн</th>
                            <th scope="col" title="Вторник">Вт</th>
                            <th scope="col" title="Среда">Ср</th>
                            <th scope="col" title="Четверг">Чт</th>
                            <th scope="col" title="Пятница">Пт</th>
                            <th scope="col" title="Суббота">Сб</th>
                            <th scope="col" title="Воскресенье">Вс</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="ui-datepicker-other-month">29</td>
                            <td class="ui-datepicker-other-month">30</td>
                            <td class="ui-datepicker-other-month">31</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>8</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td class="ui-datepicker-today">13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td class="ui-datepicker-other-month">1</td>
                            <td class="ui-datepicker-other-month">2</td>
                        </tr>
                        {/* остальные недели */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
