import { createCourse } from "../models/course";
import { getRandomDate, getRandomElement, getRandomNumber } from "./random";
export function getRandomCourse(courseData){
    ///
    let id = getRandomNumber(courseData["minId"], courseData["maxid"]);
    let name = getRandomElement(courseData["courses"]);
    let lecturer = getRandomElement(courseData["lectors"]);
    let hours = getRandomNumber(courseData["minHours"], courseData["maxHours"]);
    let cost = getRandomNumber(courseData["minCost"], courseData["maxCost"]);
    let openingDate = getRandomDate(courseData["minYear"], courseData["maxYear"]);

    //TODO getting random arguments for the below function call
    return createCourse(id, name, lecturer, hours, cost, openingDate);
}