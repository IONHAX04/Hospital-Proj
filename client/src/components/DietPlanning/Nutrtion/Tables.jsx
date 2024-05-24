import React from 'react'

import { Table, Tab, Tabs } from 'react-bootstrap'

export default function Tables() {
  const highProteinData = [
    {
      "id": 1,
      "name": "Chicken",
      "icon": "🍗",
      "calories": 1.84,
      "carbohydrate": 0,
      "protein": 0.2403,
      "totalFat": 0.0899,
      "cholesterol": 1.27
    },
    {
      "id": 2,
      "name": "Beef",
      "icon": "🍖",
      "calories": 2.17,
      "carbohydrate": 0,
      "protein": 0.2748,
      "totalFat": 0.1105,
      "cholesterol": 0.81
    },
    {
      "id": 3,
      "name": "Bacon",
      "icon": "🥓",
      "calories": 8.98,
      "carbohydrate": 0,
      "protein": 0.0007,
      "totalFat": 0.995,
      "cholesterol": 0.97
    },
    {
      "id": 4,
      "name": "Hamburger",
      "icon": "🍔",
      "calories": 2.54,
      "carbohydrate": 0.2481,
      "protein": 0.1174,
      "totalFat": 0.1225,
      "cholesterol": 0.24
    },
    {
      "id": 5,
      "name": "Fried Shrimp",
      "icon": "🍤",
      "calories": 3.08,
      "carbohydrate": 0,
      "protein": 0.0007,
      "totalFat": 0.995,
      "cholesterol": 0.97
    }
  ];

  const moderateProteinData = [
    {
      "id": 1,
      "name": "Cheese",
      "icon": "🧀",
      "calories": 3.93,
      "carbohydrate": 0.0144,
      "protein": 0.2696,
      "totalFat": 0.3099,
      "cholesterol": 0.93
    },
    {
      "id": 2,
      "name": "Mushroom",
      "icon": "🍄",
      "calories": 0.22,
      "carbohydrate": 0.0326,
      "protein": 0.0309,
      "totalFat": 0.0034,
      "cholesterol": 0
    },
    {
      "id": 3,
      "name": "Bread",
      "icon": "🍞",
      "calories": 2.74,
      "carbohydrate": 0.4754,
      "protein": 0.1067,
      "totalFat": 0.0453,
      "cholesterol": 0
    },
    {
      "id": 4,
      "name": "Pizza",
      "icon": "🍕",
      "calories": 2.66,
      "carbohydrate": 0.3333,
      "protein": 0.1139,
      "totalFat": 0.17,
      "cholesterol": 0.0969
    },
    {
      "id": 5,
      "name": "Rice",
      "icon": "🍚",
      "calories": 1.3,
      "carbohydrate": 0.2859,
      "protein": 0.0238,
      "totalFat": 0.0021,
      "cholesterol": 0
    },
    {
      "id": 6,
      "name": "Milk",
      "icon": "🥛",
      "calories": 0.64,
      "carbohydrate": 0.0465,
      "protein": 0.0328,
      "totalFat": 0.0366,
      "cholesterol": 0.14
    },
    {
      "id": 7,
      "name": "Black Tea",
      "icon": "🍵",
      "calories": 0.01,
      "carbohydrate": 0.003,
      "protein": 0,
      "totalFat": 0,
      "cholesterol": 0
    },
    {
      "id": 8,
      "name": "Beer",
      "icon": "🍺",
      "calories": 0.43,
      "carbohydrate": 0.0355,
      "protein": 0.0046,
      "totalFat": 0,
      "cholesterol": 0
    }
  ];


  const lowProteinData = [
    {
      "id": 1,
      "name": "Corn",
      "icon": "🌽",
      "calories": 0.96,
      "carbohydrate": 0.2098,
      "protein": 0.0341,
      "totalFat": 0.015,
      "cholesterol": 0
    },
    {
      "id": 2,
      "name": "Chocolate Bar",
      "icon": "🍫",
      "calories": 5.18,
      "carbohydrate": 0.6459,
      "protein": 0.0651,
      "totalFat": 0.2599,
      "cholesterol": 0.11
    },
    {
      "id": 3,
      "name": "Cookie",
      "icon": "🍪",
      "calories": 4.97,
      "carbohydrate": 0.661,
      "protein": 0.046,
      "totalFat": 0.252,
      "cholesterol": 0
    },
    {
      "id": 4,
      "name": "Carrot",
      "icon": "🥕",
      "calories": 0.41,
      "carbohydrate": 0.0958,
      "protein": 0.0093,
      "totalFat": 0.0024,
      "cholesterol": 0
    },
    {
      "id": 5,
      "name": "Potato",
      "icon": "🥔",
      "calories": 0.9,
      "carbohydrate": 0.2071,
      "protein": 0.0201,
      "totalFat": 0.0015,
      "cholesterol": 0
    },
    {
      "id": 6,
      "name": "Tomato",
      "icon": "🍅",
      "calories": 0.18,
      "carbohydrate": 0.0389,
      "protein": 0.0088,
      "totalFat": 0.002,
      "cholesterol": 0
    },
    {
      "id": 7,
      "name": "Strawberry",
      "icon": "🍓",
      "calories": 0.32,
      "carbohydrate": 0.0768,
      "protein": 0.0067,
      "totalFat": 0.003,
      "cholesterol": 0
    },
    {
      "id": 8,
      "name": "Lemon",
      "icon": "🍋",
      "calories": 0.29,
      "carbohydrate": 0.0932,
      "protein": 0.011,
      "totalFat": 0.003,
      "cholesterol": 0
    },
    {
      "id": 9,
      "name": "Apple",
      "icon": "🍎",
      "calories": 0.63,
      "carbohydrate": 0.1522,
      "protein": 0.002,
      "totalFat": 0.0018,
      "cholesterol": 0
    },
    {
      "id": 10,
      "name": "Cucumber",
      "icon": "🥒",
      "calories": 0.15,
      "carbohydrate": 0.0363,
      "protein": 0.0065,
      "totalFat": 0.0011,
      "cholesterol": 0
    }
  ];
  return (
    <div>
      <div className="tablesNutrition">
        <Tabs
          defaultActiveKey="high"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="high" title={<span style={{ color: 'blue' }}>High Protein</span>}>
            <Table responsive>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>🍽️</th>
                  <th>Calories</th>
                  <th>Carbohydrate</th>
                  <th>Protein</th>
                  <th>Total Fat</th>
                  <th>Cholestrol</th>
                </tr>
              </thead>
              <tbody>
                {highProteinData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.icon}</td>
                    <td>{item.calories}</td>
                    <td>{item.carbohydrate}</td>
                    <td>{item.protein}</td>
                    <td>{item.totalFat}</td>
                    <td>{item.cholesterol}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="moderate" title={<span style={{ color: 'blue' }}>Moderate Protein</span>}>
            <Table responsive>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>🍽️</th>
                  <th>Calories</th>
                  <th>Carbohydrate</th>
                  <th>Protein</th>
                  <th>Total Fat</th>
                  <th>Cholestrol</th>
                </tr>
              </thead>
              <tbody>
                {moderateProteinData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.icon}</td>
                    <td>{item.calories}</td>
                    <td>{item.carbohydrate}</td>
                    <td>{item.protein}</td>
                    <td>{item.totalFat}</td>
                    <td>{item.cholesterol}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="low" title={<span style={{ color: 'blue' }}>Low Protein</span>}>
            <Table responsive>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>🍽️</th>
                  <th>Calories</th>
                  <th>Carbohydrate</th>
                  <th>Protein</th>
                  <th>Total Fat</th>
                  <th>Cholestrol</th>
                </tr>
              </thead>
              <tbody>
                {lowProteinData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.icon}</td>
                    <td>{item.calories}</td>
                    <td>{item.carbohydrate}</td>
                    <td>{item.protein}</td>
                    <td>{item.totalFat}</td>
                    <td>{item.cholesterol}</td>
                  </tr>
                ))}
              </tbody>

            </Table>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
