import { grades } from "@/constants";

export function getGrade(idGrade: number): string {
    const grade = grades.find(
        (item) => item.idGrade === idGrade
    ); // [1]

    return grade?.namaGrade ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaGrade berdasarkan idGrade dari daftar grades di @/constants
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi di kanan jika object.prop tidak ada, jika ada ambil yang di kiri.
=================================================================*/
