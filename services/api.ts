/* =========================================================
 * Service API & Custom Promise Handler
 * Modul 3: Pemrograman Asynchronous & API Call
 * Mendemonstrasikan:
 * 1. Pembuatan Promise manual dengan new Promise(executor)
 * 2. Pemanggilan resolve() saat operasi berhasil
 * 3. Pemanggilan reject() saat operasi gagal
 * ========================================================= */

/**
 * Custom Promise: Memeriksa stabilitas koneksi ke server external API
 * Menggunakan executor (resolve, reject)
 *
 * @param forceFail - Boolean untuk mensimulasikan kegagalan jaringan (testing reject)
 * @returns Promise<string>
 */
export function checkKoneksiApi(forceFail: boolean = false): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    // Operasi asynchronous menggunakan setTimeout untuk simulasi latensi jaringan
    setTimeout(() => {
      if (forceFail) {
        // [REJECT]: Dipanggil saat terjadi kesalahan / kondisi gagal
        reject(
          new Error(
            "Gagal terhubung ke External Review Server. (Simulasi reject aktif)"
          )
        );
      } else {
        // [RESOLVE]: Dipanggil saat operasi berhasil diselesaikan
        resolve("Koneksi ke External API Berhasil!");
      }
    }, 600);
  });
}

/**
 * Custom Promise: Memvalidasi ketersediaan data ulasan
 * Memperlihatkan resolve() jika data ada, dan reject() jika data kosong
 */
export function validasiDataUlasan(jumlahData: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    if (jumlahData > 0) {
      resolve(true); // Sukses resolve
    } else {
      reject(new Error("Tidak ada data ulasan eksternal yang tersedia")); // Gagal reject
    }
  });
}
