import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const MEALS = [
    {
        id: 'm1',
        name: 'sushi',
        description: 'finest fish and veggies',
        price: 56.99,
    },
    {
        id: 'm2',
        name: 'fried rice',
        description: 'rice made with curry ',
        price: 18.99,
    },
    {
        id: 'm3',
        name: 'jollof rice',
        description: 'rice and stew mixed',
        price: 38.99,
    },
    {
        id: 'm4',
        name: 'salad',
        description: 'carbage, carrot, cucumber and cream',
        price: 22.99,
    },
];

const AvailableMeals = () => {
    const MealsList = MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{MealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;