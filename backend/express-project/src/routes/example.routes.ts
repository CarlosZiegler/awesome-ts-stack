import { Router } from 'express';

import { exampleController } from '../controllers';

export const router = Router();

router.get('/', exampleController.handler);
