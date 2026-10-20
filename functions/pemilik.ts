import { pemiliks } from "@/constants";

export function getPemilik(idPemilik: number): string {
    const pemilik = pemiliks.find(
        (item) => item.idPemilik === idPemilik
    ); // [1]

    return pemilik?.namaPemilik ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaPemilik berdasarkan idPemilik dari daftar pemiliks di @/constants
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi di kanan jika object.prop tidak ada, jika ada ambil yang di kiri.
=================================================================*/
