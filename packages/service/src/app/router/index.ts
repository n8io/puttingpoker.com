import express from 'express';
import { Route } from 'types/route';
import { heartbeat } from './heartbeat';
import { refreshToken } from './refreshToken';

const router = express.Router();

router.get(Route.HEARTBEAT, heartbeat);
router.post(Route.REFRESH_TOKEN, refreshToken);

export { router };
