import _ from "lodash";
import "./style.css";
import { inputBoxFunction } from "./createProject";
import { createTitle } from "./createPage";
import { loadOnPage } from "./loadOnPage";
import { getTodo } from "./test";
import { deleteProject } from "./deleteProject";
createTitle();
inputBoxFunction();
loadOnPage();
