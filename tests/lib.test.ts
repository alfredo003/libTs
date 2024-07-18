/* //test function *strrev*

import {strrev} from "../lib";
let a = strrev("Hello World".split(''));
console.log(a);
*/

/*//test function *strchr*

import {strchr} from "../lib";
let a = strchr("Hello, world!".split(''),"z");
console.log(a);*/

/*//test function *strchr*

import {strspn} from "../lib";
let s:string[] = "abcdef".split('');
let accept:string[] = "abc".split('');

let a = strspn(s,accept);
console.log(a);*/

//test function *union*

import {union} from "../lib";
let s:string[] = "padinton".split('');
let accept:string[] = "paqefwtdjetyiytjneytjoeyjnejeyj".split('');

let a = union(s,accept);
console.log(a);