export function formatRupiah(harga: number): string {
    return "Rp " + harga.toLocaleString("id-ID"); // [1]
}

/* ======================== EXPLANATION ========================
[1]: Fungsi ini mengubah angka harga sewa (misal 120000) menjadi format mata uang Rupiah (Rp 120.000).
=================================================================*/
