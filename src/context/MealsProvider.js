import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MealsContext from './MealsContext';

export default function MealsProvider({ children }) {
  const [apiMealsNameData, setApiMealsNameData] = useState(undefined);
  const [apiMealsCategoryData, setApiMealsCategoryData] = useState(undefined);

  useEffect(() => {

    const apiMealsNameCall = async () => {
      const url = 'https://rtpoziwmyvjihhsfomym.supabase.co/rest/v1/meals';
      
      const options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      };
  
      try {
          const response = await fetch(url, options);
          const { meals } = await response.json();
          setApiMealsNameData(meals);
      } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
      }
  };

    // const apiMealsNameCall = async () => {
    //   const url = 'https://rtpoziwmyvjihhsfomym.supabase.co/rest/v1/meals';
    //   const response = await fetch(url);
    //   const { meals } = await response.json();
    //   setApiMealsNameData(meals);
    // };
    const apiMealsCategoryCall = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(url);
      const { meals } = await response.json();
      setApiMealsCategoryData(meals);
    };
    apiMealsNameCall(); apiMealsCategoryCall();
  }, []);

  const value = useMemo(
    () => ({
      apiMealsNameData,
      apiMealsCategoryData,
    }),
    [apiMealsNameData, apiMealsCategoryData],
  );

  return (
    <MealsContext.Provider value={ value }>
      { children }
    </MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
