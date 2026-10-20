import { ukurans } from "@/constants";

export function getUkuran(idUkuran: number): string {
    const ukuran = ukurans.find(
        (item) => item.idUkuran === idUkuran
    ); // [1]

    return ukuran?.namaUkuran ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaUkuran berdasarkan idUkuran dari daftar ukurans di @/constants
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi di kanan jika object.prop tidak ada, jika ada ambil yang di kiri.
=================================================================*/
