import { AboutController } from "./controllers/AboutController.js";
import { SpellsController } from "./controllers/SpellsController.js";
import { UserSpellsController } from "./controllers/UserSpellsController.js";

export const router = [
  {
    path: '',
    controller: [SpellsController, UserSpellsController]
  },
  {
    path: '#/about',
    controller: AboutController
  }
]