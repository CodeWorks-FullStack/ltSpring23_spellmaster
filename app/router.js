import { UserSpellsController } from "../../app/controllers/UserSpellsController.js";
import { SpellsController } from "./controllers/SpellsController.js";

export const router = [
  {
    path: '',
    controller: [SpellsController, UserSpellsController]
  }
]