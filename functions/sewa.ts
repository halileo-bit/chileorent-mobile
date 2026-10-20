import { sewas } from "@/constants";

export function getSewasByKostum(
    idKostum: number
) {
    return sewas.filter(
        (sewa) => sewa.idKostum === idKostum
    ); // [1]
}

export function filterSewas(
    data: typeof sewas,
    filter: "semua" | "selesai" | "aktif"
) {
    if (filter === "semua") {
        return data;
    }

    if (filter === "selesai") {
        return data.filter(
            (sewa) => sewa.isSelesai === true
        );
    }

    return data.filter(
        (sewa) => sewa.isSelesai === false
    ); // [2]
}

/* ======================== EXPLANATION ========================
[1]: Mengambil daftar riwayat sewa yang sesuai dengan idKostum yang sedang dibuka.
[2]: Menyaring data riwayat sewa berdasarkan status filter ("semua", "selesai", atau "aktif").
=================================================================*/
