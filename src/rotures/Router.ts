import Router from 'koa-router';
import { addRecipe, getRecipes } from '../controllers';
import bodyParser from 'koa-bodyparser';

export const router = new Router();

router.get('/recipes', getRecipes);

router.post('/recipe', bodyParser(), addRecipe);
