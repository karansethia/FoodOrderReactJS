import React, { useEffect, useState } from 'react'
import Card from '../../UI/Card/Card';
import classes from './AvailableMeals.module.css'
import MealItem from '../MealItem/MealItem';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([])

  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch('https://zwiggybykaran-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const resData = await response.json();
      const mealsData = [];
      for (const mealId in resData) {
        mealsData.push({
          id: mealId,
          name: resData[mealId].name,
          desc: resData[mealId].desc,
          price: resData[mealId].price
        })
      }
      setMeals(mealsData)
    }
    fetchMeals();
  }, [])


  const mealsList = meals.map(mealItem => <MealItem id={mealItem.id} key={mealItem.id} name={mealItem.name} desc={mealItem.description} price={mealItem.price} />
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;