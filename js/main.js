/*******************************************************

 Project name:             knznsmn
 Author:                   Julius Cinco Cesar
                           knznsmn@knznsmn.com
                           @knznsmn

 Date created:             March 22, 2025
                           10:41:19

*******************************************************/

// Function Hall
import { get_current_year } from "./modules/utils.js";
import { Nav } from "./modules/header.js";


// UI
const ans      = document.getElementById('ans');
ans.innerText = get_current_year();
Nav();
