import React from 'react'
import { Row, Col, Button, Card, Tabs, Tab, Table } from 'react-bootstrap';
import gain from '../../../../assets/Goals/weightGain.png'

export default function Gain() {
    return (
        <div>
            <div>
                <div className="Main ">
                    <div className="weightLossContents col-lg-8">
                        <h2>Introduction to Weight Gain Goals
                            <img
                                alt=""
                                src={gain}
                                width="35"
                                height="35"
                                className="d-inline-block align-top ms-3"
                            />{' '}
                        </h2>

                        <p>Gaining weight in a healthy way is a goal for many individuals. This page is designed to provide you with information, tips, and resources to help you achieve your weight gain goals safely and effectively.</p>

                        <div className="scheduleGoals mb-4">
                            <Tabs
                                defaultActiveKey="day1"
                                id="uncontrolled-tab-example"
                                className="mb-7"
                            >
                                <Tab eventKey="day1" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 1</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 1</th>
                                                <th>8:00 - 8:30 AM<br></br>Break fast</th>
                                                <th>11:00 - 11:30 AM <br></br>Mid Meal</th>
                                                <th>2:00 - 2:30 PM <br></br> Lunch</th>
                                                <th>4:00 - 4:30 PM <br></br> Evening</th>
                                                <th>8:00 - 8:30 PM <br></br> Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts</td>
                                                <td>1 cup banana shake</td>
                                                <td>1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad</td>
                                                <td>1 cup strawberry smoothie + 1 cup vegetable poha</td>
                                                <td>1.5 cup chicken curry + 3 chapatti + salad</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day2" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 2</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 2</th>
                                                <th>8:00 - 8:30 AM<br></br>Break fast</th>
                                                <th>11:00 - 11:30 AM <br></br>Mid Meal</th>
                                                <th>2:00 - 2:30 PM <br></br> Lunch</th>
                                                <th>4:00 - 4:30 PM <br></br> Evening</th>
                                                <th>8:00 - 8:30 PM <br></br> Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>3 onion stuffed parantha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts</td>
                                                <td>1 cup mango shake</td>
                                                <td>1 cup moong dal/ chicken curry + 1 cup potato and caulifllower vegetable + 3 chapatti + 1/2 cup rice + salad</td>
                                                <td>1 cup pomegranate juice + 2 butter toasted bread</td>
                                                <td>1 cup beans potato vegetable + 3 chapatti + salad</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day3" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 3</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 3</th>
                                                <th>8:00 - 8:30 AM<br></br>Break fast</th>
                                                <th>11:00 - 11:30 AM <br></br>Mid Meal</th>
                                                <th>2:00 - 2:30 PM <br></br> Lunch</th>
                                                <th>4:00 - 4:30 PM <br></br> Evening</th>
                                                <th>8:00 - 8:30 PM <br></br> Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>3 paneer stuffed besan cheela + green chutney + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts</td>
                                                <td>1 apple smoothie with maple syrup</td>
                                                <td>1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad</td>
                                                <td>1 cup tomato soup with bread crumbs + 1 cup aloo chaat</td>
                                                <td>1 cup carrot peas vegetable +3 chapatti + salad</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day4" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 4</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 4</th>
                                                <th>8:00 - 8:30 AM<br></br>Break fast</th>
                                                <th>11:00 - 11:30 AM <br></br>Mid Meal</th>
                                                <th>2:00 - 2:30 PM <br></br> Lunch</th>
                                                <th>4:00 - 4:30 PM <br></br> Evening</th>
                                                <th>8:00 - 8:30 PM <br></br> Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>1.5 cup vegetable bread upma + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts</td>
                                                <td>1 cup ripe banana with 2 tsp ghee</td>
                                                <td>1 cup rajma curry + 1 cup spinach potato + 3 chapatti + 1/2 cup rice + salad</td>
                                                <td>1 cup vegetable juice + 1 cup upma</td>
                                                <td>1.5 cup parwal vegetable + 3 chapatti + salad</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day5" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 5</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 5</th>
                                                <th>8:00 - 8:30 AM<br></br>Break fast</th>
                                                <th>11:00 - 11:30 AM <br></br>Mid Meal</th>
                                                <th>2:00 - 2:30 PM <br></br> Lunch</th>
                                                <th>4:00 - 4:30 PM <br></br> Evening</th>
                                                <th>8:00 - 8:30 PM <br></br> Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>2 cucmber potato sandwich + 1 tsp green chutney + 1 orange juice + 3 cshews + 2 walnuts + 4 almonds</td>
                                                <td>1 cup buttermilk + 1 cup sweet potato chaat </td>
                                                <td>1 cup white chana/ fish curry + 3 chapatti + 1/2 cup rice + salad</td>
                                                <td>1 cup almond milk + banana </td>
                                                <td>1 cup cauliflower potato vegetable + 3 chapatti + salad</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day6" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 6</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 6</th>
                                                <th>8:00 - 8:30 AM<br></br>Break fast</th>
                                                <th>11:00 - 11:30 AM <br></br>Mid Meal</th>
                                                <th>2:00 - 2:30 PM <br></br> Lunch</th>
                                                <th>4:00 - 4:30 PM <br></br> Evening</th>
                                                <th>8:00 - 8:30 PM <br></br> Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>2 cup vegetable poha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts</td>
                                                <td>2 cups watermelon juice </td>
                                                <td>1 cup chana dal + 1 cup bhindi vegetable + 3 chapatti + 1/2 cup rice + salad</td>
                                                <td>1 cup sprouts salad + 2 potato cheela + green chutney</td>
                                                <td>1 cup peas mushroom vegetable + 3 chapatti + salad</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day7" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 7</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 7</th>
                                                <th>8:00 - 8:30 AM<br></br>Break fast</th>
                                                <th>11:00 - 11:30 AM <br></br>Mid Meal</th>
                                                <th>2:00 - 2:30 PM <br></br> Lunch</th>
                                                <th>4:00 - 4:30 PM <br></br> Evening</th>
                                                <th>8:00 - 8:30 PM <br></br> Dinner</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>3 vegetable suji cheela + 1 cup strawberry shake + 4 cashews + 4 almonds + 3 walnuts</td>
                                                <td>1 cup coconut water + 1 cup pomegrate </td>
                                                <td>1 cup mix dal + 1 cup soybean curry + 3 chapatti + 1/2 cup curd + salad</td>
                                                <td>1 cup fruit salad + 4 pc vegetable cutlets + green chutney</td>
                                                <td>1 cup karela vegetable + 3 chaptti + salad</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>

                            </Tabs>
                        </div>

                        <h2>Here some tips</h2>
                        <div className="tablesNutrition mt-4 mb-5">
                            <Tabs
                                defaultActiveKey="goals"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="goals" className='contentsWLoss' title={<span style={{ color: 'blue' }}>Setting Realistic Goals</span>}>
                                    <h4>Setting realistic weight gain goals is essential for a successful
                                        journey. It's important to focus on gaining muscle mass rather than
                                        unhealthy fat.</h4>
                                    <h4>Key Points:</h4>
                                    <ul>
                                        <li>✨️Set achievable weight loss goals over time.</li>
                                        <li>✨️Focus on a balanced diet and regular exercise.</li>
                                        <li>✨️Consult with a healthcare professional for personalized advice.</li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="diet" className='contentsWLoss' title={<span style={{ color: 'blue' }}>Healthy Diet Choices</span>}>
                                    <h4>A balanced and nutritious diet is essential for successful weight loss. Here are some dietary principles to consider:</h4>
                                    <h4>Key Principles:</h4>
                                    <ul>
                                        <li>✨️Consume an adequate amount of calories to create a surplus.</li>
                                        <li>✨️Include a variety of nutrient-dense foods.</li>
                                        <li>✨️Emphasize protein-rich foods for muscle building.</li>
                                        <li>✨️Choose healthy fats and complex carbohydrates.</li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="portions" className='contentsWLoss' title={<span style={{ color: 'blue' }}>Frequent Meals and Snacks</span>}>
                                    <h4>To support weight gain, consider eating more frequent meals and
                                        snacks throughout the day.</h4>
                                    <ul>
                                        <li>✨️Include healthy snacks between meals to increase calorie intake.</li>
                                        <li>✨️Choose nutrient-rich snacks like nuts, yogurt, and fruits.</li>
                                        <li>✨️Avoid eating in front of screens, which can lead to mindless eating.</li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="strength" className='contentsWLoss' title={<span style={{ color: 'blue' }}>Strength Training</span>}>
                                    <h4>Incorporating strength training exercises into your routine is
                                        essential for building muscle mass during your weight gain journey.</h4>
                                    <ul>
                                        <li>✨️Focus on compound exercises like squats, deadlifts, and bench presses.</li>
                                        <li>✨️Work with a fitness trainer to develop a customized workout plan.</li>
                                    </ul>
                                </Tab>
                            </Tabs>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
