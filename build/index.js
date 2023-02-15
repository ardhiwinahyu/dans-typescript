"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//Object dengan Interface Mahasiswa
const mhs1 = {
    nama: "yonos",
    umur: 24,
    hobi: ["bermain bola", "membaca"],
    perkenalan: function () {
        console.log("halo saya ", this.nama);
    },
};
mhs1.perkenalan();
//Tipe data
const bool = true;
const iniString = "Halo ini string ya";
const angka = 22;
const iniTuples = [20, "Ini tuples ya"];
//Generics
//array dengan 1 tipe data
const arrNumber = [1, 2, 3, 4, 5, 6];
const arrString = ["Sari", "Lala", "Bowo"];
//function dengan generic
const consArg = function (arr) {
    console.log(arr);
    return arr[arr.length - 1];
};
const cobaCons = consArg([1, 2, 3, 4]);
const cobaCons2 = consArg(["Asep", "Maju", "Jalan"]);
//function void
const iniFuncVoid = function (a) {
    console.log(a);
};
iniFuncVoid("Halo ini void ya");
console.log(mhs1);
//class
class MahasiswaClass {
    constructor(nama, umur, hobi) {
        this.nama = nama;
        this.umur = umur;
        this.hobi = hobi;
    }
    perkenalan() {
        console.log(`halo saya ${this.nama}, saya berumur ${this.umur}. Hobi saya ${this.hobi}`);
    }
}
const mhs2 = new MahasiswaClass("agus", 20, ["Menari", "berenang"]);
mhs2.perkenalan();
//hit api dengan axios
const jsonAPI = function (a) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getData = yield axios_1.default.get(a);
            const data = yield getData.data;
            console.log(data);
            return getData;
        }
        catch (error) {
            console.log(error);
        }
    });
};
const cek = jsonAPI("https://jsonplaceholder.typicode.com/posts");
console.log(cek);
