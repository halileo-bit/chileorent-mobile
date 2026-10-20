import { kelengkapans } from "@/constants";

export function getKelengkapansByKostum(
    idKostum: number
) {
    return kelengkapans.filter(
        (kelengkapan) => kelengkapan.idKostum === idKostum
    ); // [1]
}

/* ======================== EXPLANATION ========================
[1]: Fungsi ini memfilter daftar kelengkapan kostum berdasarkan idKostum yang dipilih
menggunakan array.filter() agar hanya kelengkapan milik kostum tersebut yang ditampilkan.
=================================================================*/
