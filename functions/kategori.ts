import { kategoris } from "@/constants";

export function getKategori(idKategori: number): string {
    const kategori = kategoris.find(
        (item) => item.idKategori === idKategori
    ); // [1]

    return kategori?.namaKategori ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaKategori berdasarkan idKategori dari daftar kategoris di @/constants
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi di kanan jika object.prop tidak ada, jika ada ambil yang di kiri.
=================================================================*/
