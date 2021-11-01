import _ from "lodash";
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');
 
// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');
 
// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');

const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let collect_task = ["rena", "omen"];

let not_collect = _.difference(anggota_kelas, collect_task);
console.log(not_collect);

let kelompok = _.chunk(anggota_kelas, 2);
console.log(kelompok);

let anggota_kelas2 = _.join(anggota_kelas, "-");
console.log(anggota_kelas2);

let anggota_kelas3 = _.drop(anggota_kelas, 1);
console.log(anggota_kelas3);

let anggota_kelas4 = _.reverse(anggota_kelas);
console.log(anggota_kelas4);