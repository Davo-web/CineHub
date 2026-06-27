import { burgerBtn } from './ui/burger.js';
import { settingsBtnClick } from './ui/settingsBtn.js';
import { itemClick } from './ui/sidebarNav.js';
import { themeBtnClick } from './ui/themeBtn.js';
import { renderTrending } from './ui/trending.js';
import { renderPopular } from './ui/popular.js';
import { renderHero } from './ui/hero.js';
import { renderUpcoming } from './ui/upcoming.js';
import { rout } from './utils/router.js';

burgerBtn();
settingsBtnClick();
itemClick();
themeBtnClick();
renderHero();
renderTrending();
renderPopular();
renderUpcoming();
rout();