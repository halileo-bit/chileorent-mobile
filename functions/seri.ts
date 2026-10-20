import { seris } from "@/constants";

export function getSeri(idSeri: number): string {
    const seri = seris.find(
        (item) => item.idSeri === idSeri
    ); // [1]

    return seri?.namaSeri ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaSeri berdasarkan idSeri dari daftar seris di @/constants
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi di kanan jika object.prop tidak ada, jika ada ambil yang di kiri.
=================================================================*/
