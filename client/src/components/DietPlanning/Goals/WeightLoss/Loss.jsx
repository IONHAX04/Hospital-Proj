import React from 'react'
import { Row, Col, Button, Card, Tabs, Tab, Table } from 'react-bootstrap';

import './Loss.css'
import loss from '../../../../assets/Goals/weightLoss.png'

export default function Loss() {
    return (
        <div>
            <div>

                <div className="Main ">
                    <div className="weightLossContents col-lg-8">
                        <h2>Introduction to Weight Loss Goals
                            <img
                                alt=""
                                src={loss}
                                width="35"
                                height="35"
                                className="d-inline-block align-top ms-3"
                            />{' '}
                        </h2>

                        <p>Losing weight is a journey that requires commitment and a well-thought-out plan. Here, we provide you with valuable information and guidance to help you achieve your weight loss goals in a healthy and sustainable way.</p>

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
                                                <th>6:30 AM</th>
                                                <th>8:00 AM</th>
                                                <th>12:00 PM</th>
                                                <th>2:00 PM</th>
                                                <th>2:10 PM</th>
                                                <th>4:00 PM</th>
                                                <th>5:30 PM</th>
                                                <th>8:50 PM</th>
                                                <th>9:00 PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>Cucumber Detox Water 1 glass</td>
                                                <td>Oats Porridge in Skimmed Milk (1 bowl) <br></br>Mixed Nuts (25 grams)</td>
                                                <td>Skimmed Milk Paneer (100 grams)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Dal(1 katori) Gajar Matar Sabzi (1 katori) Roti (1 roti/chapati)</td>
                                                <td>Cut Fruits (1 cup) Buttermilk (1 glass)</td>
                                                <td>Tea with Less Sugar and Milk (1 teacup)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Dal (1 katori) Lauki Sabzi (1 katori) Roti (1 roti/chapati)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day2" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 2</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 2</th>
                                                <th>6:30 AM</th>
                                                <th>8:00 AM</th>
                                                <th>12:00 PM</th>
                                                <th>2:00 PM</th>
                                                <th>2:10 PM</th>
                                                <th>4:00 PM</th>
                                                <th>5:30 PM</th>
                                                <th>8:50 PM</th>
                                                <th>9:00 PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>Cucumber Detox Water (1 glass)</td>
                                                <td>Curd (1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)</td>
                                                <td>Skimmed Milk Paneer (100 grams)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)</td>
                                                <td>Apple (0.5 small (2-3/4″ dia)) Buttermilk (1 glass)</td>
                                                <td>Coffee with Milk and Less Sugar (0.5 tea cup)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati) Green Chutney (2 tablespoon)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day3" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 3</span>}>

                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 3</th>
                                                <th>6:30 AM</th>
                                                <th>8:00 AM</th>
                                                <th>12:00 PM</th>
                                                <th>2:00 PM</th>
                                                <th>2:10 PM</th>
                                                <th>4:00 PM</th>
                                                <th>5:30 PM</th>
                                                <th>8:50 PM</th>
                                                <th>9:00 PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>Cucumber Detox Water (1 glass)</td>
                                                <td>Skim Milk Yoghurt (1 cup (8 fl oz)) Multigrain Toast (2 toast)</td>
                                                <td>	Skimmed Milk Paneer (100 grams)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati) Green Chutney (2 tablespoon)</td>
                                                <td>Banana (0.5 small (6″ to 6-7/8″ long)) Buttermilk (1 glass)</td>
                                                <td>Tea with Less Sugar and Milk (1 teacup)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day4" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 4</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 4</th>
                                                <th>6:30 AM</th>
                                                <th>8:00 AM</th>
                                                <th>12:00 PM</th>
                                                <th>2:00 PM</th>
                                                <th>2:10 PM</th>
                                                <th>4:00 PM</th>
                                                <th>5:30 PM</th>
                                                <th>8:50 PM</th>
                                                <th>9:00 PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>Cucumber Detox Water (1 glass)</td>
                                                <td>Fruit and Nuts Yogurt Smoothie (0.75 glass) Egg Omelette (1 serve(one egg))</td>
                                                <td>Skimmed Milk Paneer (100 grams)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Green Gram Whole Dal Cooked (1 katori) Bhindi sabzi (1 katori) Roti (1 roti/chapati)</td>
                                                <td>Orange (1 fruit (2-5/8″ dia)) Buttermilk (1 glass)</td>
                                                <td>Coffee with Milk and Less Sugar (0.5 teacup)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Palak Chole (1 bowl) Steamed Rice (0.5 katori)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day5" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 5</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 5</th>
                                                <th>6:30 AM</th>
                                                <th>8:00 AM</th>
                                                <th>12:00 PM</th>
                                                <th>2:00 PM</th>
                                                <th>2:10 PM</th>
                                                <th>4:00 PM</th>
                                                <th>5:30 PM</th>
                                                <th>8:50 PM</th>
                                                <th>9:00 PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>Cucumber Detox Water (1 glass)</td>
                                                <td>Skimmed Milk (1 glass) Peas Poha (1.5 katori)</td>
                                                <td>Skimmed Milk Paneer (100 grams)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Low Fat Paneer Curry (1.5 katori) Missi Roti (1 roti)</td>
                                                <td>Papaya (1 cup 1″ pieces) Buttermilk (1 glass)</td>
                                                <td>Tea with Less Sugar and Milk (1 teacup)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Curd (1.5 katori) Aloo Baingan Tamatar Ki Sabzi (1 katori) Roti (1 roti/chapati)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day6" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 6</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 6</th>
                                                <th>6:30 AM</th>
                                                <th>8:00 AM</th>
                                                <th>12:00 PM</th>
                                                <th>2:00 PM</th>
                                                <th>2:10 PM</th>
                                                <th>4:00 PM</th>
                                                <th>5:30 PM</th>
                                                <th>8:50 PM</th>
                                                <th>9:00 PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>Cucumber Detox Water (1 glass)</td>
                                                <td>Mixed Sambar (1 bowl) Idli (2 idli)</td>
                                                <td>Skimmed Milk Paneer (100 grams)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Curd (1.5 katori) Aloo Baingan Tamatar Ki Sabzi (1 katori) Roti (1 roti/chapati)</td>
                                                <td>Cut Fruits (1 cup) Buttermilk (1 glass)</td>
                                                <td>Coffee with Milk and Less Sugar (0.5 tea cup)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Green Gram Whole Dal Cooked (1 katori)Bhindi sabzi (1 katori) Roti (1 roti/chapati)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="day7" className='contentsWLoss' title={<span style={{ color: 'green' }}>Day - 7</span>}>
                                    <Table responsive className='goalsTable'>
                                        <thead>
                                            <tr>
                                                <th>Day 6</th>
                                                <th>6:30 AM</th>
                                                <th>8:00 AM</th>
                                                <th>12:00 PM</th>
                                                <th>2:00 PM</th>
                                                <th>2:10 PM</th>
                                                <th>4:00 PM</th>
                                                <th>5:30 PM</th>
                                                <th>8:50 PM</th>
                                                <th>9:00 PM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Diet Chart</th>
                                                <td>Cucumber Detox Water (1 glass)</td>
                                                <td>Besan Chilla (2 cheela) Green Garlic Chutney (3 tablespoon)</td>
                                                <td>Skimmed Milk Paneer (100 grams)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Palak Chole (1 bowl) Steamed Rice (0.5 katori)</td>
                                                <td>Apple(0.5 small (2-3/4″ dia)) Buttermilk (1 glass)</td>
                                                <td>Tea with Less Sugar and Milk (1 teacup)</td>
                                                <td>Mixed Vegetable Salad (1 katori)</td>
                                                <td>Low Fat Paneer Curry (1 katori) Missi Roti (1 roti)</td>
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
                                    <h4>One of the first steps in your weight loss journey is setting
                                        realistic goals. Remember that healthy weight loss is gradual and
                                        sustainable. It's important to focus on overall health rather than
                                        quick fixes.</h4>
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
                                        <li>✨️Eat a variety of fruits and vegetables.</li>
                                        <li>✨️Choose lean proteins like poultry, fish, and tofu.</li>
                                        <li>✨️Opt for whole grains over refined grains.</li>
                                        <li>✨️Limit sugar, processed foods, and unhealthy fats.</li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="portions" className='contentsWLoss' title={<span style={{ color: 'blue' }}>Low Protein</span>}>
                                    <h4>Understanding portion sizes is crucial to prevent overeating. Here's
                                        how you can control your portions:</h4>
                                    <ul>
                                        <li>✨️Use smaller plates and bowls to manage portions.</li>
                                        <li>✨️Listen to your body's hunger and fullness cues.</li>
                                        <li>✨️Avoid eating in front of screens, which can lead to mindless eating.</li>
                                    </ul>
                                </Tab>
                            </Tabs>
                        </div>


                    </div>

                    <div className="weightLossContentsBoth col-lg-8">
                        <h2>Balanced Diet Plans for Weight Loss - Men and Women</h2>
                        <h4>While creating a diet chart, it is important to make sure, that the food you eat is balanced and also you receive all the required nutrients for your body. Thus, make sure that you include the following nutrients in your diet plan.</h4>
                        <h3>1. Carbohydrates</h3>
                        <p>Carbs are the body’s main source of energy and should make up half of your daily calorie requirement. However, it’s important to choose the right type of carbs. For example, simple carbs, such as bread, biscuit, white rice, and wheat flour, contain too much sugar and are bad for you. Instead, opt for complex carbs that are high in fibre and packed with nutrients. </p>

                        <h3>2. Proteins</h3>
                        <p>Most Indians fail to meet their daily protein requirement. This is troublesome, as proteins are essential to help the body build and repair tissue, muscles, cartilage, and skin and better blood flow. A high protein diet can also help you lose weight and helps build uscle – which burns more calories than fat.</p>

                        <h3>3. Fats</h3>
                        <p>Fats, the notorious food group, is necessary for the body because they help produce hormones, absorb vitamins, and provide energy. Experts suggest one-fifth or 20% of your diet must consist of healthy fats – polyunsaturated, monounsaturated, and Omega-3 fatty acids. It has also been proven by research that having a healthy approach to your fat diet plan will be beneficial. </p>

                        <h3>4. Vitamins and Minerals</h3>
                        <p>Vitamin A, Vitamin E, Vitamin B12, Vitamin D, calcium and iron are essential for the body as they support metabolism, nerve and muscle function, bone maintenance, and cell production.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}