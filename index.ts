import axios from 'axios';
import inquirer from 'inquirer';

const options = {
  method: 'GET',
  url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
  params: {
    query: '',
  },
  headers: {
    'X-RapidAPI-Key': '452298dedamshbd47feb03b2f5fdp1e48fcjsndbc166b65eb6',
    'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
  },
};

const prompt = inquirer.createPromptModule();

const askQuestion = async () => {
  const questions = [
    {
      type: 'input',
      name: 'query',
      message: 'Enter the name of the recipe you are looking for:',
    },
  ];

  const answer = await prompt(questions);
  options.params.query = answer.query;
};

const getRecipe = async () => {
  try {
    await askQuestion();
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getRecipe();


