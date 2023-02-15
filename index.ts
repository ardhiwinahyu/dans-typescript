import axios from "axios";

//Object dengan Interface Mahasiswa
const mhs1: Mahasiswa = {
	nama: "yonos",
	umur: 24,
	hobi: ["bermain bola", "membaca"],
	perkenalan: function () {
		console.log("halo saya ", this.nama);
	},
};

mhs1.perkenalan();
//Tipe data

const bool: boolean = true;
const iniString: string = "Halo ini string ya";
const angka: number = 22;
const iniTuples: [number, string] = [20, "Ini tuples ya"];

//Generics

//array dengan 1 tipe data
const arrNumber: Array<number> = [1, 2, 3, 4, 5, 6];
const arrString: Array<string> = ["Sari", "Lala", "Bowo"];

//function dengan generic
const consArg = function <T>(arr: Array<T>): T {
	console.log(arr);
	return arr[arr.length - 1];
};

const cobaCons = consArg<number>([1, 2, 3, 4]);
const cobaCons2 = consArg<string>(["Asep", "Maju", "Jalan"]);

//function void
const iniFuncVoid = function (a: string): void {
	console.log(a);
};

iniFuncVoid("Halo ini void ya");

console.log(mhs1);

//class

class MahasiswaClass implements Mahasiswa {
	nama: string;
	umur: number;
	hobi: string[];

	constructor(nama: string, umur: number, hobi: string[]) {
		this.nama = nama;
		this.umur = umur;
		this.hobi = hobi;
	}

	perkenalan(): void {
		console.log(`halo saya ${this.nama}, saya berumur ${this.umur}. Hobi saya ${this.hobi}`);
	}
}

const mhs2 = new MahasiswaClass("agus", 20, ["Menari", "berenang"]);

mhs2.perkenalan();

//hit api dengan axios

const jsonAPI = async function (a: string) {
	try {
		const getData = await axios.get(a);
		const data = await getData.data;
		console.log(data);
		return getData;
	} catch (error) {
		console.log(error);
	}
};

const cek = jsonAPI("https://jsonplaceholder.typicode.com/posts");

console.log(cek);
