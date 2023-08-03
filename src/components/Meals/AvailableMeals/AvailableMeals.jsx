import React, { useEffect, useState } from 'react'
import Card from '../../UI/Card/Card';
import classes from './AvailableMeals.module.css'
import MealItem from '../MealItem/MealItem';
import Loader from '../../UI/Loader/Loader';
import ErrorPage from '../../Layout/ErrorPage';


const AvailableMeals = () => {

  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [fError, setError] = useState()

  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch('https://zwiggybykaran-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      if (!response.ok) {
        throw new Error('Soemthing went wrong')
      }
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
      setMeals(mealsData);
      setTimeout(() => {
        setIsLoading(false)
      }, 2500);
    }

    fetchMeals().catch(error => {
      setIsLoading(false)
      setError(error.message)
    });

  }, [])

  if (fError) {
    console.log(fError);
    return (
      <section className={classes.meals}>
        <Card>
          <ErrorPage />
        </Card>
      </section>
    )
  }

  const mealsList = meals.map(mealItem => <MealItem id={mealItem.id} key={mealItem.id} name={mealItem.name} desc={mealItem.desc} price={mealItem.price} />
  );

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <h2 className={classes.header}>Loading Delicious Meals for you</h2>}
        {isLoading && <Loader />}
        {!isLoading && <ul>
          {mealsList}
        </ul>}
      </Card>
    </section>
  )
}

export default AvailableMeals;